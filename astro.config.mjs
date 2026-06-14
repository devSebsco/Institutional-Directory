import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://directorio-upc-aguachica.netlify.app',
  integrations: [sitemap(), tailwind()],
  output: 'static',
  build: {
    assets: '_astro',
  },
  devToolbar: {
    enabled: false
  }
});
