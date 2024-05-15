import React, { useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useKeyboardControls,
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
  const model = useRef<any>();

  const [isFlying, setIsFlying] = useState(false);

  // Add state for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const jump = () => {
    rocketRef.current?.applyImpulseAtPoint(
      { x: 0, y: 50, z: 0 },
      { x: 0, y: -1, z: 0 },
      true
    );
  };

  useFrame((state, delta) => {
    if (rocketRef.current) {
      const { forward, backward, leftward, rightward } = getKeys();

      const impulse = { x: 0, y: 0, z: 0 };
      const torque = { x: 0, y: 0, z: 0 };

      const impulseStrength = 100 * delta;
      const torqueStrength = 100 * delta;

      if (forward) {
        impulse.z -= impulseStrength;
        torque.x -= torqueStrength;
      }
      if (backward) {
        impulse.z += impulseStrength;
        torque.x += torqueStrength;
      }
      if (leftward) {
        impulse.x -= impulseStrength;
        torque.z -= torqueStrength;
      }
      if (rightward) {
        impulse.x += impulseStrength;
        torque.z += torqueStrength;
      }

      rocketRef.current.applyImpulse(impulse, true);
      rocketRef.current.applyTorqueImpulse(torque, true);
    }

    if (rocketRef.current && cam.current) {
      // Update camera position and rotation

      const modelPosition = rocketRef.current.translation();
      const modelRotation = rocketRef.current.rotation;
      const cameraDistance = 10; // Adjust the distance as needed
      const cameraOffset = new THREE.Vector3(0, 0, cameraDistance);
      const cameraPosition = cameraOffset
        .applyQuaternion(modelRotation)
        .add(modelPosition);

      cam.current.position.copy(cameraPosition);
      cam.current.lookAt(modelPosition);

      console.log("cameraDistance", cameraDistance);
      console.log("cameraOffset", cameraOffset);
      console.log("cameraPosition", cameraPosition);
    }
  });

  useEffect(() => {
    subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) console.log("Yes, jump!");
        jump();
      }
    );
  }, []);

  return (
    <>
      <Physics debug>
        {/* <OrbitControls /> */}
        <Environment background={false} files="adams_place_bridge_1k.hdr" />

        <PerspectiveCamera
          // position={[0, 2, 50]}
          // rotation={[-0.3, 0, 0]}
          ref={cam}
        />

        <RigidBody
          colliders={"hull"}
          restitution={0.2}
          mass={0}
          canSleep={false}
          friction={1}
          linearDamping={0.5}
          angularDamping={0.5}
          // angularVelocity={[0, 1, 0]}
          ref={rocketRef}
        >
          <Rocket isFlying={isFlying} ref={model} />
        </RigidBody>

        <CuboidCollider position={[0, -2, 0]} args={[100, 0.5, 100]}>
          <mesh>
            <boxGeometry args={[40, 1, 40]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </CuboidCollider>

        {/* <mesh position={[0, 0, 0]} ref={dot}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh> */}
      </Physics>
    </>
  );
};

export default RocketScene;
