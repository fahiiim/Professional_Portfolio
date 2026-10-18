import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { env } from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  base: env.GITHUB_ACTIONS ? '/Professional_Portfolio/' : '/',
  plugins: [react(),tailwindcss()],
})
