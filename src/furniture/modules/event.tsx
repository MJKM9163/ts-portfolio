import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGuide } from "./furniture";
import { RootState } from "./store";

export const Event = () => {
  const guide = useSelector((state: RootState) => state.furniture.guide);
  const dispatch = useDispatch();
  const keyEvent = (e: KeyboardEvent) => {
    if (e.key === "Shift") {
      console.log(guide);
      dispatch(setGuide(!guide));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyEvent as EventListener);
    return () => {
      window.removeEventListener("keydown", keyEvent as EventListener);
    };
  });

  return null;
};
