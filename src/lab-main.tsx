import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LabPage from './views/LabPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LabPage />
  </StrictMode>,
)
