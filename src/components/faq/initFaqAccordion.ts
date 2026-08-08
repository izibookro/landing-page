const PANEL_TRANSITION =
  'height 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms ease';

function setPanelOpen(panel: HTMLElement, animate: boolean) {
  panel.style.overflow = 'hidden';

  if (!animate) {
    panel.style.transition = 'none';
    panel.style.height = 'auto';
    panel.style.opacity = '1';
    return;
  }

  panel.style.transition = PANEL_TRANSITION;
  panel.style.height = '0px';
  panel.style.opacity = '0';

  requestAnimationFrame(() => {
    panel.style.height = `${panel.scrollHeight}px`;
    panel.style.opacity = '1';
  });
}

function setPanelClosed(
  panel: HTMLElement,
  animate: boolean,
  onDone?: () => void,
) {
  panel.style.overflow = 'hidden';

  if (!animate) {
    panel.style.transition = 'none';
    panel.style.height = '0px';
    panel.style.opacity = '0';
    onDone?.();
    return;
  }

  panel.style.transition = PANEL_TRANSITION;
  panel.style.height = `${panel.scrollHeight}px`;
  panel.style.opacity = '1';

  requestAnimationFrame(() => {
    panel.style.height = '0px';
    panel.style.opacity = '0';
  });

  const handleEnd = (event: TransitionEvent) => {
    if (event.propertyName !== 'height') return;
    panel.removeEventListener('transitionend', handleEnd);
    onDone?.();
  };

  panel.addEventListener('transitionend', handleEnd);
}

export function initFaqAccordion(root: HTMLElement): () => void {
  const items = Array.from(
    root.querySelectorAll<HTMLDetailsElement>('details.faq-item'),
  );
  const cleanups: Array<() => void> = [];
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  items.forEach((details) => {
    const summary = details.querySelector('summary');
    const panel = details.querySelector<HTMLElement>('.faq-item__panel');
    if (!summary || !panel) return;

    let isAnimating = false;

    if (details.open || details.classList.contains('is-open')) {
      details.open = true;
      details.classList.add('is-open');
      setPanelOpen(panel, false);
    } else {
      details.classList.remove('is-open');
      setPanelClosed(panel, false);
    }

    const onSummaryClick = (event: MouseEvent) => {
      event.preventDefault();
      if (isAnimating) return;

      const shouldOpen = !details.open;
      const animate = !reduceMotion;
      isAnimating = true;

      if (shouldOpen) {
        details.open = true;
        details.classList.add('is-open');
        setPanelOpen(panel, animate);

        if (!animate) {
          isAnimating = false;
          return;
        }

        const handleEnd = (transitionEvent: TransitionEvent) => {
          if (transitionEvent.propertyName !== 'height') return;
          panel.removeEventListener('transitionend', handleEnd);
          panel.style.height = 'auto';
          isAnimating = false;
        };

        panel.addEventListener('transitionend', handleEnd);
        return;
      }

      details.classList.remove('is-open');
      setPanelClosed(panel, animate, () => {
        details.open = false;
        isAnimating = false;
      });
    };

    summary.addEventListener('click', onSummaryClick);
    cleanups.push(() => summary.removeEventListener('click', onSummaryClick));
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
