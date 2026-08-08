export function initNavbarMobile(root: HTMLElement): () => void {
  const mobile = root.querySelector<HTMLDetailsElement>('[data-nav-mobile]');
  const backdrop = root.querySelector<HTMLElement>('[data-nav-backdrop]');
  const summary = mobile?.querySelector('summary');
  if (!mobile || !summary) return () => {};

  const panelLinks = Array.from(
    mobile.querySelectorAll<HTMLAnchorElement>('a[href]'),
  );

  const sync = () => {
    const open = mobile.open;
    root.classList.toggle('is-menu-open', open);
    root.classList.toggle('is-menu-visible', open);
    document.documentElement.classList.toggle('navbar-menu-open', open);
    summary.setAttribute('aria-expanded', String(open));
    summary.setAttribute(
      'aria-label',
      open ? 'Inchide meniul' : 'Deschide meniul',
    );

    if (backdrop) {
      backdrop.hidden = !open;
    }
  };

  const close = () => {
    if (!mobile.open) return;
    mobile.open = false;
    sync();
  };

  const onToggle = () => sync();
  const onBackdropClick = () => close();
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') close();
  };
  const onResize = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) close();
  };

  sync();
  mobile.addEventListener('toggle', onToggle);
  backdrop?.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize, { passive: true });

  const linkCleanups = panelLinks.map((link) => {
    const onClick = () => close();
    link.addEventListener('click', onClick);
    return () => link.removeEventListener('click', onClick);
  });

  return () => {
    document.documentElement.classList.remove('navbar-menu-open');
    mobile.removeEventListener('toggle', onToggle);
    backdrop?.removeEventListener('click', onBackdropClick);
    document.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('resize', onResize);
    linkCleanups.forEach((cleanup) => cleanup());
  };
}

export function initNavbarScroll(root: HTMLElement): () => void {
  let frame = 0;

  const update = () => {
    root.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
  };
}
