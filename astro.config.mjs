import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://directorio-upc-aguachica.netlify.app',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_astro',
  },
  devToolbar: {
    enabled: false
  }
});
