import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Frontend_Car_onboard_computer/',
  build: {
      outDir: 'docs',
      emptyOutDir: true
    },
  resolve: {
    alias: {
      '@': '/src' // Ez az alias biztosítja, hogy az @ a /src mappára hivatkozik
    }
  }
  })

