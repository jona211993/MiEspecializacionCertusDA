import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['_redirects'], // Agrega aquí el nombre de tu archivo
  }
})
