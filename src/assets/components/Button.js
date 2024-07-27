import styled from "styled-components";

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  background: black;
  padding: 5px 30px;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  min-width: 220px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export default Button;