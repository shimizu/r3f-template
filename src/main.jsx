import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'

if (import.meta.env.DEV) {
  studio.initialize()
  studio.extend(extension)
}

const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App sheet={demoSheet} />
  </StrictMode>,
)
