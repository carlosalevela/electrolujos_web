// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real cuando se publique el sitio
  site: 'https://electrolujos.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // /productos redirige de inmediato a /productos/bombilleria-led, no debe listarse como página indexable
      filter: (page) => page !== 'https://electrolujos.vercel.app/productos/',
    }),
  ]
});