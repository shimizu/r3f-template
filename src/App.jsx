import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import { SheetProvider } from '@theatre/r3f'

import Scene from './Scene'


import './App.css'

const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

function App() {

  return (
    <>
     <Canvas 
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
        <SheetProvider sheet={demoSheet}>
          <Scene />
        </SheetProvider>
     </Canvas>
    </>
  )
}

export default App
