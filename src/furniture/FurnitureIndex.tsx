import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Provider } from "react-redux";
import { ControlTap } from "./interface/control/ControlTap";
import { ModelIndex } from "./models/ModelIndex";
import { store } from "./modules/store";

export const FurnitureIndex = () => {
  return (
    <>
      <ControlTap />
      <Canvas
        camera={{
          fov: 60,
          far: 3000,
          near: 3,
          position: [30, 30, 30],
        }}>
        <Provider store={store}>
          <ambientLight intensity={0.5} />
          <ModelIndex />

          <OrbitControls />
        </Provider>
      </Canvas>
    </>
  );
};
