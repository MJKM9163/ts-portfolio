import { setChairColumn, setChairWidth, setNewChair } from "furniture/modules/furniture";
import { RootState } from "furniture/modules/store";
import { useDispatch, useSelector } from "react-redux";

export const Chair = () => {
  const select = useSelector((state: RootState) => state.furniture);
  const dispatch = useDispatch();

  const fun = (value: number) => {
    dispatch(setChairWidth(value));
  };

  return (
    <div>
      <div className="option">
        <div>프리셋(나무)</div>
        <div>프리셋(가죽)</div>
        <div onClick={() => dispatch(setNewChair(!select.newChair))}>새로 만들기</div>
      </div>
      {select.newChair ? (
        <div className="settingBox">
          <div className="select">
            재질
            <div>
              <span>가죽</span>
              <span>나무</span>
            </div>
          </div>
          <div className="setting">
            <div className="s">
              길이
              <input
                type={"range"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                onChange={(e) => fun(Number(e.target.value))}
              />
              <input
                type={"text"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                readOnly
              />
            </div>
            <div className="s">
              넓이
              <input
                type={"range"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                onChange={(e) => fun(Number(e.target.value))}
              />
              <input
                type={"text"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                readOnly
              />
            </div>
            <div className="s">
              회전
              <input
                type={"range"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                onChange={(e) => fun(Number(e.target.value))}
              />
              <input
                type={"text"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                readOnly
              />
            </div>
            <div className="s">
              색
              <input
                type={"range"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                onChange={(e) => fun(Number(e.target.value))}
              />
              <input
                type={"text"}
                max={100}
                min={0}
                step={0.1}
                value={select.chairWidth}
                readOnly
              />
            </div>
            <div className="select">
              기둥
              <div>
                <span onClick={() => dispatch(setChairColumn(1))}>추가</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
