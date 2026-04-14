import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Required for GitHub Pages: set base to repo name
  base: '/Rose-Piedra-s-Portfolio/',
  plugins: [react()],
});
