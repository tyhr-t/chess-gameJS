const Cell = ({
  setCurrentPawn,
  currentPawn,
  chessBoard,
  currentPlayer,
  x,
  // setPossiblesMovements,
  // possiblesMovements,
  y,
  setChessBoard
}) => {
  const handleClickCell = (e) => {
    const clickedCellValue = e.target?.getAttribute("data-square-value")
    const cellX = e.target?.getAttribute("data-square-x")
    const cellY = e.target?.getAttribute("data-square-y")

    console.log(e.target)

    if (clickedCellValue && currentPlayer === "white") {
      const pawnInfo = {
        value: clickedCellValue,
        positionX: cellX,
        positionY: cellY
      }
      setCurrentPawn(pawnInfo)
    }

    if (currentPawn) {
      setChessBoard((prev) => {
        const newChess = [...prev]
        newChess[currentPawn.positionY][currentPawn.positionX] = ""
        newChess[cellY][cellX] = currentPawn.value

        return newChess
      })
      setCurrentPawn(null)
    }
  }
  const lineIsPair = y % 2 === 0
  const offset = lineIsPair ? 0 : 1
  const isBlack = (x + offset) % 2 === 0

  return (
    <div
      data-square-y={`${y}`}
      data-square-x={`${x}`}
      data-square-value={chessBoard[y][x]}
      onClick={handleClickCell}
      className={`w-20 h-20 ${isBlack ? "bg-blue-300" : ""}`}>
      {`${chessBoard[y][x]}`}
      <br />
      {` ${x}, ${y}`}
    </div>
  )
}
export default Cell
