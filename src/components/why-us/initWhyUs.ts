export function initWhyUs(root: HTMLElement): () => void {
  const tablist = root.querySelector<HTMLElement>('[data-why-us-tablist]');
  const indicator = root.querySelector<HTMLElement>('[data-why-us-indicator]');
  const slider = root.querySelector<HTMLElement>('[data-why-us-slider]');
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-why-us-tab]')];
  const panels = [
    ...root.querySelectorAll<HTMLElement>('[data-why-us-panel]'),
  ];

  if (!tablist || !indicator || !slider || tabs.length === 0 || panels.length === 0) {
    return () => {};
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const panelDuration = prefersReducedMotion ? 0 : 560;
  let activeIndex = panels.findIndex((panel) =>
    panel.classList.contains('is-active'),
  );
  if (activeIndex < 0) activeIndex = 0;

  let isAnimating = false;

  const moveIndicator = (activeTab: HTMLButtonElement, animate = true) => {
    const listRect = tablist.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const offset = tabRect.left - listRect.left + tablist.scrollLeft;

    if (!animate) {
      indicator.style.transition = 'none';
    }

    indicator.style.width = `${tabRect.width}px`;
    indicator.style.transform = `translateX(${offset}px)`;

    if (!animate) {
      requestAnimationFrame(() => {
        indicator.style.transition = '';
      });
    }
  };

  const setPanelState = (
    panel: HTMLElement,
    {
      active,
      hidden,
      ariaHidden,
    }: { active: boolean; hidden: boolean; ariaHidden: boolean },
  ) => {
    panel.classList.toggle('is-active', active);
    panel.hidden = hidden;
    panel.setAttribute('aria-hidden', ariaHidden ? 'true' : 'false');
  };

  const resetPanelMotion = (panel: HTMLElement) => {
    panel.classList.remove(
      'is-entering',
      'is-leaving',
      'is-forward',
      'is-backward',
    );
  };

  const animatePanels = (nextIndex: number) => {
    const outgoing = panels[activeIndex];
    const incoming = panels[nextIndex];
    const direction = nextIndex > activeIndex ? 'forward' : 'backward';

    isAnimating = true;
    slider.classList.add('is-animating');

    resetPanelMotion(outgoing);
    resetPanelMotion(incoming);

    incoming.hidden = false;
    incoming.setAttribute('aria-hidden', 'false');
    incoming.classList.add('is-entering', direction === 'forward' ? 'is-forward' : 'is-backward');

    outgoing.classList.add('is-leaving', direction === 'forward' ? 'is-forward' : 'is-backward');
    outgoing.classList.remove('is-active');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        incoming.classList.add('is-active');
      });
    });

    window.setTimeout(() => {
      setPanelState(outgoing, {
        active: false,
        hidden: true,
        ariaHidden: true,
      });
      setPanelState(incoming, {
        active: true,
        hidden: false,
        ariaHidden: false,
      });

      resetPanelMotion(outgoing);
      resetPanelMotion(incoming);
      slider.classList.remove('is-animating');

      activeIndex = nextIndex;
      isAnimating = false;
    }, panelDuration);
  };

  const activate = (id: string) => {
    const nextIndex = tabs.findIndex((tab) => tab.dataset.whyUsTab === id);
    if (nextIndex < 0 || nextIndex === activeIndex || isAnimating) return;

    let activeTab: HTMLButtonElement | undefined;

    tabs.forEach((tab) => {
      const isActive = tab.dataset.whyUsTab === id;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) activeTab = tab;
    });

    if (prefersReducedMotion || panelDuration === 0) {
      panels.forEach((panel, index) => {
        setPanelState(panel, {
          active: index === nextIndex,
          hidden: index !== nextIndex,
          ariaHidden: index !== nextIndex,
        });
        resetPanelMotion(panel);
      });
      activeIndex = nextIndex;
    } else {
      animatePanels(nextIndex);
    }

    if (activeTab) moveIndicator(activeTab);
  };

  const onTabClick = (event: Event) => {
    const tab = (event.currentTarget as HTMLButtonElement).dataset.whyUsTab;
    if (tab) activate(tab);
  };

  const onResize = () => {
    const activeTab = tabs.find((tab) => tab.classList.contains('is-active'));
    if (activeTab) moveIndicator(activeTab, false);
  };

  const resizeObserver = new ResizeObserver(onResize);

  tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
  tablist.addEventListener('scroll', onResize, { passive: true });
  resizeObserver.observe(tablist);
  tabs.forEach((tab) => resizeObserver.observe(tab));
  window.addEventListener('resize', onResize);

  panels.forEach((panel, index) => {
    if (index !== activeIndex) {
      setPanelState(panel, {
        active: false,
        hidden: true,
        ariaHidden: true,
      });
    }
  });

  const initialTab =
    tabs.find((tab) => tab.classList.contains('is-active')) ?? tabs[0];
  if (initialTab) moveIndicator(initialTab, false);

  return () => {
    tabs.forEach((tab) => tab.removeEventListener('click', onTabClick));
    tablist.removeEventListener('scroll', onResize);
    resizeObserver.disconnect();
    window.removeEventListener('resize', onResize);
  };
}
