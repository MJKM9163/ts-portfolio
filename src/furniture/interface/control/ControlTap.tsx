import { selectChange } from "furniture/modules/furniture";
import { RootState } from "furniture/modules/store";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Chair } from "./customs/Chair";
import { Desk } from "./customs/Desk";
import { Sofa } from "./customs/Sofa";

const ControlBox = styled.div`
  position: absolute;
  right: 0px;
  width: 300px;
  height: 100vh;
  background-color: #ffe883a7;
  border-radius: 20px 0px 0px 20px;
  z-index: 2;

  .guide {
    padding: 5px 0px 5px 3px;
    color: #000000;
  }

  .title {
    margin-top: 5px;
    padding: 5px 0px 5px 3px;
    background-color: #ffdf74;
  }

  .selectBox {
    border-bottom: 1px solid #9e9e9e7b;
    margin-bottom: 10px;
    li {
      list-style: none;
      color: #303030;
      margin-top: 5px;
      margin-bottom: 5px;
      padding-left: 10px;
      font-size: 24px;
      :hover {
        color: #000000;
        background-color: #ffdf74;
      }
    }
    img {
      width: 50px;
      height: 50px;
      vertical-align: -15px;
      margin-right: 10px;
    }
  }

  .set {
    font-size: 24px;
    .option {
      color: #303030;
      padding-bottom: 10px;
      border-bottom: 1px solid #9e9e9e7b;
      div {
        padding: 5px 0px 5px 5px;
        :hover {
          color: #000000;
          background-color: #ffdf74;
        }
      }
    }
    .settingBox {
      padding: 10px 0px 5px 5px;

      .select {
        div {
          border-radius: 20%;
          margin: 0px 0px 0px 10px;
          padding-right: 10px;
          display: inline-block;
          width: max-content;
          background-color: #ffffff9d;
        }
        span {
          font-size: 20px;
          margin: 0px 0px 0px 10px;
          border-radius: 40%;
          vertical-align: 2px;
          :hover {
            background-color: #ffbe74;
          }
        }
      }

      .setting {
        .s {
          position: relative;
          width: 300px;
          padding-top: 5px;
        }
      }
    }

    input[type="range"] {
      position: absolute;
      top: 9px;
      left: 70px;
      -webkit-box-sizing: initial;
      font-family: "Hack";
      font-size: 11px;
      -webkit-appearance: none;
      height: 20px;
      display: inline-block;
      width: calc(50%);
      background-color: rgb(63, 63, 63);
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: #c0c0c0;
      cursor: pointer;
      height: 20px;
      width: 15px;
      :hover {
        background: #a7a7a7;
      }
    }
    input[type="text"] {
      position: absolute;
      background-color: rgb(54, 54, 54);
      padding-left: 1%;
      height: 20px;
      width: 16%;
      display: inline-block;
      overflow: hidden;
      border: none;
      font-size: 11px;
      color: rgb(181, 181, 181);
      line-height: 20px;
      word-break: break-all;
      box-sizing: border-box;
      top: 11px;
      right: 15px;
    }
  }
`;

export const ControlTap = () => {
  const select = useSelector((state: RootState) => state.furniture.select);

  const dispatch = useDispatch();

  return (
    <ControlBox>
      <div className="guide">홈 {select !== "" ? `> ${select}` : null}</div>
      <div className="title">가구 선택</div>
      <div className="selectBox">
        <li onClick={() => dispatch(selectChange("Chair"))}>
          <img src="/furniture/chair.png" />
          의자
        </li>
        <li onClick={() => dispatch(selectChange("Sofa"))}>
          <img src="/furniture/sofa.png" />
          소파
        </li>
        <li onClick={() => dispatch(selectChange("Desk"))}>
          <img src="/furniture/desk.png" />
          책상
        </li>
      </div>
      <div className="set">
        {select === "Sofa" ? <Sofa /> : null}
        {select === "Chair" ? <Chair /> : null}
        {select === "Desk" ? <Desk /> : null}
      </div>
    </ControlBox>
  );
};
