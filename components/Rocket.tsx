import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("models/rocket.glb");

  return (
    <group {...props} dispose={null} tabIndex={0}>
      <mesh
        // @ts-ignore
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.DARK}
      />
      <mesh
        // @ts-ignore
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials.RED}
      />
      <mesh
        // @ts-ignore
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_3.geometry}
        material={materials.WHITE}
      />
    </group>
  );
}
