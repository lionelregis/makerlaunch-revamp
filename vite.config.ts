import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` lets the same build serve from a project subpath on GitHub Pages
// (e.g. https://user.github.io/<repo>/). The deploy workflow sets VITE_BASE to
// "/<repo>/" automatically; locally it defaults to "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
