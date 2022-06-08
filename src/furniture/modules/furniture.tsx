import { createSlice } from "@reduxjs/toolkit";

type ChairColumnType = {
  select: string;
  material: string;
  newChair: boolean;
  chairColumn: Array<number>;
  newSofa: boolean;
  newDesk: boolean;
  chairWidth: number;
  height: number;
  side: number;
};

const initialState: ChairColumnType = {
  select: "",
  material: "",
  newChair: false,
  chairColumn: [],
  newSofa: false,
  newDesk: false,
  chairWidth: 10,
  height: 10,
  side: 10,
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState: initialState,
  reducers: {
    selectChange: (state, action) => {
      state.select = action.payload;
    },
    setChairWidth: (state, action) => {
      state.chairWidth = action.payload;
    },
    setNewChair: (state, action) => {
      state.newChair = action.payload;
    },
    setChairColumn: (state, action) => {
      console.log(state.chairColumn);
      state.chairColumn = [...state.chairColumn, action.payload];
      console.log(state.chairColumn);
      console.log(action);
      //state.chairColumn.push(action.payload);
    },
  },
});

export const { selectChange, setChairWidth, setNewChair, setChairColumn } = furnitureSlice.actions;

// const SOFA = "furniture/SOFA" as const;
// const CHAIR = "furniture/CHAIR" as const;
// const DESK = "furniture/DESK" as const;

// export const chengeSofa = () => ({
//   type: SOFA,
// });
// export const chengeChair = () => ({
//   type: CHAIR,
// });
// export const chengeDesk = () => ({
//   type: DESK,
// });

// type FurnitureAction =
//   | ReturnType<typeof chengeSofa>
//   | ReturnType<typeof chengeChair>
//   | ReturnType<typeof chengeDesk>;

// type FurnitureState = {
//   select: string;
// };

// const initialState: FurnitureState = {
//   select: "",
// };

// function furniture(state: FurnitureState = initialState, action: FurnitureAction): FurnitureState {
//   switch (action.type) {
//     case SOFA:
//       return { select: "SOFA" };
//     case CHAIR:
//       return { select: "CHAIR" };
//     case DESK:
//       return { select: "DESK" };
//     default:
//       return state;
//   }
// }

// export default furniture;
