import { setChairHeight, setChairWidth, setNewChair } from "furniture/modules/furniture";
import { RootState } from "furniture/modules/store";
import { useDispatch, useSelector } from "react-redux";

export const Chair = () => {
  const select = useSelector((state: RootState) => state.furniture.chairOption);
  const dispatch = useDispatch();

  const columnChange = (value: number, index: number, type: string) => {
    if (type === "width") {
      dispatch(setChairWidth([value, index]));
    } else if (type === "height") {
      dispatch(setChairHeight([value, index]));
    }
  };

  return (
    <div>
      <div className="option">
        <div>프리셋(나무)</div>
        <div>프리셋(가죽)</div>
        <div onClick={() => dispatch(setNewChair(true))}>새로 만들기</div>
      </div>
      {select.newChair ? (
        <div className="settingBox">
          <div className="bodySet">
            <div className="title">몸체</div>
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
                  value={select.body.height}
                  onChange={(e) => null}
                />
                <input
                  type={"text"}
                  max={100}
                  min={0}
                  step={0.1}
                  value={select.body.height}
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
                  value={select.body.width}
                  onChange={(e) => null}
                />
                <input
                  type={"text"}
                  max={100}
                  min={0}
                  step={0.1}
                  value={select.body.width}
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
                  value={select.body.width}
                  onChange={(e) => null}
                />
                <input
                  type={"text"}
                  max={100}
                  min={0}
                  step={0.1}
                  value={select.body.width}
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
                  value={select.body.width}
                  onChange={(e) => null}
                />
                <input
                  type={"text"}
                  max={100}
                  min={0}
                  step={0.1}
                  value={select.body.width}
                  readOnly
                />
              </div>
            </div>
          </div>
          {select.column.chairColumn.length !== 0
            ? select.column.chairColumn.map((i, index) => (
                <div key={"columnSet" + index} className="cloumnSet">
                  <div className="title">다리 {index + 1}</div>
                  <div className="select">
                    재질
                    <div>
                      <span>가죽</span>
                      <span>나무</span>
                    </div>
                  </div>
                  <div className="setting">
                    <div className="s">
                      넓이
                      <input
                        type={"range"}
                        max={2}
                        min={0.1}
                        step={0.1}
                        value={select.column.width[index]}
                        onChange={(e) => columnChange(Number(e.target.value), index, "width")}
                      />
                      <input type={"text"} step={0.1} value={select.column.width[index]} readOnly />
                    </div>
                    <div className="s">
                      길이
                      <input
                        type={"range"}
                        max={35}
                        min={1}
                        step={0.1}
                        value={select.column.height[index]}
                        onChange={(e) => columnChange(Number(e.target.value), index, "height")}
                      />
                      <input
                        type={"text"}
                        step={0.1}
                        value={select.column.height[index]}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};
