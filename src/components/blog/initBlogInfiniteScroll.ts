const INITIAL_VISIBLE = 9;
const BATCH_SIZE = 6;

export function initBlogInfiniteScroll(root: HTMLElement): () => void {
  const cards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-blog-grid-card]'),
  );
  const sentinel = root.querySelector<HTMLElement>('[data-blog-scroll-sentinel]');
  const loader = root.querySelector<HTMLElement>('[data-blog-scroll-loader]');
  const endMessage = root.querySelector<HTMLElement>('[data-blog-scroll-end]');

  if (!cards.length || !sentinel) return () => {};

  let visibleCount = Math.min(INITIAL_VISIBLE, cards.length);

  cards.forEach((card, index) => {
    if (index >= visibleCount) {
      card.classList.add('hidden');
    }
  });

  if (visibleCount >= cards.length) {
    loader?.classList.add('hidden');
    endMessage?.classList.remove('hidden');
    return () => {};
  }

  let isLoading = false;

  const revealNextBatch = () => {
    if (isLoading || visibleCount >= cards.length) return;

    isLoading = true;
    loader?.classList.remove('hidden');

    window.requestAnimationFrame(() => {
      const nextBatch = cards.slice(visibleCount, visibleCount + BATCH_SIZE);
      nextBatch.forEach((card) => card.classList.remove('hidden'));
      visibleCount += nextBatch.length;
      isLoading = false;

      if (visibleCount >= cards.length) {
        loader?.classList.add('hidden');
        endMessage?.classList.remove('hidden');
        observer.disconnect();
      } else {
        loader?.classList.add('hidden');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        revealNextBatch();
      }
    },
    { rootMargin: '240px 0px' },
  );

  observer.observe(sentinel);

  return () => observer.disconnect();
}
