import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE || 'https://jstinton.github.io',
  base: process.env.BASE_PATH || '/fernando-duarte',
  integrations: [tailwind()],
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
