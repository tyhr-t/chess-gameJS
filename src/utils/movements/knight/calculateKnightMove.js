import { directionsKnightIterators } from "../../constant/directionKnightIterators"
import { isInBoard } from "../../cells/isInBoard"
import { getPieceColor } from "../../_players/getPieceColor"
import { checkIsEnemy } from "../../cells/checkIsEnnemy"

export const calculateKnightMove = (currentPawn, dep, board) => {
  const moves = []
  const { positionX: actualPositionX, positionY: actualPositionY } = currentPawn

  for (const direction of Object.keys(directionsKnightIterators)) {
    const directionIterator = directionsKnightIterators[direction]
    const positionX = actualPositionX + directionIterator.x
    const positionY = actualPositionY + directionIterator.y

    if (isInBoard({ positionX, positionY })) {
      const color = getPieceColor(board[positionY][positionX])

      if (color === currentPawn.color) {
        continue
      } else if (checkIsEnemy(currentPawn, color)) {
        moves.push({ positionX, positionY })
      } else {
        moves.push({ positionX, positionY })
      }
    }
  }

  return moves
}
