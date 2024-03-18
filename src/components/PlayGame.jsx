import { useState } from "react";
import styled from "styled-components";
import QuestionBlock from "./QuestionBlock";
import { Button, Strong } from "@radix-ui/themes";

const PLayBlock = styled.div`
  width: 100%;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Dashboard = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const StartButton = styled.button`
//   width: 200px;
//   height: 50px;
//   font-size: 24px;
//   background-color: ${(props) => (props.$isClicked ? "tomato" : "lime")};
//   margin: 20px;
// `;

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
        <Button
          onClick={handleClick}
          size="4"
          variant="solid"
          style={{
            backgroundColor: isVisible ? "#D50000" : "#76FF03",
            color: isVisible ? "#FFEBEE" : "#004D40",
          }}
        >
          <Strong>{isClicked ? "End the Game" : "Start the Game"}</Strong>
        </Button>
      </Dashboard>
      {isVisible && <QuestionBlock />}
    </PLayBlock>
  );
}

export default PlayGame;
