import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import Moment from "./Moment";
import GhostKittyScene from "./GhostKittyScene";
import OrangeCat from "./OrangeCat";
import { STAGE_POSITIONS } from "./constants";
import type { Mesh } from "three";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";

const CAMERA_LERP_SPEED = 0.03;

interface HomePageProps {
  currentStage: number;
  setCurrentStage: (stage: number) => void;
}

function HomePage({ currentStage, setCurrentStage }: HomePageProps) {
  const ghostMesh = useRef<Mesh>(null);

  useFrame((state) => {
    const target = STAGE_POSITIONS[currentStage];

    state.camera.position.lerp(
      { x: target.x, y: target.y, z: target.z + 5 },
      CAMERA_LERP_SPEED,
    );

    ghostMesh.current.position.lerp(
      { x: target.x, y: target.y, z: target.z - 5 },
      CAMERA_LERP_SPEED,
    );

    state.camera.lookAt(
      ghostMesh.current.position.x,
      ghostMesh.current.position.y,
      ghostMesh.current.position.z,
    );
  });

  return (
    <a.group>
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={5}
            width={1000}
          />
        </EffectComposer>
        {Object.entries(STAGE_POSITIONS).map(([stage, pos]) => (
          <Moment
            key={stage}
            position={[pos.x, pos.y, pos.z]}
            onSelect={() => setCurrentStage(Number(stage))}
          />
        ))}
      </Selection>

      {/* Invisible target mesh for camera look-at */}
      <mesh ref={ghostMesh} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>

      <GhostKittyScene />
      <OrangeCat />
    </a.group>
  );
}

export default HomePage;
