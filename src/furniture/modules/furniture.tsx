import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  name: string;
  initialState: object;
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState: { value: "" },
  reducers: {},
});

const SOFA = "furniture/SOFA" as const;
const CHAIR = "furniture/CHAIR" as const;
const DESK = "furniture/DESK" as const;

export const chengeSofa = () => ({
  type: SOFA,
});
export const chengeChair = () => ({
  type: CHAIR,
});
export const chengeDesk = () => ({
  type: DESK,
});

type FurnitureAction =
  | ReturnType<typeof chengeSofa>
  | ReturnType<typeof chengeChair>
  | ReturnType<typeof chengeDesk>;

type FurnitureState = {
  select: string;
};

const initialState: FurnitureState = {
  select: "",
};

function furniture(state: FurnitureState = initialState, action: FurnitureAction): FurnitureState {
  switch (action.type) {
    case SOFA:
      return { select: "SOFA" };
    case CHAIR:
      return { select: "CHAIR" };
    case DESK:
      return { select: "DESK" };
    default:
      return state;
  }
}

export default furniture;
