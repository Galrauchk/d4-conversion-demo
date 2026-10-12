// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://demo-conversion.webtrafic.fr',
  integrations: [
    react(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
