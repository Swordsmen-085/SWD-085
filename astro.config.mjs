import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swd085.example',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => page.endsWith('.html') || page.endsWith('/'),
    }),
  ],
});
