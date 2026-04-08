import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Maps '@' to the 'src' directory
      '@test': resolve(__dirname, './tests'),
    },
  },
});
