import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { furnitureSlice } from "./furniture";

export const store = configureStore({
  reducer: { furniture: furnitureSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<DispatchType>();
