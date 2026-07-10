import Swiper from 'swiper';
import 'swiper/css';
import { A11y, Navigation } from 'swiper/modules';

export function initBlogCarousel(root: HTMLElement): () => void {
  const swiperEl = root.querySelector<HTMLElement>('[data-blog-swiper]');
  const prevEl = root.querySelector<HTMLElement>('[data-blog-prev]');
  const nextEl = root.querySelector<HTMLElement>('[data-blog-next]');

  if (!swiperEl || !prevEl || !nextEl) return () => {};

  const swiper = new Swiper(swiperEl, {
    modules: [A11y, Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 520,
    watchOverflow: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      prevEl,
      nextEl,
    },
    a11y: {
      prevSlideMessage: 'Articol anterior',
      nextSlideMessage: 'Articol urmator',
    },
  });

  return () => {
    swiper.destroy(true, true);
  };
}
