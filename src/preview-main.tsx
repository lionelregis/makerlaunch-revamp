import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PreviewPage from './views/PreviewPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewPage />
  </StrictMode>,
)
