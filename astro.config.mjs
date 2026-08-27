import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alcaan16.es',
  output: 'static',
  integrations: [sitemap()],
});
