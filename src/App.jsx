import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import MyElement3D from './MyElement3D'


import './App.css'

function App() {

  return (
    <>
     <Canvas 
      shadows
      camera={{
        position:[1, 1, 0]
      }
    }>
        <MyElement3D />
     </Canvas>
    </>
  )
}

export default App
