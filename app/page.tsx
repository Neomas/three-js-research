"use client";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Console from "@components/Console";

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
        <OrbitControls />
        <Environment background={false} files="adams_place_bridge_1k.hdr" />

        <color attach="background" args={["#ECEAE8"]} />
        <Console />
      </Canvas>
    </div>
  );
};

export default page;
