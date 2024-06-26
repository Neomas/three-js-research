"use client";

import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import RocketScene from "@components/RocketScene";
import { Environment, KeyboardControls } from "@react-three/drei";

const page = () => {
  return (
    <div>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            inset: 0,
          }}
          flat
        >
          <Environment background={false} files="adams_place_bridge_1k.hdr" />

          <RocketScene />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default page;
