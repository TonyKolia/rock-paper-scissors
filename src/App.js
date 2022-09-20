import GameBoard from "./Components/GameBoard";
import React from "react";
import { GameOutcomes } from "./Constants";
import Home from "./Components/Home";

const SelectRandomSymbol = () => {
  return Math.floor(Math.random() * 3);
}

const DecideResult = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection)
    return GameOutcomes.Draw;

  if (playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || playerSelection === 2 && computerSelection === 0)
    return GameOutcomes.ComputerVictory;
  else
    return GameOutcomes.PlayerVictory;
}

function App() {

  const [playerChoice, setPlayerChoice] = React.useState(-1);
  const [computerChoice, setComputerChoice] = React.useState(-1);
  const [gameResult, setGameResult] = React.useState(-1);
  const [resetGame, setResetGame] = React.useState(1);
  const [startGame, setStartGame] = React.useState(false);

  React.useEffect(() => {

    if (playerChoice === -1)
      return;

    let computerRandomChoice = SelectRandomSymbol();
    setComputerChoice(computerRandomChoice);
    let result = DecideResult(playerChoice, computerRandomChoice)
    setGameResult(result);

  }, [playerChoice]);


  React.useEffect(() => {

    setPlayerChoice(-1);
    setComputerChoice(-1);
    setGameResult(-1);

  }, [resetGame]);

  const startNewGame = () => {
    setResetGame((oldFlag) => oldFlag * -1);
    let board = document.getElementById("game-board");
        board.style.boxShadow = "";
  }

  const beginGame = () => setStartGame(true);

  return (
    <>
      <div className="main-container">
        {!startGame && <Home beginGame={beginGame} />}
        {startGame && <GameBoard startNewGame={startNewGame} setPlayerChoice={setPlayerChoice} gameResult={gameResult} playerChoice={playerChoice} computerChoice={computerChoice} />}
      </div>
    </>

  );
}

export default App;
