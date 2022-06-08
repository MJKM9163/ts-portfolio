import { FurnitureState } from "furniture/modules/store";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { chengeSofa, chengeChair, chengeDesk } from "../../modules/furniture";
import { Chair } from "./customs/Chair";
import { Desk } from "./customs/Desk";
import { Sofa } from "./customs/Sofa";

const ControlBox = styled.div`
  position: absolute;
  right: 0px;
  width: 300px;
  height: 100vh;
  background-color: #808080;
  z-index: 2;

  .guide {
    padding: 5px 0px 5px 3px;
    border-bottom: 1px solid #d3d3d3;
    color: white;
  }

  .selectBox {
    border-bottom: 1px solid #d3d3d3;
    li {
      list-style: none;
      color: #dadada;
      background-color: #494949;
      margin-top: 5px;
      margin-bottom: 5px;
      padding-left: 3px;
      font-size: 24px;
    }
  }

  .custom {
    color: aqua;
  }
`;

export const ControlTap = () => {
  const select = useSelector((state: FurnitureState) => state.furniture.select);
  const dispatch = useDispatch();

  const onSofa = () => {
    dispatch(chengeSofa());
  };

  const onChair = () => {
    dispatch(chengeChair());
  };

  const onDesk = () => {
    dispatch(chengeDesk());
  };

  return (
    <ControlBox>
      <div className="guide">홈 {select !== "" ? `> ${select}` : null}</div>
      <div className="selectBox">
        <li onClick={() => onSofa()}>의자</li>
        <li onClick={() => onChair()}>소파</li>
        <li onClick={() => onDesk()}>책상</li>
      </div>
      {select === "SOFA" ? <Sofa /> : null}
      {select === "CHAIR" ? <Chair /> : null}
      {select === "DESK" ? <Desk /> : null}
    </ControlBox>
  );
};
