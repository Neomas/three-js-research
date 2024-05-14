import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

interface SmokeProps {
  startPosition: THREE.Vector3;
}

const Smoke: React.FC<SmokeProps> = ({ startPosition }) => {
  const smokeParticles = useRef<THREE.Mesh[]>([]);

  const createSmokeParticle = () => {
    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const smokeParticle = new THREE.Mesh(geometry, material);
    smokeParticle.position.copy(startPosition);
    smokeParticle.scale.set(1, 1, 1); // Adjust the initial size of the smoke particles
    smokeParticles.current.push(smokeParticle);
  };

  const updateSmokeParticles = () => {
    smokeParticles.current.forEach((smokeParticle) => {
      smokeParticle.position.y -= 1; // Adjust the speed of the smoke particles
      smokeParticle.scale.multiplyScalar(0.95); // Adjust the scale factor for scaling down
      smokeParticle.material.opacity -= 0.01; // Adjust the opacity decrement for fading
      if (smokeParticle.material.opacity <= 0) {
        // Remove the smoke particle when it becomes fully transparent
        smokeParticles.current.splice(
          smokeParticles.current.indexOf(smokeParticle),
          1
        );
      }
    });
  };

  // Create smoke particles on component mount
  React.useEffect(() => {
    for (let i = 0; i < 50; i++) {
      createSmokeParticle();
    }
  }, []);

  // Update smoke particles on each frame
  //   useFrame(() => {
  //     updateSmokeParticles();
  //   });

  return (
    <>
      {smokeParticles.current.map((smokeParticle, index) => (
        <primitive key={index} object={smokeParticle} />
      ))}
    </>
  );
};

export default Smoke;
