import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // El alias '@' ayuda a evitar errores de rutas relativas complicadas
      '@': path.resolve(__dirname, './src'),
      '@common': path.resolve(__dirname, './src/common'),
      "@navigation": path.resolve(__dirname, './src/core/navigation'),
    },
  },
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @import "@/styles/partials/_variables.scss";
        @import "@/styles/partials/_utils.scss";
        @import "@/styles/partials/_size.scss";
        @import "@/styles/partials/common/_buttons.scss";
        @import "@/styles/partials/features/_welcome.scss";
        @import "@/styles/partials/features/_layouts.scss";
      `
    }
  }
}
})