import { RootState } from "../modules/store";
import { useSelector } from "react-redux";
import { ChairIndex } from "./Chair";

export const ModelIndex = () => {
  const select = useSelector((state: RootState) => state.furniture.chairWidth);
  console.log(select);
  return (
    <group>
      <ChairIndex />
    </group>
  );
};
