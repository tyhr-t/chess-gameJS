import { directionsIterators } from "../../constant/constant"

import { isInBoard } from "../../cells/isInBoard"
import { getPieceColor } from "../../_players/getPieceColor"
export const calculateKingMove = (currentPawn, dep, board) => {
  const moves = []
  const { positionX, positionY } = currentPawn

  for (const direction of Object.keys(directionsIterators)) {
    const directionIterator = directionsIterators[direction]
    const laPositionAVerifier = {
      positionX: positionX + directionIterator.x,
      positionY: positionY + directionIterator.y
    }

    if (isInBoard(laPositionAVerifier)) {
      laPositionAVerifier.color = getPieceColor(
        board[positionY + directionIterator.y][positionX + directionIterator.x]
      )

      if (
        !laPositionAVerifier.color ||
        laPositionAVerifier.color !== currentPawn.color
      ) {
        moves.push({
          positionX: laPositionAVerifier.positionX,
          positionY: laPositionAVerifier.positionY
        })
      }
    }
  }

  return moves
}
