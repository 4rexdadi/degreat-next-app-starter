// imports
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";

// components and styles
import { LaptopScene } from "../../../models/LaptopScene";
import { LaptopModelContainer } from "./laptopModelStyle";

const LaptopModel = () => {
  return (
    <LaptopModelContainer id="phone-model">
      <Canvas>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <LaptopScene />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </LaptopModelContainer>
  );
};

export default LaptopModel;
