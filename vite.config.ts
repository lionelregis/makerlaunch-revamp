import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use relative asset paths ("./assets/...") so the build works from any path —
// the site root, a GitHub Pages project subpath (https://user.github.io/<repo>/),
// or a local preview — without depending on a base value being injected at build
// time.
//
// Two HTML entries are built: index.html (the live site) and lab.html (an
// unlinked preview page for the Advanced Manufacturing Startup Lab concept).
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        lab: fileURLToPath(new URL('./lab.html', import.meta.url)),
      },
    },
  },
})
