import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE || 'https://thisisfernandoduarte.com',
  integrations: [tailwind()],
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
