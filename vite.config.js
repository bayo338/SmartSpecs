// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/SmartSpecs/', // use your repository name here
  plugins: [react()],
});
