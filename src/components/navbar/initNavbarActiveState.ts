const NAV_LINK_ACTIVE_CLASS = 'text-black-500 font-semibold';
const NAV_LINK_INACTIVE_CLASS = 'text-black-400 hover:text-black-500';

export const navbarSectionIds = [
  'manager-needs',
  'why-us',
  'preturi',
  'faq',
  'contact',
] as const;

export type NavbarSectionId = (typeof navbarSectionIds)[number];

export function isNavbarPageActive(
  pathname: string,
  pagePath: string,
): boolean {
  if (pagePath === '/blog') {
    return pathname === '/blog' || pathname.startsWith('/blog/');
  }

  return pathname === pagePath;
}

export function getNavbarLinkClasses(isActive: boolean): string {
  return [
    'transition-colors duration-200',
    isActive ? NAV_LINK_ACTIVE_CLASS : NAV_LINK_INACTIVE_CLASS,
  ].join(' ');
}

export function initNavbarActiveState(root: HTMLElement): () => void {
  const sectionLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>('[data-nav-link][data-section]'),
  );

  const sectionIds = sectionLinks
    .map((link) => link.dataset.section)
    .filter((id): id is NavbarSectionId =>
      navbarSectionIds.includes(id as NavbarSectionId),
    );

  const isHomePage =
    window.location.pathname === '/' || window.location.pathname === '';

  if (!isHomePage || !sectionIds.length) {
    return () => {};
  }

  const inactiveClasses = NAV_LINK_INACTIVE_CLASS.split(' ');
  const activeClasses = NAV_LINK_ACTIVE_CLASS.split(' ');

  const setActiveSection = (sectionId: string) => {
    sectionLinks.forEach((link) => {
      const isActive = link.dataset.section === sectionId;

      link.classList.remove(...inactiveClasses, ...activeClasses);

      if (isActive) {
        link.classList.add(...activeClasses);
        link.setAttribute('aria-current', 'true');
      } else {
        link.classList.add(...inactiveClasses);
        link.removeAttribute('aria-current');
      }
    });
  };

  const clearActiveSection = () => {
    sectionLinks.forEach((link) => {
      link.classList.remove(...activeClasses);
      link.classList.add(...inactiveClasses);
      link.removeAttribute('aria-current');
    });
  };

  const updateFromScroll = () => {
    const offset = 120;
    let current = '';

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }

    if (current) {
      setActiveSection(current);
    } else {
      clearActiveSection();
    }
  };

  let frame = 0;

  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateFromScroll);
  };

  updateFromScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', onScroll);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.removeEventListener('hashchange', onScroll);
  };
}
