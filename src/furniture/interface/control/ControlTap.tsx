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
  width: 320px;
  height: 100vh;
  background-color: #ffe883a7;
  /* border-radius: 20px 0px 0px 50px; */
  z-index: 2;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffba79;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.514);
  }

  .guide {
    padding: 5px 0px 5px 3px;
    color: #000000;
  }

  .title {
    margin-top: 5px;
    padding: 5px 0px 5px 5px;
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
      padding: 10px 0px 5px 0px;

      font-size: 18px;
      .bodySet {
      }

      .cloumnSet {
        margin-top: 15px;
      }

      .select {
        margin: 5px 0px 0px 10px;
        span {
          margin: 0px 0px 0px 0px;
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
          margin: 0px 0px 0px 10px;
          padding-top: 5px;
        }
      }

      .name {
        width: 50px;
        display: inline-block;
        vertical-align: 3px;
      }

      .inputs {
        width: 230px;
        margin-top: -28px;
        margin-left: 42px;

        .xyzBox {
          .xyz {
            margin-right: 0px;
            display: inline-block;
            vertical-align: 4px;
          }
        }
      }
    }

    input[type="range"] {
      top: 9px;
      left: 70px;
      margin-left: 10px;
      font-size: 11px;
      -webkit-appearance: none;
      height: 20px;
      display: inline-block;
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
      background-color: rgb(54, 54, 54);
      padding-left: 5px;
      margin-left: 10px;
      vertical-align: 6px;
      height: 20px;
      width: 50px;
      display: inline-block;
      overflow: hidden;
      border: none;
      font-size: 11px;
      color: rgb(181, 181, 181);
      line-height: 20px;
      word-break: break-all;
      box-sizing: border-box;
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
