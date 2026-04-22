import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compress images at build time. Dev is untouched (fast HMR);
    // `vite build` runs these over every asset emitted.
    viteImagemin({
      // PNGs — the heaviest offenders (dsl.png, Beforeafter.png, Alltemplate.png).
      // quality 65-80 is visually lossless for screenshots; typical reduction 80-95%.
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
        strip: true,
      },
      // JPEGs — suman.jpg etc.
      mozjpeg: {
        quality: 75,
        progressive: true,
      },
      // WebP variants generated alongside for modern browsers.
      webp: {
        quality: 75,
      },
      // GIF — untouched by default, but safe.
      gifsicle: {
        optimizationLevel: 3,
      },
      // SVG — remove metadata, keep viewBox.
      svgo: {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        ],
      },
    }),
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
