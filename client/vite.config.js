import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000",
    }
  },
  base: '/',
  // Add proper asset handling
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'], 
  preserveSymlinks: true, // <---- Add this line
})
