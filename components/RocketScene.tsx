import React, { useEffect, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
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

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const [isFlying, setIsFlying] = useState(false);

  // Add state for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const jump = () => {
    setIsFlying(true);
  };

  useFrame((state, delta) => {
    if (rocketRef.current && cam.current) {
      const { forward, backward, leftward, rightward, jump } = getKeys();

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
        impulse.x += impulseStrength;
        torque.z += torqueStrength;
      }
      if (rightward) {
        impulse.x -= impulseStrength;
        torque.z -= torqueStrength;
      }
      if (jump) {
        const impulseDirection = new THREE.Vector3(
          0,
          0,
          -1000 * delta
        ).applyQuaternion(rocketRef.current.rotation());
        rocketRef.current.applyImpulse(impulseDirection, true);
      }

      rocketRef.current.applyImpulse(impulse, true);
      rocketRef.current.applyTorqueImpulse(torque, true);

      // Update camera position and rotation
      const bodyPosition = rocketRef.current.translation();

      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(bodyPosition);
      cameraPosition.z += 7.25;
      cameraPosition.y += 15.65;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);
      cameraTarget.y += 0.25;

      smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

      state.camera.position.copy(cameraPosition);
      state.camera.lookAt(cameraTarget);

      // const modelPosition = rocketRef.current.translation();
      // const modelRotation = rocketRef.current.rotation();

      // // console.log("modelPosition", modelPosition);
      // // console.log("modelRotation", modelRotation);

      // const cameraDistance = 10; // Adjust the distance as needed
      // const cameraOffset = new THREE.Vector3(10, 10, cameraDistance);
      // const cameraPosition = cameraOffset
      //   .applyQuaternion(modelRotation)
      //   .add(modelPosition);

      // // cam.current.position.copy(cameraPosition);
      // cam.current.lookAt(modelPosition);

      // // console.log("cameraDistance", cameraDistance);
      // // console.log("cameraOffset", cameraOffset);
      // console.log("cameraPosition", cameraPosition);
      // console.log("modelPosition", modelPosition);
    }
  });

  useEffect(() => {
    console.log(isFlying ? "Rocket is flying" : "Rocket is not flying");
  }, [isFlying]);

  useEffect(() => {
    subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) {
          jump();
        } else {
          setIsFlying(false);
        }
      }
    );
  }, []);

  return (
    <>
      <Physics>
        {/* <OrbitControls /> */}

        <PerspectiveCamera position={[5, 5, 5]} ref={cam} />

        <RigidBody
          colliders={"hull"}
          restitution={0.2}
          mass={0}
          canSleep={false}
          friction={1}
          linearDamping={0.5}
          angularDamping={0.5}
          ref={rocketRef}
        >
          <Rocket isFlying={isFlying} ref={model} />
        </RigidBody>

        {/* <CuboidCollider position={[0, -20, 0]} args={[100, 0.5, 100]}>
          <mesh>
            <boxGeometry args={[200, 1, 200]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </CuboidCollider> */}

        {/* <mesh position={[0, -10, 0]} ref={dot}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh> */}
      </Physics>
    </>
  );
};

export default RocketScene;
