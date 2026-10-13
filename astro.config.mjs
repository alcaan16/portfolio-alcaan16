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
    // Mantiene el CSS compatible con navegadores anteriores a 2023 (media queries con max-width)
    build: { cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'] },
    server: {
      allowedHosts: ['.ngrok-free.app', '.trycloudflare.com'],
    },
  },
});
