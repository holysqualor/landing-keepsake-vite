import { defineConfig } from 'vite';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/landing-keepsake-vite/',
  plugins: [vituum(), pug()],
  server: {
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
  },
}));
