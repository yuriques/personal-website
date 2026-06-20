import { useRef, useEffect, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import type { Group } from "three";
import { Select } from "@react-three/postprocessing";

interface PawPrintProps {
  color?: string;
}

// Paw print shape built from flat circles for a more 2D look
function PawPrint({
  color = "#a0785a",
  groupRef,
}: PawPrintProps & { groupRef?: RefObject<Group | null> }) {
  const [highlight, setHighlight] = useState(false);
  return (
    <Select enabled={highlight}>
      <group
        ref={groupRef}
        onPointerEnter={() => setHighlight(true)}
        onPointerLeave={() => setHighlight(false)}
      >
        {/* Main pad */}
        <mesh position={[0, 0, 0]} renderOrder={1}>
          <circleGeometry args={[0.38, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        {/* Toe pads */}
        <mesh position={[-0.25, 0.35, -0.35]} renderOrder={1}>
          <circleGeometry args={[0.16, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0.25, 0.35, -0.35]} renderOrder={1}>
          <circleGeometry args={[0.16, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[-0.4, 0, -0.1]} renderOrder={1}>
          <circleGeometry args={[0.13, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0.4, 0, -0.1]} renderOrder={1}>
          <circleGeometry args={[0.13, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      </group>
    </Select>
  );
}

interface MomentProps {
  position: [number, number, number];
  onSelect: () => void;
}

// Clickable waypoint marker for navigating between stages
function Moment({ position, onSelect }: MomentProps) {
  const groupRef = useRef<Group>(null);
  const pawRef = useRef<Group>(null);
  const timeOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
    }
  }, [position]);

  // Floating bob + gentle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime + timeOffset;
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.3;
      groupRef.current.rotation.y = Math.sin(t * 0.8) * 0.3;
    }

    if (pawRef.current) {
      pawRef.current.lookAt(state.camera.position);
    }
  });

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onSelect}
    >
      <PawPrint groupRef={pawRef} />
      {/* Invisible larger hit area for easier clicking */}
      <mesh visible={false}>
        <sphereGeometry args={[0.8, 8, 8]} />
      </mesh>
    </group>
  );
}

export default Moment;
