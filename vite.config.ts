import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "absproxy/5173",
  server: {
    allowedHosts: ['d3f2ou4en3zaji.cloudfront.net']
  }
})