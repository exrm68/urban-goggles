import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    // ✅ Smaller chunks = faster load on mobile
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Firebase আলাদা chunk — app load এ block করবে না
          'firebase-core': ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          // Framer Motion আলাদা chunk
          'motion': ['framer-motion'],
          // Icons আলাদা chunk
          'icons': ['lucide-react'],
        },
      },
    },
    // ✅ esbuild minify — vite built-in, no extra package needed
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
