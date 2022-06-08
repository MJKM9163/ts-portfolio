import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ControlTap } from "./interface/control/ControlTap";

export const FurnitureIndex = () => {
  return (
    <>
      <ControlTap />
      <Canvas
        camera={{
          fov: 60,
          far: 3000,
          near: 3,
        }}>
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
};
