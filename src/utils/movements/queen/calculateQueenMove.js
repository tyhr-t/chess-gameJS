import directionsIterators from "../../constant/directionsIterators"
import { isInBoard } from "../../cells/isInBoard"
import { getPieceColor } from "../../_players/getPieceColor"
import { checkIsEnemy } from "../../cells/checkIsEnnemy"

export const calculateQueenMove = (currentPawn, dep, board) => {
  const moves = []
  const { positionX: actualPositionX, positionY: actualPositionY } = currentPawn

  for (const direction of Object.keys(directionsIterators)) {
    const directionIterator = directionsIterators[direction]
    let positionX = actualPositionX + directionIterator.x
    let positionY = actualPositionY + directionIterator.y

    while (isInBoard({ positionX, positionY })) {
      const color = getPieceColor(board[positionY][positionX])

      if (color === currentPawn.color) {
        break
      } else if (checkIsEnemy(currentPawn, color)) {
        moves.push({ positionX, positionY })

        break
      } else {
        moves.push({ positionX, positionY })
      }

      positionX += directionIterator.x
      positionY += directionIterator.y
    }
  }

  return moves
}
