import { useState } from "react";
import styled from "styled-components";
import QuestionBlock from "./QuestionBlock";

const PLayBlock = styled.div`
  width: 100%;
  height: 1000px;
  background-color: lightyellow;
`;

const Dashboard = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightblue;
`;

const StartButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 24px;
  background-color: ${(props) => (props.$isClicked ? "tomato" : "lime")};
  margin: 20px;
`;

function PlayGame() {
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
    setIsVisible(!isVisible);
  }

  return (
    <PLayBlock>
      <Dashboard>
        <StartButton $isClicked={isClicked} onClick={handleClick}>
          {isClicked ? "PAUSE" : "START"}
        </StartButton>
      </Dashboard>
      {isVisible && <QuestionBlock />}
    </PLayBlock>
  );
}

export default PlayGame;
