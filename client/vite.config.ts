import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: /\.(mp4|webm)$/,
  // base: '/',
  server: {
    proxy: {
      // proxy the api address
      '/api': 'http://localhost:3000'
    }
  }
})
