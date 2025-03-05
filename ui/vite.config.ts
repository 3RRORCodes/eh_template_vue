import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `@use "sass:math";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../web',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || ''
          // Keep the same folder structure as src/assets
          if (fileName.includes('assets/')) {
            // Extract the path after 'assets/'
            const pathParts = fileName.split('assets/')
            if (pathParts.length > 1) {
              return `assets/${pathParts[1]}`
            }
          }
          // For files not in assets, use their extension type as folder
          const ext = fileName.split('.').pop()
          return `assets/${ext || 'misc'}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000
  }
}) 