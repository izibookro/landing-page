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

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  // Keep sitemap, canonicals, and internal links slash-free (except `/`).
  // HTTP 301s (legacy paths, sitemap.xml, trailing slash, www→apex) live in Cloudflare Redirect Rules.
  trailingSlash: 'never',
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
      // Agent-readable files are endpoints, not HTML pages — list them explicitly.
      customPages: [`${siteUrl}/pricing.md`, `${siteUrl}/llms.txt`],
      serialize(item) {
        // Normalize filesystem-discovered URLs so sitemap matches trailingSlash: 'never'.
        try {
          const url = new URL(item.url);
          if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
            url.pathname = url.pathname.slice(0, -1);
            item.url = url.href;
          }
        } catch {
          // Keep original URL if parsing fails.
        }
        const lastmod = lastmodForSitemapUrl(
          item.url,
          siteUrl,
          contentLastmods,
        );
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
