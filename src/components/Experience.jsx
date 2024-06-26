import Chair from "./Chair"; 
import { 
  PresentationControls, 
  MeshReflectorMaterial,
  Stage 
} from "@react-three/drei";


const Experience = () => {

  return (
    <PresentationControls
        speed={1.2}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage
          environment="city"
          intensity={0.55}
      >
          <Chair position={[0, -1.2, 0]}/>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#273548"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
  );
};

export default Experience;