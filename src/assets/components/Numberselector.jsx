// import { useState } from "react";
import styled from "styled-components";

const Numberselector = ({error,selectedNumber, setselectedNumber}) => {
  const array = [1, 2, 3, 4, 5, 6];
  // console.log(selectedNumber);

  return (
    <TopSection>
      <p className="error">{error}</p>
      <BoxFlex>
        {array.map((item) => (
          <Box
            isselected={item === selectedNumber}
            onClick={() => setselectedNumber(item)}
            key={item}
          >
            {item}
          </Box>
        ))}
      </BoxFlex>
      <p>Select Number</p>
    </TopSection>
  );
};

export default Numberselector;

const Box = styled.div`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  font-weight: 700;
  font-size: 24px;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;

const BoxFlex = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
`;


const TopSection=styled.div`
display: flex;
flex-direction: column;
align-items: end;
justify-content: flex-end;
p{
    font-weight: 600;
    font-size: 24px;
}
.error{
  color: red;
  font-weight: 500;
}
`