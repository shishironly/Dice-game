import { useState } from "react";
import GamePlay from "./assets/components/GamePlay";
import StartGame from "./assets/components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />}</>
  );
}

export default App;
