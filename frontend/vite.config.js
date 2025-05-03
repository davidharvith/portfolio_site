// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['tsparticles'], // Add this line
    },
  },
  optimizeDeps: {
    include: ['tsparticles-engine'], // Add this line
  }
});
