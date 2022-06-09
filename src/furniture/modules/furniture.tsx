import { createSlice } from "@reduxjs/toolkit";

type ChairBodyType = {
  material: string;
  width: number;
  height: number;
  side: number;
};

type ChairColumnType = {
  material: string;
  chairColumn: Array<Array<number>>;
  width: Array<number>;
  height: Array<number>;
  side: number;
};

type ChairType = {
  newChair: boolean;
  body: ChairBodyType;
  column: ChairColumnType;
};

type SofaOption = {
  newSofa: boolean;
  material: string;
};

type DeskOption = {
  newDesk: boolean;
  material: string;
};

type StoreType = {
  select: string;

  chairOption: ChairType;
  sofaOption: SofaOption;
  deskOption: DeskOption;
};

const initialState: StoreType = {
  select: "",

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
    },
    setChairWidth: (state, action) => {
      const [value, index] = action.payload;
      state.chairOption.column.width[index] = value;
    },
    setChairHeight: (state, action) => {
      const [value, index] = action.payload;
      state.chairOption.column.height[index] = value;
    },
  },
});

export const { selectChange, setChairWidth, setChairHeight, setNewChair, createColumn } =
  furnitureSlice.actions;
