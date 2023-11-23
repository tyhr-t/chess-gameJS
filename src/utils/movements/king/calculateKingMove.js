import directionsIterators from "../../constant/directionsIterators"
import { isInBoard } from "../../cells/isInBoard"
export const calculateKingMove = (currentPawn /* , dep, board */) => {
  const moves = []
  const { positionX, positionY /*color*/ } = currentPawn

  for (const direction of Object.keys(directionsIterators)) {
    const directionIterator = directionsIterators[direction]
    const laPositionAVerifier = {
      positionX: positionX + directionIterator.x,
      positionY: positionY + directionIterator.y
    }

    if (isInBoard(laPositionAVerifier)) {
      moves.push({
        positionX: laPositionAVerifier.positionX,
        positionY: laPositionAVerifier.positionY
      })
    }
  }

  return moves
}
