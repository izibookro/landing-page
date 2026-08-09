const PANEL_DURATION_MS = 420;

function waitForPanelTransition(
  panel: HTMLElement,
  reduceMotion: boolean,
): Promise<void> {
  if (reduceMotion) return Promise.resolve();

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      panel.removeEventListener('transitionend', onEnd);
      window.clearTimeout(timeoutId);
      resolve();
    };

    const onEnd = (event: TransitionEvent) => {
      if (event.target !== panel) return;
      if (event.propertyName !== 'grid-template-rows') return;
      finish();
    };

    panel.addEventListener('transitionend', onEnd);
    const timeoutId = window.setTimeout(finish, PANEL_DURATION_MS + 80);
  });
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
    } else {
      details.open = false;
      details.classList.remove('is-open');
    }

    const onSummaryClick = async (event: MouseEvent) => {
      event.preventDefault();
      if (isAnimating) return;

      const shouldOpen = !details.classList.contains('is-open');
      isAnimating = true;

      if (shouldOpen) {
        details.open = true;
        // Force layout so the 0fr → 1fr transition always runs.
        void panel.offsetHeight;
        details.classList.add('is-open');
        await waitForPanelTransition(panel, reduceMotion);
        isAnimating = false;
        return;
      }

      details.classList.remove('is-open');
      await waitForPanelTransition(panel, reduceMotion);
      details.open = false;
      isAnimating = false;
    };

    summary.addEventListener('click', onSummaryClick);
    cleanups.push(() => summary.removeEventListener('click', onSummaryClick));
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
