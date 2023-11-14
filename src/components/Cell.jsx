const Cell = ({
  setCurrentPawn,
  currentPawn,
  chessBoard,
  x,
  y,
  setChessBoard
}) => {
  const handleClickCell = (e) => {
    const pawnValue = e.target?.getAttribute("data-square-value")
    const pawnValueX = e.target?.getAttribute("data-square-x")
    const pawnValueY = e.target?.getAttribute("data-square-y")

    if (pawnValue === "1") {
      const pawnInfo = {
        value: pawnValue,
        positionX: pawnValueX,
        positionY: pawnValueY
      }
      setCurrentPawn(pawnInfo)
      console.log(currentPawn)
    }

    if (currentPawn) {
      setChessBoard((prev) => {
        const newChess = [...prev]
        newChess[pawnValueY][pawnValueX] = currentPawn.value
        newChess[currentPawn.positionY][currentPawn.positionX] = 0

        return newChess
      })
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
      data-pawn-position={`${x}-${y}`}
      onClick={handleClickCell}
      className={`w-20 h-20 ${isBlack ? "bg-blue-300" : ""}`}>
      <p>{`${chessBoard[y][x]}`}</p>
      <br />
      {` ${x}, ${y}`}
    </div>
  )
}
export default Cell

// 1 - Sélectioner un pion -> Si il fait partie de l'équipe du joueur en cours
// 2 - Si un pion est sélectionné, afficher les déplacement possibles
// 3 - Si une case des déplacements possibles est cliquée, déplacer le pion -> déselectionner le pion
// 4 - Si tu reclique ton pion, ça le déselectionne
