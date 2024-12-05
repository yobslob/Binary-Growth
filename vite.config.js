import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all IPs
    port: 5173 // Ensure the correct port
  },
  plugins: [react()],
})
