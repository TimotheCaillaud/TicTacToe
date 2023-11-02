interface SquareProps {
  value: string | null;
  onClick: () => void;
}

function Square(props: SquareProps) {
  const {value, onClick} = props;

  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  )
}

export default Square;
