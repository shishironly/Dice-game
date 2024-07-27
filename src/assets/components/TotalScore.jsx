import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

const Container = styled.div`
  text-align: center;
  width: 200px;
  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
