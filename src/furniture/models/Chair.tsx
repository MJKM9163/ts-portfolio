import { ThreeEvent } from "@react-three/fiber";
import { createColumn } from "furniture/modules/furniture";
import { RootState } from "furniture/modules/store";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Color, Object3D, Vector3 } from "three";

const Column = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { chairColumn, height, width } = useSelector(
    (state: RootState) => state.furniture.chairOption.column
  );

  return (
    <group>
      {chairColumn.map((i, columnIndex) => (
        <mesh
          position={new Vector3(i[0], i[1] - height[columnIndex] / 2, i[2])}
          key={"column" + columnIndex}>
          <cylinderGeometry
            args={[width[columnIndex], width[columnIndex], height[columnIndex], 24]}
          />
          <meshNormalMaterial />
        </mesh>
      ))}
    </group>
  );
};

export const ChairField = () => {
  const posArray = new Array(10).fill(0);
  //const ref = useRef<THREE.Mesh>(null);
  const check = useSelector((state: RootState) => state.furniture.chairOption.newChair);
  const dispatch = useDispatch();
  return (
    <group>
      {check ? (
        <group>
          {posArray.map((x, indexX) => (
            <group key={"X" + indexX}>
              {posArray.map((z, indexZ) => (
                <mesh
                  position={[indexX - 5, 0, indexZ - 5]}
                  key={"Z" + indexZ}
                  onClick={(e) => {
                    e.stopPropagation();
                    const { x, y, z } = e.eventObject.position;
                    dispatch(createColumn([[x, y, z], [0.5], [8]]));
                    console.log([x, y, z]);
                  }}
                  onPointerOver={(e: ThreeEvent<PointerEvent> | any) => {
                    e.stopPropagation();
                    e.eventObject.material.color.set(new Color(1, 2.5, 1));
                  }}
                  onPointerOut={(e: ThreeEvent<PointerEvent> | any) => {
                    e.stopPropagation();
                    e.eventObject.material.color.set(new Color(0, 1, 1));
                  }}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshBasicMaterial color={"Cyan"} />
                </mesh>
              ))}
            </group>
          ))}

          <Column />
        </group>
      ) : null}
    </group>
  );
};
