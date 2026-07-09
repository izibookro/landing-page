import type { Swiper as SwiperInstance } from 'swiper';
import Swiper from 'swiper';
import { A11y, EffectCoverflow, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface ScreenData {
  title: string;
  description: string;
}

const TAP_MAX_PX = 8;
const SNAP_DURATION = 680;
const SNAP_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function initAppShowcase(root: HTMLElement): () => void {
  const swiperEl = root.querySelector<HTMLElement>('.app-showcase__swiper');
  const caption = root.querySelector<HTMLElement>('[data-caption]');
  const captionTitle = root.querySelector<HTMLElement>('[data-caption-title]');
  const captionDesc = root.querySelector<HTMLElement>('[data-caption-desc]');
  const indicators = [
    ...root.querySelectorAll<HTMLButtonElement>('[data-indicator]'),
  ];

  if (!swiperEl) return () => {};

  const screens: ScreenData[] = [
    ...swiperEl.querySelectorAll('[data-slide]'),
  ].map((slide) => ({
    title: (slide as HTMLElement).dataset.title ?? '',
    description: (slide as HTMLElement).dataset.description ?? '',
  }));

  if (screens.length === 0) return () => {};

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const startIndex = Math.floor(screens.length / 2);

  let captionTimer: ReturnType<typeof setTimeout> | undefined;
  let dragStartIndex = startIndex;
  let didDrag = false;
  let lastSyncedIndex = startIndex;

  const getClosestIndex = (swiper: SwiperInstance) => {
    let closestIndex = swiper.activeIndex;
    let minDistance = Infinity;

    swiper.slides.forEach((slideEl, index) => {
      const progress = Math.abs(
        (slideEl as HTMLElement & { progress?: number }).progress ?? 1,
      );

      if (progress < minDistance) {
        minDistance = progress;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const updateUI = (swiper: SwiperInstance, index = swiper.activeIndex) => {
    if (index < 0 || index >= screens.length) return;

    const screen = screens[index];
    if (!screen || !captionTitle || !captionDesc) return;

    indicators.forEach((indicator, i) => {
      const isActive = i === index;
      indicator.classList.toggle('is-active', isActive);
      indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (index === lastSyncedIndex) return;

    lastSyncedIndex = index;
    caption?.classList.add('is-changing');

    if (captionTimer) clearTimeout(captionTimer);

    captionTimer = setTimeout(() => {
      captionTitle.textContent = screen.title;
      captionDesc.textContent = screen.description;
      caption?.classList.remove('is-changing');
    }, 100);
  };

  const applySnapEasing = (instance: SwiperInstance) => {
    instance.wrapperEl.style.transitionTimingFunction = SNAP_EASE;

    instance.slides.forEach((slide) => {
      (slide as HTMLElement).style.transitionTimingFunction = SNAP_EASE;
    });
  };

  const centerOnStart = (swiper: SwiperInstance) => {
    swiper.update();
    swiper.slideTo(startIndex, 0);
    updateUI(swiper, startIndex);
  };

  const swiper = new Swiper(swiperEl, {
    modules: [EffectCoverflow, Keyboard, A11y],
    effect: prefersReducedMotion ? 'slide' : 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    rewind: true,
    initialSlide: startIndex,
    speed: prefersReducedMotion ? 280 : SNAP_DURATION,
    slideToClickedSlide: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.22,
    longSwipesMs: 220,
    preventClicks: true,
    preventClicksPropagation: true,
    preventInteractionOnTransition: false,
    resistanceRatio: 0.82,
    touchRatio: 1,
    threshold: 5,
    touchAngle: 45,
    followFinger: true,
    touchStartPreventDefault: false,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    coverflowEffect: {
      rotate: 20,
      stretch: -12,
      depth: 0,
      modifier: 1,
      scale: 1,
      slideShadows: false,
    },
    a11y: {
      prevSlideMessage: 'Ecran anterior',
      nextSlideMessage: 'Ecran urmator',
    },
    on: {
      init: (instance) => {
        centerOnStart(instance);
        applySnapEasing(instance);
      },
      resize: (instance) => instance.update(),
      setTransition: (instance) => applySnapEasing(instance),
      slideChange: (instance) => updateUI(instance),
      touchStart: (instance) => {
        dragStartIndex = instance.activeIndex;
        didDrag = false;
      },
      sliderMove: (instance) => {
        didDrag = true;
        updateUI(instance, getClosestIndex(instance));
      },
      touchEnd: (instance) => {
        const moved = Math.abs(instance.touches.diff);

        if (!didDrag && moved < TAP_MAX_PX) {
          instance.slideTo(dragStartIndex, 0);
          updateUI(instance, dragStartIndex);
        }

        didDrag = false;
      },
    },
  });

  const onIndicatorClick = (event: Event) => {
    event.preventDefault();
    const button = event.currentTarget as HTMLButtonElement;
    const index = Number.parseInt(button.dataset.index ?? '0', 10);

    if (index === swiper.activeIndex) {
      updateUI(swiper, index);
      return;
    }

    swiper.slideTo(index, SNAP_DURATION);
    updateUI(swiper, index);
  };

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', onIndicatorClick);
  });

  const onLoad = () => centerOnStart(swiper);
  window.addEventListener('load', onLoad, { once: true });

  const resizeObserver = new ResizeObserver(() => {
    swiper.update();
  });
  resizeObserver.observe(swiperEl);

  return () => {
    if (captionTimer) clearTimeout(captionTimer);
    window.removeEventListener('load', onLoad);
    resizeObserver.disconnect();
    indicators.forEach((indicator) => {
      indicator.removeEventListener('click', onIndicatorClick);
    });
    swiper.destroy(true, true);
  };
}
