import React, { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useFrame(({ clock, camera }) => {
    //Update the y posiition simulate the flight moving in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //check if bird reached a certain endpoint relative to camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      //change direction to backward and rotate the bird 180 degrees on the y axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // change direection to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    //update x and z position based on direction
    if (birdRef.current.rotation.y === 0) {
      // move forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //move backwardS
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });
  useEffect(() => {
    actions["Take 001"].play(0);
  }, []);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
