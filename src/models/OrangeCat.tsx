import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

// A chunky orange cat built from basic geometries that floats near the camera (built with AI)
function OrangeCat() {
  const groupRef = useRef<Group>(null);
  const targetPos = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Position in front and to the right of the camera
    const cam = state.camera;
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(cam.quaternion);

    targetPos.current
      .copy(cam.position)
      .add(dir.multiplyScalar(6))
      .add(right.multiplyScalar(3))
      .add(new THREE.Vector3(0, -1.5, 0));

    groupRef.current.position.lerp(targetPos.current, 0.03);

    // Gentle bob
    groupRef.current.position.y += Math.sin(t * 0.8) * 0.1;

    // Face the camera
    groupRef.current.lookAt(cam.position);
  });

  return (
    <group ref={groupRef} scale={0.6}>
      {/* Body - chunky round */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Belly - extra chonk */}
      <mesh position={[0, -0.3, 0.4]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#fcc966" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.0, 0.3]}>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Left ear */}
      <mesh position={[-0.35, 1.55, 0.25]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.2, 0.35, 4]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Right ear */}
      <mesh position={[0.35, 1.55, 0.25]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.2, 0.35, 4]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Inner left ear */}
      <mesh position={[-0.33, 1.5, 0.3]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Inner right ear */}
      <mesh position={[0.33, 1.5, 0.3]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Left eye */}
      <mesh position={[-0.2, 1.05, 0.85]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.2, 1.05, 0.85]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.9, 0.92]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.6, 0.2, -0.7]} rotation={[0.5, 0.5, 0]}>
        <capsuleGeometry args={[0.1, 0.8, 8, 8]} />
        <meshStandardMaterial color="#e8952e" />
      </mesh>
      <mesh position={[-0.9, 0.6, -0.9]} rotation={[1.0, 0.3, 0]}>
        <capsuleGeometry args={[0.08, 0.4, 8, 8]} />
        <meshStandardMaterial color="#e8952e" />
      </mesh>

      {/* Front paws */}
      <mesh position={[-0.4, -0.9, 0.3]}>
        <capsuleGeometry args={[0.15, 0.4, 8, 8]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>
      <mesh position={[0.4, -0.9, 0.3]}>
        <capsuleGeometry args={[0.15, 0.4, 8, 8]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Back paws */}
      <mesh position={[-0.5, -0.9, -0.3]}>
        <capsuleGeometry args={[0.17, 0.35, 8, 8]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>
      <mesh position={[0.5, -0.9, -0.3]}>
        <capsuleGeometry args={[0.17, 0.35, 8, 8]} />
        <meshStandardMaterial color="#f5a623" />
      </mesh>

      {/* Stripes */}
      <mesh position={[0.3, 0.3, 0.8]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.05, 0.4, 4, 4]} />
        <meshStandardMaterial color="#e8952e" />
      </mesh>
      <mesh position={[-0.3, 0.4, 0.75]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.05, 0.35, 4, 4]} />
        <meshStandardMaterial color="#e8952e" />
      </mesh>
    </group>
  );
}

export default OrangeCat;
