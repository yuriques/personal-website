import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface SkyProps {
  isRotating?: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh>
      <primitive object={sky.scene} ref={skyRef} />
    </mesh>
  );
};

export default Sky;
