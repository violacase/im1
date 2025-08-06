import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/composables'],
    }),
    vueDevTools(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large vendor libraries into separate chunks
          'vue-vendor': ['vue', 'vue-router'],
          'ui-components': ['reka-ui', 'lucide-vue-next'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
})
