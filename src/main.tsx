import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getLang } from './lib/lang'

// Reflect the active language on <html lang> for accessibility and SEO.
document.documentElement.lang = getLang()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
