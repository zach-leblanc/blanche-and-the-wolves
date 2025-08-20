import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed for GitHub Pages project site: https://zach-leblanc.github.io/blanche-and-the-wolves/
export default defineConfig({
  plugins: [react()],
  base: '/blanche-and-the-wolves/',
})
