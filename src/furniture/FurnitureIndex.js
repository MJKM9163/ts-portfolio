import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const FurnitureIndex = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 60,
          far: 3000,
          near: 3,
        }}>
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry args={[1, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
};
