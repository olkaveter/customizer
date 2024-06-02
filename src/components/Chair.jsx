/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/chair.gltf 
*/

import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei'

const Chair = (props) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf');

  const leatherTextureProps = useTexture({
    map: './textures/leather/Leather_005_baseColor.jpg',
    normalMap: './textures/leather/Leather_005_normal.jpg',
    roughnessMap: './textures/leather/Leather_005_roughness.jpg',
    aoMap: './textures/leather/Leather_005_ambientOcclusion.jpg',
  });

  const fabricTextureProps = useTexture({
    map: './textures/fabric/Fabric_Alcantara_001_basecolor.jpg',
    normalMap: './textures/fabric/Fabric_Alcantara_001_normal.jpg',
    roughnessMap: './textures/fabric/Fabric_Alcantara_001_roughness.jpg',
    aoMap: './textures/fabric/Fabric_Alcantara_001_ambientOcclusion.jpg',
  });


  leatherTextureProps.normalMap.repeat.set(10,10);
  leatherTextureProps.roughnessMap.repeat.set(10,10);
  leatherTextureProps.aoMap.repeat.set(10,10);

  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  fabricTextureProps.normalMap.repeat.set(4, 4);
  fabricTextureProps.roughnessMap.repeat.set(4, 4);
  fabricTextureProps.aoMap.repeat.set(4, 4);

  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...leatherTextureProps} />
      </mesh> 
      <mesh 
        geometry={nodes.Cushion.geometry} 
        position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...fabricTextureProps} />
      </mesh>
      <mesh 
        geometry={nodes.Legs1.geometry} 
        material={materials.Legs} />
      <mesh 
        geometry={nodes.Legs2.geometry} 
        material={materials.Legs}
        visible={false}
      />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')

export default Chair;