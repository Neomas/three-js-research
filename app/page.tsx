"use client";

import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import RocketScene from "@components/RocketScene";

const page = () => {
  return (
    <div>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          inset: 0,
        }}
        flat
      >
        <RocketScene />
      </Canvas>
    </div>
  );
};

export default page;
