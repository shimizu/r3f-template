import { RandomizedLight } from "@react-three/drei"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { editable as e, PerspectiveCamera } from '@theatre/r3f'




const vertexShader = `
  varying vec3 vPosition;
  
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vPosition;

  void main() {
    gl_FragColor = vec4(abs(vPosition), 1.0); // シンプルな色の変化
  }
`;


function Scene(){

    return (
        <>
            <PerspectiveCamera theatreKey="Camera" makeDefault position={[3, 3, 3]} fov={75} />

            <RandomizedLight />

            <EffectComposer>
                <Bloom
                    intensity={1}
                    mipmapBlur={false}
                    luminanceThreshold={0.9}
                    luminanceSmoothing={0.025}
                />
            </EffectComposer>


            <e.group theatreKey="Box Pivot">
                <e.mesh theatreKey="Cube">
                    <boxGeometry args={[1, 1, 1]} />
                    <shaderMaterial
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{}}
                    />
                </e.mesh>

            </e.group>
                        
        </>
    )
}

export default Scene