// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import Sonda from 'sonda/astro';
import {
  lastmodForSitemapUrl,
  loadContentLastmods,
} from './src/lib/sitemapLastmods.ts';

const siteUrl = 'https://izibook.ro';
const contentLastmods = loadContentLastmods();

/** Legacy URL → current route map (also mirrored in public/_redirects for Cloudflare 301s). */
const legacyRedirects = {
  '/contact': '/',
  '/despre-noi': '/',
  '/politica-confidentialitate': '/legal/politica-de-confidentialitate',
  '/politica-cookie-uri': '/legal/politica-cookie-uri',
  '/termeni-conditii': '/legal/termeni-si-conditii',
  '/stergere-cont': '/legal/stergerea-contului',
  '/sitemap.xml': '/sitemap-index.xml',
  '/assets/images/defaultOgImage': '/og-image.png',
};

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  // Prefer apex; set www → apex 301 in Cloudflare Redirect Rules to match canonicals.
  redirects: Object.fromEntries(
    Object.entries(legacyRedirects).map(([from, to]) => [
      from,
      { status: 301, destination: to },
    ]),
  ),
  // Cloudflare serves real 301s from public/_redirects; skip Astro HTML meta-refresh stubs.
  build: {
    redirects: false,
  },
  integrations: [
    icon(),
    sitemap({
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
        image: false,
      },
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const lastmod = lastmodForSitemapUrl(item.url, siteUrl, contentLastmods);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }
        return item;
      },
    }),
    Sonda(),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Roboto',
      cssVariable: '--font-roboto',
      styles: ['normal'],
      weights: [400, 700, 900],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true,
    },
  },
  server: {
    port: 3000,
  },
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
