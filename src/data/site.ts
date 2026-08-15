export const site = {
  name: 'IziBook',
  legalName: 'IZIBOOK SRL',
  url: 'https://izibook.ro',
  /** Open Graph locale (underscore form required by og:locale). */
  locale: 'ro_RO',
  /** BCP-47 language tag for HTML lang + schema.org inLanguage. */
  lang: 'ro',
  /** BCP-47 language-region for schema.org when region matters. */
  inLanguage: 'ro-RO',
  country: 'RO',
  email: 'contact@izibook.ro',
  /** E.164 for tel: links and Organization.telephone. */
  telephone: '+40753497805',
  telephoneDisplay: '+40 753 497 805',
  /** Romanian CUI (schema.org taxID). */
  taxId: '52615106',
  /** Numar de ordine in Registrul Comertului. */
  tradeRegister: 'J2025074939005',
  address: {
    streetAddress:
      'Str. Borhanciului Nr. 64 Provizoriu, Etaj 4, Apartament 21',
    addressLocality: 'Cluj-Napoca',
    addressRegion: 'Cluj',
    addressCountry: 'RO',
  },
  title: 'Software salon: programari, clienti si management | IziBook',
  titleTemplate: '%s | IziBook',
  description:
    'Platforma completa pentru saloane de infrumusetare: programari, echipa, incasari si asistent AI — totul intr-un singur loc, pe web, iOS si Android.',
  keywords: [
    'software salon',
    'programari salon',
    'salon infrumusetare',
    'management salon',
    'aplicatie salon',
    'calendar programari',
    'gestiune echipa salon',
    'rapoarte salon',
    'asistent AI salon',
    'IziBook',
  ],
  themeColor: '#f97316',
  twitter: {
    handle: '@izibook',
    card: 'summary_large_image' as const,
  },
  apps: {
    ios: {
      name: 'IziBook',
      category: 'BusinessApplication',
      operatingSystem: 'iOS',
      url: 'https://apps.apple.com/us/app/izibook/id6754284160',
    },
    android: {
      name: 'IziBook',
      category: 'BusinessApplication',
      operatingSystem: 'Android',
      url: 'https://play.google.com/store/apps/details?id=ro.izibook.app&pli=1',
    },
    web: {
      name: 'IziBook',
      url: 'https://app.izibook.ro/',
      onboarding: 'https://app.izibook.ro/onboarding',
    },
  },
  social: {
    whatsapp:
      'https://chat.whatsapp.com/FEx7QoJSEDg4Sje5w6siwH?mode=gi_t',
    instagram: 'https://www.instagram.com/izibook.ro',
    tiktok: 'https://www.tiktok.com/@izibook.ro',
    x: 'https://x.com/izibook',
  },
} as const;

/** Public profiles suitable for Organization.sameAs (excludes chat invite links). */
export const organizationSameAs = [
  site.social.instagram,
  site.social.tiktok,
  site.social.x,
] as const;

export type SeoBreadcrumb = {
  name: string;
  path: string;
};

export type SeoArticle = {
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  authorJobTitle?: string;
  /** Absolute URL of the author portrait (Person schema image). */
  authorImage?: string;
  section?: string;
};

export type FaqSchemaScope = 'all' | 'home';

export type SiteSeo = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  canonicalPath?: string;
  type?: 'website' | 'article';
  article?: SeoArticle;
  breadcrumbs?: SeoBreadcrumb[];
  /** FAQPage schema — visible Q&A on the page (full /faq or homepage teaser). */
  includeFaq?: boolean;
  /** Which FAQ set to encode. Default: all on /faq, home teasers when isHome. */
  faqScope?: FaqSchemaScope;
  /** HowTo schema for Fane AI step-by-step content. */
  includeHowTo?: boolean;
  /** ItemList of Offer schemas for pricing plans on /preturi. */
  includePlanOffers?: boolean;
  /** ISO dateModified for WebPage schema (freshness for AI crawlers). */
  dateModified?: string;
  /** Organization + SoftwareApplication + MobileApplication graph. Default: homepage only. */
  includeAppSchemas?: boolean;
};

/** Normalize path to trailingSlash: 'never' (keep `/` only for the homepage). */
export function normalizeCanonicalPath(path: string): string {
  if (!path || path === '/') return '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

export function resolveSeo(seo: SiteSeo = {}) {
  const canonicalPath = normalizeCanonicalPath(seo.canonicalPath ?? '/');
  const isHome = canonicalPath === '/';
  const pageTitle = seo.title ?? site.title;
  const title =
    seo.title && !isHome
      ? site.titleTemplate.replace('%s', seo.title)
      : pageTitle;
  const description = seo.description ?? site.description;
  const canonical = new URL(canonicalPath, site.url).href;
  const image = seo.image ?? new URL('/og-image.png', site.url).href;
  const imageAlt =
    seo.imageAlt ??
    `${site.name} — software de programari pentru saloane pe web, iOS si Android`;
  const imageType =
    image.endsWith('.jpg') || image.endsWith('.jpeg')
      ? 'image/jpeg'
      : image.endsWith('.webp')
        ? 'image/webp'
        : 'image/png';
  const type = seo.type ?? 'website';
  const includeAppSchemas = seo.includeAppSchemas ?? isHome;
  const includeFaq = seo.includeFaq ?? false;
  const faqScope: FaqSchemaScope =
    seo.faqScope ?? (isHome ? 'home' : 'all');
  const includeHowTo = seo.includeHowTo ?? false;
  const includePlanOffers = seo.includePlanOffers ?? false;

  return {
    title,
    pageTitle,
    description,
    canonical,
    canonicalPath,
    image,
    imageAlt,
    imageType,
    type,
    article: seo.article,
    breadcrumbs: seo.breadcrumbs ?? [],
    includeFaq,
    faqScope,
    includeHowTo,
    includePlanOffers,
    dateModified: seo.dateModified,
    includeAppSchemas,
    noindex: seo.noindex ?? false,
    isHome,
  };
}
