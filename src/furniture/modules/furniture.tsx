import { createSlice } from "@reduxjs/toolkit";

type StoreType = {
  select: string;
  guide: boolean;

  chairOption: {
    newChair: boolean;
    body: { material: string; width: number; height: number; side: number };
    column: {
      material: string;
      chairColumn: Array<Array<number>>;
      width: Array<number>;
      height: Array<number>;
      rotation: Array<Array<number>>;
      side: number;
    };
  };
  sofaOption: {
    newSofa: boolean;
    material: string;
  };
  deskOption: {
    newDesk: boolean;
    material: string;
  };
};

const initialState: StoreType = {
  select: "",
  guide: true,

  chairOption: {
    newChair: false,
    body: {
      material: "",
      width: 10,
      height: 10,
      side: 10,
    },
    column: {
      material: "",
      chairColumn: [],
      width: [],
      height: [],
      rotation: [],
      side: 10,
    },
  },
  sofaOption: {
    newSofa: false,
    material: "",
  },
  deskOption: {
    newDesk: false,
    material: "",
  },
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState: initialState,
  reducers: {
    selectChange: (state, action) => {
      state.select = action.payload;
    },
    setGuide: (state, action) => {
      state.guide = action.payload;
    },
    setNewChair: (state, action) => {
      if (!state.chairOption.newChair) state.chairOption.newChair = action.payload;
      else {
        state.chairOption = { ...initialState.chairOption, newChair: true };
      }
    },
    createColumn: (state, action) => {
      state.chairOption.column.chairColumn = [
        ...state.chairOption.column.chairColumn,
        action.payload[0],
      ];
      state.chairOption.column.width = [...state.chairOption.column.width, action.payload[1]];
      state.chairOption.column.height = [...state.chairOption.column.height, action.payload[2]];
      state.chairOption.column.rotation = [...state.chairOption.column.rotation, action.payload[3]];
    },
    setChairWidth: (state, action) => {
      const [value, index] = action.payload;
      state.chairOption.column.width[index] = value;
    },
    setChairHeight: (state, action) => {
      const [value, index] = action.payload;
      state.chairOption.column.height[index] = value;
    },
    setChairRotation: (state, action) => {
      const [value, index, xyz] = action.payload;
      state.chairOption.column.rotation[index][xyz] = value;
    },
  },
});

export const {
  selectChange,
  setGuide,
  setChairWidth,
  setChairHeight,
  setChairRotation,
  setNewChair,
  createColumn,
} = furnitureSlice.actions;
