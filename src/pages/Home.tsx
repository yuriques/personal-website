import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import HomePage from "../models/HomePage";
import Sky from "../models/Sky";
import { STAGE_COUNT } from "../models/constants";
import HomeInfo from "../components/HomeInfo";
import Footer from "../components/Footer";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // left arrow
          setCurrentStage((prev) =>
            prev - 1 < 0 ? STAGE_COUNT - 1 : prev - 1,
          );
          break;
        case 39: // right arrow
          setCurrentStage((prev) => (prev + 1) % STAGE_COUNT);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute bottom-24 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo currentStage={currentStage} />
      </div>
      <Canvas
        className="w-full h-screen bg-transparent cursor-grab"
        camera={{ position: [0, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />

          <HomePage
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI * 0.5}
            minAzimuthAngle={-Math.PI * 0.25}
            maxAzimuthAngle={Math.PI * 0.25}
            minDistance={20}
            maxDistance={50}
          />
        </Suspense>
      </Canvas>
      <Footer />
    </section>
  );
};

export default Home;
