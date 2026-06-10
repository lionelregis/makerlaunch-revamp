import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use relative asset paths ("./assets/...") so the build works from any path —
// the site root, a GitHub Pages project subpath (https://user.github.io/<repo>/),
// or a local preview — without depending on a base value being injected at build
// time. This is robust for a single-page app served from one index.html.
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
