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
    const pawnValue = e.target?.getAttribute("data-square-value")
    const pawnValueX = e.target?.getAttribute("data-square-x")
    const pawnValueY = e.target?.getAttribute("data-square-y")

    console.log(e.target)

    if (currentPlayer === "white") {
      const pawnInfo = {
        value: pawnValue,
        positionX: pawnValueX,
        positionY: pawnValueY
      }

      setCurrentPawn(pawnInfo)
    }

    if (currentPawn) {
      setChessBoard((prev) => {
        const newChess = [...prev]

        newChess[pawnValueY][pawnValueX] = currentPawn.value
        newChess[currentPawn.positionY][currentPawn.positionX] = ""

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
