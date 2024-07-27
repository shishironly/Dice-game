import { useState } from "react";
import DiceContainer from "./DiceContainer";
import Numberselector from "./Numberselector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import Button from "./Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [diceNumber, setdiceNumber] = useState(6);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const genRandomNumber = (min, max) => {
    const x = Math.floor(Math.random() * (max - min) + min);
    setdiceNumber(x);

    if (x === selectedNumber) {
      setscore((prev) => prev + x);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectedNumber(undefined);
    if (!selectedNumber) {
      setError("You have not selected any number");
      setscore(score);
      return;
    }
    setError("");
  };

  const resetScore = () => {
    setscore(0);
  };

  const toggle = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <div>
      <FlexContainer>
        <TotalScore score={score} />
        <Numberselector
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
          error={error}
        />
      </FlexContainer>

      <DiceContainer
        diceNumber={diceNumber}
        setdiceNumber={setdiceNumber}
        randNumber={genRandomNumber}
      />
      <SecondButtons>
        <Button onClick={resetScore} className="reset">
          Reset
        </Button>
        <Button onClick={toggle}> {showRules ? "Hide" : "Show"} Rules</Button>
      </SecondButtons>
      {showRules && <Rules />}
    </div>
  );
};

export default GamePlay;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SecondButtons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  .reset {
    background-color: transparent;
    color: black;
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
