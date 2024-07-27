import styled from "styled-components";

const StartGame = (p) => {
  return (
    <div>
      <Container>
        <div>
          <img src="/images/dices.png" alt="dices" />
        </div>

        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={p.toggle}>Play now</Button>
        </div>
      </Container>
    </div>
  );
};

export default StartGame;

const Container = styled.div`
  width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content h1 {
    font-size: 96px;
    font-weight: 700;
    white-space: nowrap;
  }
`;
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
