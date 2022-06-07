import { Link } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  background-color: #3b3b3b;
  width: 100%;
  height: 100vh;

  .box {
    position: relative;
    top: 100px;
    left: 100px;

    .title {
      font-size: 64px;
      margin-bottom: 50px;
      background-color: #aa5a5a;
      color: #eeeeee;
    }
    .list {
      margin-left: 30px;
      font-size: 24px;
      display: flex;
      flex-direction: column;

      a {
        opacity: 0;
        color: #e9e9e9;
        margin-bottom: 20px;
        text-decoration: none;
        width: max-content;
        padding: 0px 10px 0px 10px;
        background-color: #6a76bb;
      }
      a:nth-child(1) {
        animation: liAction 0.3s ease 0.5s alternate forwards;
      }
      a:nth-child(2) {
        animation: liAction 0.3s ease 0.8s alternate forwards;
      }
      a:nth-child(3) {
        animation: liAction 0.3s ease 1.1s alternate forwards;
      }
      a:nth-child(4) {
        animation: liAction 0.3s ease 1.4s alternate forwards;
      }
    }
  }

  @keyframes liAction {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const MainIndex = () => {
  return (
    <MainBox>
      <div className="box">
        <div className="title">포트폴리오</div>
        <div className="list">
          <Link to={"/Furniture"}>가구 커스텀</Link>
          <Link to={"/exp/1"}>아쿠아리움</Link>
          <Link to={"/exp/1"}>건물 만들기</Link>
          <Link to={"/exp/1"}>소개</Link>
        </div>
      </div>
    </MainBox>
  );
};
