import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Images in src/assets are pre-optimized (resized to a 2000px cap +
    // compressed via scripts/optimize-images), so no build-time image plugin
    // is needed. This keeps `vite build` fast (seconds, not minutes).
    react(),
  ],
  build: {
    // Surface oversized chunks — anything > 500KB gzipped should be
    // investigated, not silently bundled.
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor libs into their own long-lived chunk so app code
        // changes don't invalidate React/Router in the user's browser cache.
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet': ['react-helmet-async'],
          'icons': ['lucide-react'],
          'charts': ['recharts'],
        },
      },
    },
  },
})
