import { checkPossibleToMoveHere } from "../utils/cells/checkPossibleToMoveHere"
import { getOpositeColor } from "../utils/_players/getOpositeColor"
import { getPieceColor } from "../utils/_players/getPieceColor"

const Cell = ({
  setCurrentPawn,
  currentPawn,
  chessBoard,
  currentPlayer,
  setCurrentPlayer,
  x,
  possiblesMovements,
  y,
  setChessBoard
}) => {
  const handleClickCell = () => {
    const clickedCellValue = chessBoard[y][x]

    if (clickedCellValue && currentPlayer === getPieceColor(clickedCellValue)) {
      const pawnInfo = {
        value: clickedCellValue,
        positionX: x,
        positionY: y
      }
      setCurrentPawn(pawnInfo)
    }

    if (currentPawn && !(currentPlayer === getPieceColor(clickedCellValue))) {
      setChessBoard((prev) => {
        const newChess = [...prev]
        newChess[currentPawn.positionY][currentPawn.positionX] = ""
        newChess[y][x] = currentPawn.value

        return newChess
      })
      setCurrentPawn(null)
      setCurrentPlayer(getOpositeColor(currentPlayer))
    }
  }
  const lineIsPair = y % 2 === 0
  const offset = lineIsPair ? 0 : 1
  const isBlack = (x + offset) % 2 === 0
  console.log("render", x, y, possiblesMovements)
  const isPossibleToMoveHere = checkPossibleToMoveHere(x, y, possiblesMovements)

  return (
    <div
      onClick={handleClickCell}
      className={`w-20 h-20 ${isBlack ? "bg-green-300" : "bg-white"} ${
        isPossibleToMoveHere ? "border-2 border-red-600" : ""
      }`}>
      {`${chessBoard[y][x]}`}
      <br />
      {` ${x}, ${y}`}
    </div>
  )
}
export default Cell
