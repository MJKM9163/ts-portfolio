import { RootState } from "furniture/modules/store";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Column = () => {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[1, 1, 8, 24]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export const ChairIndex = () => {
  const ref = useRef<THREE.Mesh>(null);
  const check = useSelector((state: RootState) => state.furniture.newChair);
  return (
    <group>
      {check ? (
        <group>
          <mesh
            ref={ref}
            onClick={(e) => {
              console.log(e.point);
            }}>
            <boxGeometry args={[8, 1, 8]} />
            <meshNormalMaterial />
          </mesh>
          <Column />
        </group>
      ) : null}
    </group>
  );
};
