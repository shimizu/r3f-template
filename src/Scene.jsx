import { Environment  } from "@react-three/drei"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { editable as e, PerspectiveCamera } from '@theatre/r3f'


import { Tokyo } from "./components/Tokyo";



function Scene(){

    return (
        <>
            <PerspectiveCamera theatreKey="Camera" makeDefault position={[3, 3, 3]} fov={75} />

            <e.ambientLight theatreKey="AmbientLight" />
            <Environment preset="sunset" />

            <EffectComposer>
                <Bloom
                    intensity={1}
                    mipmapBlur={false}
                    luminanceThreshold={0.9}
                    luminanceSmoothing={0.025}
                />
            </EffectComposer>


            <e.group theatreKey="City Pivot">
                <e.mesh theatreKey="Tokyo">
                  <Tokyo position={[0, 0, 0]}/>
                </e.mesh>
            </e.group>
                        
        </>
    )
}

export default Scene