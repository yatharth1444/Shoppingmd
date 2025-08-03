import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    allowedHosts: [
      '98d647c68371.ngrok-free.app', // Your Ngrok host
      'localhost'                    // Keep localhost allowed
    ]
  }
})
