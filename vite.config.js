import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // Ez az alias biztosítja, hogy az @ a /src mappára hivatkozik
    }
  }

})
