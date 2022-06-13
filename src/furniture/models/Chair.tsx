import { ThreeEvent, useFrame } from "@react-three/fiber";
import { createColumn, columnSelect } from "furniture/modules/furniture";
import { RootState } from "furniture/modules/store";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Color, Vector3 } from "three";

const Column = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { chairColumn, select, height, width, rotation } = useSelector(
    (state: RootState) => state.furniture.chairOption.column
  );
  const dispatch = useDispatch();
  console.log(select);
  return (
    <group>
      {chairColumn.map((i, columnIndex: number) => (
        <group
          key={"columnBox" + columnIndex}
          position={new Vector3(i[0], i[1], i[2])}
          rotation={[rotation[columnIndex][0], rotation[columnIndex][1], rotation[columnIndex][2]]}>
          <mesh
            onClick={(e: any) => {
              e.stopPropagation();

              dispatch(columnSelect(select === columnIndex ? -1 : columnIndex));
            }}
            onPointerOver={(e: any) => {
              e.stopPropagation();
              e.object.material.color.set(new Color(0, 1, 0.5));
            }}
            onPointerOut={(e: any) => {
              e.stopPropagation();
              e.object.material.color.set(new Color(0, 0, 1));
            }}
            position={new Vector3(0, i[1] - height[columnIndex] / 2, 0)}
            key={"column" + columnIndex}>
            <cylinderGeometry
              args={[width[columnIndex], width[columnIndex], height[columnIndex], 24]}
            />
            <meshBasicMaterial color={"blue"} />
          </mesh>
          {columnIndex === select ? <axesHelper dispose={null} scale={5} /> : null}
        </group>
      ))}
    </group>
  );
};

export const ChairField = () => {
  const posArray = new Array(10).fill(0);
  const check = useSelector((state: RootState) => state.furniture.chairOption.newChair);
  const dispatch = useDispatch();

  const guide = useSelector((state: RootState) => state.furniture.guide);
  const ref = useRef<THREE.Group>(null);

  return (
    <group>
      {check ? (
        <group ref={ref}>
          {posArray.map((x, indexX) => (
            <group key={"X" + indexX}>
              {posArray.map((z, indexZ) => (
                <mesh
                  position={[indexX - 4.5, 0, indexZ - 4.5]}
                  key={"Z" + indexZ}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (guide) {
                      const { x, y, z } = e.object.position;
                      dispatch(createColumn([[x, y, z], [0.5], [8], [0, 0, 0]]));
                    } else {
                      const { x, z } = e.point;
                      dispatch(createColumn([[x, 0, z], [0.5], [8], [0, 0, 0]]));
                    }
                  }}
                  onPointerOver={(e: ThreeEvent<PointerEvent> | any) => {
                    e.stopPropagation();
                    if (guide) e.object.material.color.set(new Color(1, 2.5, 1));
                  }}
                  onPointerOut={(e: ThreeEvent<PointerEvent> | any) => {
                    e.stopPropagation();
                    e.object.material.color.set(new Color(0, 1, 1));
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
