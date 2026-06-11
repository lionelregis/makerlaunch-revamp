import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectBoardPage from './views/ProjectBoardPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectBoardPage />
  </StrictMode>,
)
