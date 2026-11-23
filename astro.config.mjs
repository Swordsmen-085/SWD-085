import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Swordsmen-085.github.io',
  base: '/SWD-085',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => page.endsWith('.html') || page.endsWith('/'),
    }),
  ],
  output: 'static',
});
