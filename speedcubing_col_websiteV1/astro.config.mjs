// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  
  integrations: [tailwind()],
  
  vite: {
    plugins: [tailwindcss()]
  }
  
});