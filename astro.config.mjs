import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://k-tech.hu',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
  },
});