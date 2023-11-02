import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
  winningSquares: number[];
  disabled: boolean;
}

function Board (props: BoardProps) {
  const {squares, onClick, winningSquares, disabled} = props;

  const renderSquare = (i: number) => {
    return (
      <Square
        onClick={() => onClick(i)}
        value={squares[i]}
      />
    )
  }

  return (
    <div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(3 * row + col))}
        </div>
      ))}
    </div>
  )
}

export default Board;
