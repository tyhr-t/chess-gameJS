const Cell = ({ setSelectedPawnState, chessBoard, x, y, setChessBoard }) => {
  const handleClickCell = (e) => {
    const pawnValue = e.target?.getAttribute("data-square-value")

    if (pawnValue === "1") {
      setSelectedPawnState(pawnValue)
    }

    setChessBoard((prev) => prev)
  }
  const lineIsPair = y % 2 === 0
  const offset = lineIsPair ? 0 : 1
  const isBlack = (x + offset) % 2 === 0

  return (
    <div
      data-square-y={`${y}`}
      data-square-x={`${x}`}
      data-square-value={chessBoard[y][x]}
      data-pawn-position={`${x}-${y}`}
      onClick={handleClickCell}
      className={`w-20 h-20 ${isBlack ? "bg-blue-300" : ""}`}>
      {`${chessBoard[y][x]} | (${x} - ${y})`}
    </div>
  )
}
export default Cell
