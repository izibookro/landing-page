// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
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
  },
  server: {
    port: 3000,
  },
});
