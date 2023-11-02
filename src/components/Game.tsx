import { useState } from "react";
import Bo
import Board from "./Board";

function Game () {
  const [history, setHistory] = useState<[Array<string | null>]>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNest, setXIsNext] = useState(true);

  const calculateWinner = (squares: (string | null)[]) => {

  }

  const handleClick = (i: number) => {
    const 

  }

  const render = () => {
    return (
      <Board
        squares={squares}
        onClick={handleClick}
      />
    )
  }

  return (
    Boa
  );
}

export default Game;

