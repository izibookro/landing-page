const OPEN_MS = 260;
const CLOSE_MS = 200;
const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getPanelContentHeight(panel: HTMLElement): number {
  const inner = panel.querySelector<HTMLElement>('.faq-item__panel-inner');
  return inner?.scrollHeight || panel.scrollHeight || 0;
}

export function initFaqAccordion(root: HTMLElement): () => void {
  const items = Array.from(
    root.querySelectorAll<HTMLDetailsElement>('details.faq-item'),
  );
  const cleanups: Array<() => void> = [];
  const reduceMotion = prefersReducedMotion();

  items.forEach((details) => {
    const summary = details.querySelector('summary');
    const panel = details.querySelector<HTMLElement>('.faq-item__panel');
    if (!summary || !panel) return;

    let activeAnimation: Animation | null = null;
    let isAnimating = false;

    const cancelActive = () => {
      activeAnimation?.cancel();
      activeAnimation = null;
    };

    const setExpanded = (expanded: boolean) => {
      summary.setAttribute('aria-expanded', String(expanded));
      panel.setAttribute('aria-hidden', String(!expanded));
    };

    // Keep details.open always true so content stays laid out.
    // Visual open/close is height-only — avoids the display:none pop.
    details.open = true;

    const initiallyOpen = details.classList.contains('is-open');
    if (initiallyOpen) {
      details.classList.add('is-open');
      panel.style.height = '';
      panel.style.overflow = '';
      setExpanded(true);
    } else {
      details.classList.remove('is-open');
      panel.style.height = '0px';
      panel.style.overflow = 'hidden';
      setExpanded(false);
    }

    const onSummaryClick = async (event: MouseEvent) => {
      event.preventDefault();
      if (isAnimating) return;

      const shouldOpen = !details.classList.contains('is-open');
      isAnimating = true;
      cancelActive();

      if (shouldOpen) {
        const target = getPanelContentHeight(panel);

        // Lock collapsed with inline styles BEFORE toggling is-open,
        // otherwise CSS height:auto flashes a full panel for one frame.
        panel.style.overflow = 'hidden';
        panel.style.height = '0px';
        details.classList.add('is-open');
        setExpanded(true);

        if (reduceMotion || target === 0) {
          panel.style.height = '';
          panel.style.overflow = '';
          isAnimating = false;
          return;
        }

        const animation = panel.animate(
          { height: ['0px', `${target}px`] },
          { duration: OPEN_MS, easing: EASE, fill: 'forwards' },
        );
        activeAnimation = animation;

        try {
          await animation.finished;
        } catch {
          // canceled
        }

        if (activeAnimation === animation) {
          animation.cancel();
          activeAnimation = null;
          panel.style.height = '';
          panel.style.overflow = '';
        }

        isAnimating = false;
        return;
      }

      const from = getPanelContentHeight(panel);
      panel.style.overflow = 'hidden';
      panel.style.height = `${from}px`;
      details.classList.remove('is-open');
      setExpanded(false);

      if (reduceMotion || from === 0) {
        panel.style.height = '0px';
        isAnimating = false;
        return;
      }

      const animation = panel.animate(
        { height: [`${from}px`, '0px'] },
        { duration: CLOSE_MS, easing: EASE, fill: 'forwards' },
      );
      activeAnimation = animation;

      try {
        await animation.finished;
      } catch {
        // canceled
      }

      if (activeAnimation === animation) {
        animation.cancel();
        activeAnimation = null;
        panel.style.height = '0px';
        panel.style.overflow = 'hidden';
      }

      isAnimating = false;
    };

    summary.addEventListener('click', onSummaryClick);
    cleanups.push(() => {
      cancelActive();
      summary.removeEventListener('click', onSummaryClick);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
