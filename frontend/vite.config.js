import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@tsparticles/react', '@tsparticles/engine']
    }
  },
  optimizeDeps: {
    include: ['@tsparticles/slim']
  }
});
