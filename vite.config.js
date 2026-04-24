import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/Rose-Piedra-s-Portfolio/';

export default defineConfig(() => ({
  // Vercel serves from the domain root, while GitHub Pages needs the repo subpath.
  base: process.env.GITHUB_ACTIONS ? githubPagesBase : '/',
  plugins: [react()],
}));
