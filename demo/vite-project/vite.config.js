import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ],
    base: '/vite-project/', // 👈 Set this to match the directory name
})
