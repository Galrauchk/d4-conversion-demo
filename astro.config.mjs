// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://demo-conversion.webtrafic.fr',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/politique-confidentialite') &&
        !page.includes('/politique-cookies'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
