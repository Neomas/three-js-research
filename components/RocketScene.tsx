import React, { useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Rocket from "@components/Rocket";
import {
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  quat,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RocketScene = () => {
  const rocketRef = useRef<RapierRigidBody>();
  const cam = useRef<any>();

  const [isFlying, setIsFlying] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  useFrame(() => {
    if (isFlying) {
      if (rocketRef.current) {
        const quaternion = quat(rocketRef.current.rotation());
        const forceDirection = new THREE.Euler(0, 0, 0, "XYZ");
        const force = new THREE.Vector3(0, 1, -1).applyEuler(forceDirection);

        // Get the top direction of the rocket
        const topDirection = new THREE.Vector3(0, 1, 0).applyQuaternion(
          quaternion
        );

        // Apply the force in the direction of the top of the rocket
        force.add(topDirection);

        rocketRef.current.applyImpulse(force, true);

        rocketRef.current.applyImpulse(force, true);
      }
    }
    if (isLeft) {
      if (rocketRef.current) {
        rocketRef.current.applyImpulseAtPoint(
          { x: 0, y: 10, z: 0 },
          { x: 0, y: 1, z: 0 },
          true
        );
      }
    }

    if (isRight) {
      if (rocketRef.current) {
        rocketRef.current.applyImpulseAtPoint(
          { x: 0, y: -10, z: 0 },
          { x: 0, y: 1, z: 0 },
          true
        );
      }
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.code);
      // console.log(rocketRef.current);

      if (event.code === "Space" && rocketRef.current) {
        setIsFlying(true);
      }
      if (event.code === "keyA" && rocketRef.current) {
        setIsLeft(true);
      }
      if (event.code === "keyD" && rocketRef.current) {
        setIsRight(true);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      setIsFlying(false);
      setIsLeft(false);
      setIsRight(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  //   useEffect(() => {
  //     window.addEventListener("click", handleClick);
  //     return () => {
  //       window.removeEventListener("click", handleClick);
  //     };
  //   }, []);

  return (
    <>
      <Physics debug>
        <OrbitControls />
        <Environment background={false} files="adams_place_bridge_1k.hdr" />

        <PerspectiveCamera position={[0, 10, 10]} makeDefault ref={cam} />

        <RigidBody
          colliders={"hull"}
          restitution={1}
          angularVelocity={[0, 1, 0]}
          //   linearVelocity={[0, 10, 0]}
          ref={rocketRef}
        >
          <Rocket />
        </RigidBody>

        <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]}>
          <mesh>
            <boxGeometry args={[40, 1, 40]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </CuboidCollider>
      </Physics>
    </>
  );
};

export default RocketScene;
