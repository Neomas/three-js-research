"use client";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const MeshItem = ({ item, map }) => {
  return (
    <mesh
      //@ts-ignore
      geometry={item.geometry}
      position={item.position}
      rotation={item.rotation}
      scale={item.scale}
    >
      <meshStandardMaterial map={map} attach={"material"} />
    </mesh>
  );
};

const Factory = (props) => {
  const factory = useGLTF("/models/Factory.glb");
  const animations = useAnimations(factory.animations, factory.scene);
  const cubeRef = useRef();

  const bakedTexture = useTexture("models/factoryBaked.jpg");
  bakedTexture.flipY = false;

  const { animationName } = useControls({
    animationName: { options: animations.names, value: animations.names[1] },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.setDuration(2.5);

    action.reset().fadeIn(0.5).play();
  }, [animationName]);

  console.log({ animations });
  console.log({ factory });

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.7, 0), // Top center
    new THREE.Vector3(2.95, 0.45, 0), // Top right
    new THREE.Vector3(2.95, -0.05, 0), // Right center
    new THREE.Vector3(2, -0.05, 0), // Bottom right
    new THREE.Vector3(0, -0.05, -0), // Bottom center
    new THREE.Vector3(-2, -0.05, -0), // Bottom left
    new THREE.Vector3(-2.95, -0.05, 0), // Left center
    new THREE.Vector3(-2.95, 0.45, 0), // Top left
    new THREE.Vector3(0, 0.7, 0), // Top center
  ]);

  const curvePoints = curve.getPoints(100); // Increase the resolution for smoother curve
  const curveGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
  const curveMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });

  const boxesArray = [];
  const numBoxes = 55;

  for (let i = 0; i < numBoxes; i++) {
    const position = new THREE.Vector3();
    const progress = i / numBoxes;

    curve.getPointAt(progress, position);

    boxesArray.push(
      <mesh key={i} position={[position.x, position.y, position.z]}>
        <boxGeometry args={[0.2, 0.1, 1.2]} />
        <meshStandardMaterial color="#E78F44" />
      </mesh>
    );
  }

  useFrame((state, delta) => {
    // Update box positions along the curve
    for (let i = 0; i < numBoxes; i++) {
      const progress = (i / numBoxes + state.clock.elapsedTime / 10) % 1;

      console.log(state.clock.elapsedTime % 5 === 0);
      const position = curve.getPointAt(progress);
      cubeRef?.current &&
        //@ts-ignore
        cubeRef.current.children[i].position.set(
          position.x,
          position.y,
          position.z
        );
    }
  });

  return (
    <>
      {Object.values(factory?.nodes)
        .filter((item) => item.name != "Plane001")
        .map((item, i) => (
          <MeshItem item={item} key={i} map={bakedTexture} />
        ))}
      {/* <mesh position={[2, 0.75, 0]} ref={cubeRef}>
        <boxGeometry args={[0.5, 0.25, 1.2]} />
        <meshStandardMaterial color="orange" />
      </mesh> */}

      <group ref={cubeRef}>{boxesArray}</group>
      {/* @ts-ignore */}
      <line geometry={curveGeometry} material={curveMaterial} />
    </>
  );
};

export default Factory;
