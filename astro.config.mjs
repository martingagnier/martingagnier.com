import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://martingagnier.com',
  trailingSlash: 'always',
  build: {
    assets: 'assets', // Renomme /_astro/ en /assets/ pour éviter les règles cachées de Cloudflare
  },
  integrations: [
    mdx(),
    react(),
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});