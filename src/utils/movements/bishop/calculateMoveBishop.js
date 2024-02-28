import { directionsIterators } from "../../constant/constant"

import { isInBoard } from "../../cells/isInBoard"
import { getPieceColor } from "../../_players/getPieceColor"
import { checkIsEnemy } from "../../cells/checkIsEnnemy"

export const calculateMoveBishop = (currentPawn, dep, board) => {
  const { upRight, upLeft, downLeft, downRight } = directionsIterators
  const bishopPossibleMovement = { upRight, upLeft, downLeft, downRight }
  const moves = []
  const { positionX: actualPositionX, positionY: actualPositionY } = currentPawn

  for (const direction of Object.keys(bishopPossibleMovement)) {
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
