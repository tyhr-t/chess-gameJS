import { checkPossibleToMoveHere } from "../utils/cells/checkPossibleToMoveHere"
import { getOpositeColor } from "../utils/_players/getOpositeColor"
import { getPieceColor } from "../utils/_players/getPieceColor"
import { handleSelection } from "../utils/_players/handleSelection"
import { useContext } from "react"
import { chessContext } from "./GameContextProvider"
import { tileColors } from "../utils/constant/constant"
import Piece from "./Piece"

const { black, white } = tileColors
const Cell = ({ x, y }) => {
  const {
    setCurrentPawn,
    currentPawn,
    chessBoard,
    currentPlayer,
    setCurrentPlayer,
    possiblesMovements,
    setChessBoard
  } = useContext(chessContext)
  const handleClickCell = () => {
    const clickedCellValue = chessBoard[y][x]

    handleSelection(
      { positionX: x, positionY: y, value: clickedCellValue },
      currentPlayer,
      setCurrentPawn
    )

    if (
      currentPawn &&
      !(currentPlayer === getPieceColor(clickedCellValue)) &&
      isPossibleToMoveHere
    ) {
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
  const isPossibleToMoveHere = checkPossibleToMoveHere(x, y, possiblesMovements)

  return (
    <div
      onClick={handleClickCell}
      className={`w-20 h-20 ${isBlack ? black : white} ${
        isPossibleToMoveHere ? "border-2 border-red-600 " : ""
      }  flex justify-center items-center `}>
      <Piece typeOfPiece={chessBoard[y][x]} />
    </div>
  )
}
export default Cell
