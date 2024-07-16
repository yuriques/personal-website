import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import Footer from "../components/Footer";
import { OrbitControls } from "@react-three/drei";
const Home = () => {
  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  // TODO: we don't want to register this event handler every time there is a stage change
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // left arrow
          setCurrentStage((currentStage - 1 < 0 ? 3 : currentStage - 1) % 4);
          break;
        case 39: // right arrow
          setCurrentStage((currentStage + 1) % 4);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStage, setCurrentStage]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage !== null && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor.grab"
        }`}
        camera={{ position: [0, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <Footer />
    </section>
  );
};

export default Home;
