import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      routesFolder: 'src/pages',
    }),
    AutoImport({
      imports: [
        'vue',
        {
          'vue-router/auto': ['useRouter', 'useRoute'],
        },
      ],
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
})
