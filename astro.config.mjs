// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import Sonda from 'sonda/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://izibook.ro',
  integrations: [icon(), sitemap(), Sonda()],
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
