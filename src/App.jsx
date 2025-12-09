import { Canvas } from '@react-three/fiber'
import { SheetProvider } from '@theatre/r3f'

import Scene from './Scene'


import './App.css'

function App({ sheet }) {

  return (
    <>
     <Canvas 
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
     </Canvas>
    </>
  )
}

export default App

