import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alcaan16.es',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  // Permite exponer el dev server por túnel (ngrok / cloudflared) para revisar desde el móvil
  server: { host: true },
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app', '.trycloudflare.com'],
    },
  },
});
