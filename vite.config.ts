import preactRefresh from '@prefresh/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import ESLint from 'vite-plugin-eslint';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [preactRefresh(), VitePWA(), WindiCSS({ safelist: 'prose prose-sm m-auto' }), ESLint()],
});
