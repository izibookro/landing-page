export function initBlogPostPage(): () => void {
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]');
  const headingIds = [...tocLinks]
    .map((link) => link.dataset.tocLink)
    .filter(Boolean);

  const cleanups: Array<() => void> = [];

  if (headingIds.length > 0) {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          tocLinks.forEach((link) => {
            link.classList.toggle(
              'is-active',
              link.dataset.tocLink === entry.target.id,
            );
          });
        });
      },
      {
        rootMargin: prefersReducedMotion ? '-10% 0px -80% 0px' : '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    headingIds.forEach((id) => {
      const heading = document.getElementById(id!);
      if (heading) observer.observe(heading);
    });

    cleanups.push(() => observer.disconnect());
  }

  document.querySelectorAll<HTMLDetailsElement>('[data-blog-toc-mobile]').forEach(
    (details) => {
      details.querySelectorAll<HTMLAnchorElement>('[data-toc-link]').forEach(
        (link) => {
          const onClick = () => {
            details.open = false;
          };

          link.addEventListener('click', onClick);
          cleanups.push(() => link.removeEventListener('click', onClick));
        },
      );
    },
  );

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
