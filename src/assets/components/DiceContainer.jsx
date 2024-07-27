// import { useState } from "react";
import styled from "styled-components";
// import StartGame from "./StartGame";

const DiceContainer = ({ setdiceNumber, diceNumber, randNumber }) => {
  return (
    <div>
      <DiceImages>
        <div onClick={() => randNumber(1, 7)} className="dice_images">
          <img src={`/images/dices/dice_${diceNumber}.png`} alt="" />
        </div>

        <p>Click on Dice to roll</p>
      </DiceImages>
    </div>
  );
};

export default DiceContainer;

const DiceImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  .dice_images {
    cursor: pointer;
  }
`;
