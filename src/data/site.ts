export const site = {
  name: 'IziBook',
  legalName: 'IziBook',
  url: 'https://izibook.ro',
  locale: 'ro_RO',
  lang: 'ro',
  country: 'RO',
  email: 'contact@izibook.ro',
  title: 'IziBook — Platforma de management pentru saloane de infrumusetare',
  titleTemplate: '%s | IziBook',
  description:
    'Platforma completa pentru saloane de infrumusetare: programari, echipa, incasari si asistent AI — totul intr-un singur loc, pe web, iOS si Android.',
  keywords: [
    'salon infrumusetare',
    'programari salon',
    'management salon',
    'aplicatie salon',
    'software salon',
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
      url: 'https://apps.apple.com/app/izibook',
    },
    android: {
      name: 'IziBook',
      category: 'BusinessApplication',
      operatingSystem: 'Android',
      url: 'https://play.google.com/store/apps/details?id=ro.izibook.app',
    },
  },
  social: {
    whatsapp:
      'https://chat.whatsapp.com/FEx7QoJSEDg4Sje5w6siwH?mode=gi_t',
    instagram: 'https://www.instagram.com/izibook',
    facebook: 'https://www.facebook.com/izibook',
    linkedin: 'https://www.linkedin.com/company/izibook',
    x: 'https://x.com/izibook',
  },
} as const;

export type SiteSeo = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  canonicalPath?: string;
};

export function resolveSeo(seo: SiteSeo = {}) {
  const title = seo.title ?? site.title;
  const description = seo.description ?? site.description;
  const canonicalPath = seo.canonicalPath ?? '/';
  const canonical = new URL(canonicalPath, site.url).href;
  const image = seo.image ?? new URL('/og-image.png', site.url).href;
  const imageAlt = seo.imageAlt ?? `${site.name} — aplicatie web si mobila pentru saloane`;

  return {
    title,
    description,
    canonical,
    image,
    imageAlt,
    noindex: seo.noindex ?? false,
  };
}
