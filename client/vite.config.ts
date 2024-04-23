import { defineConfig } from 'vite'
import config from "./config.json"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:config.client.port || 3000
  }
})
