/** Run after first paint, when the main thread is idle. */
export function whenIdle(callback: () => void, timeout = 1500): void {
  const idle = (
    window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        options?: { timeout: number },
      ) => number;
    }
  ).requestIdleCallback;

  if (idle) {
    idle(() => callback(), { timeout });
    return;
  }

  window.addEventListener('load', () => setTimeout(callback, 1), { once: true });
}

/** Run once the element is close to the viewport. */
export function whenVisible(
  element: Element,
  callback: () => void,
  rootMargin = '280px 0px',
): () => void {
  if (!('IntersectionObserver' in window)) {
    callback();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      callback();
    },
    { rootMargin },
  );

  observer.observe(element);
  return () => observer.disconnect();
}
