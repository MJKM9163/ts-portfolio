import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChairRotation, setGuide } from "./furniture";
import { RootState } from "./store";

export const Event = () => {
  const guide = useSelector((state: RootState) => state.furniture.guide);
  const { select, rotation } = useSelector(
    (state: RootState) => state.furniture.chairOption.column
  );
  const dispatch = useDispatch();
  const keyEvent = (e: KeyboardEvent) => {
    if (e.key === "Shift") {
      dispatch(setGuide(!guide));
    } else if (select !== false) {
      if (typeof select === "number") {
        if (e.key === "q") {
          if (rotation[select][0] + 0.1 < 5) {
            dispatch(setChairRotation([rotation[select][0] + 0.1, select, 0]));
          }
        } else if (e.key === "w") {
          if (rotation[select][1] + 0.1 < 5) {
            dispatch(setChairRotation([rotation[select][1] + 0.1, select, 1]));
          }
        } else if (e.key === "e") {
          if (rotation[select][2] + 0.1 < 5) {
            dispatch(setChairRotation([rotation[select][2] + 0.1, select, 2]));
          }
        } else if (e.key === "a") {
          if (rotation[select][0] - 0.1 > -5) {
            dispatch(setChairRotation([rotation[select][0] - 0.1, select, 0]));
          }
        } else if (e.key === "s") {
          if (rotation[select][1] - 0.1 > -5) {
            dispatch(setChairRotation([rotation[select][1] - 0.1, select, 1]));
          }
        } else if (e.key === "d") {
          if (rotation[select][2] - 0.1 > -5) {
            dispatch(setChairRotation([rotation[select][2] - 0.1, select, 2]));
          }
        }
      }
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
