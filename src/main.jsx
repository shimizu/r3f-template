import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'
import demoProjectState from './theatre/state.json' // state.jsonをインポート

if (import.meta.env.DEV) {
  studio.initialize()
  studio.extend(extension)
}

const demoSheet = getProject('Demo Project', { state: demoProjectState }).sheet('Demo Sheet') // stateオプションとして渡す

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App sheet={demoSheet} />
  </StrictMode>,
)
