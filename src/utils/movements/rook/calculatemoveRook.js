import { isInBoard } from "../../cells/isInBoard"
import { getPieceColor } from "../../_players/getPieceColor"
import { checkIsEnemy } from "../../cells/checkIsEnnemy"
import { directionsIterators } from "../../constant/constant"

export const calculateMoveRook = (currentPawn, dep, board) => {
  const { up, left, down, right } = directionsIterators
  const rookPossibleMovement = { up, left, down, right }
  const moves = []
  const { positionX: actualPositionX, positionY: actualPositionY } = currentPawn

  for (const direction of Object.keys(rookPossibleMovement)) {
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
