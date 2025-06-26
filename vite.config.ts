import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,webp}'],
    }
  })],
  server: {
    host: true
  },
  // base: "/study-smart/"
})
