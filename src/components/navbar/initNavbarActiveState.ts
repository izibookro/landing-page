const NAV_LINK_BASE_CLASS = 'navbar__link';
const NAV_LINK_ACTIVE_CLASS = 'is-active';

export function isNavbarPageActive(
  pathname: string,
  pagePath: string,
): boolean {
  if (pagePath === '/') {
    return pathname === '/' || pathname === '';
  }

  if (pagePath === '/blog') {
    return pathname === '/blog' || pathname.startsWith('/blog/');
  }

  return pathname === pagePath;
}

export function getNavbarLinkClasses(isActive: boolean): string {
  return [NAV_LINK_BASE_CLASS, isActive ? NAV_LINK_ACTIVE_CLASS : '']
    .filter(Boolean)
    .join(' ');
}

export function initNavbarActiveState(_root: HTMLElement): () => void {
  return () => {};
}
