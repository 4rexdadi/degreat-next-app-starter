// imports
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";

// components and styles
import { HandScene } from "../../../models/HandScene";
import { HandModelContainer } from "./handModelStyle";

const HandModel = () => {
  return (
    <HandModelContainer id="phone-model">
      <Canvas>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <HandScene />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </HandModelContainer>
  );
};

export default HandModel;
