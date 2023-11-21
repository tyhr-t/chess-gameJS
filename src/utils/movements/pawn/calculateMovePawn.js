import { calculatePawnForward } from "./calculatePawnForward"
import { calculatePawnDoubleJump } from "./calculatePawnDoubleJump"
import { calculatePawnDiagonalLeft } from "./calculatePawnDiagonalLeft"
import { calculatePawnDiagonalRight } from "./calculatePawnDiagonalRight"

export const calculateMovePawn = (currentPawn, currentPlayer, board) => {
  const moves = []
  const direction = currentPlayer === "white" ? -1 : 1
  const { positionX, positionY } = currentPawn
  const checkIfPawnForward = calculatePawnForward(currentPawn, direction, board)
  // const checkIfPawnForwardTwoCaseAfter = calculatePawnDoubleJump(
  //   currentPawn,
  //   direction,
  //   board
  // )
  const canMoveUpLeft = calculatePawnDiagonalLeft(currentPawn, direction, board)
  const canMoveUpRight = calculatePawnDiagonalRight(
    currentPawn,
    direction,
    board
  )

  if (canMoveUpLeft) {
    moves.push({
      positionX: positionX - 1,
      positionY: positionY + 1 * Number(direction)
    })
  }

  if (canMoveUpRight) {
    moves.push({
      positionX: positionX + 1,
      positionY: positionY + 1 * Number(direction)
    })
  }

  if (checkIfPawnForward) {
    moves.push({
      positionX,
      positionY: positionY + 1 * Number(direction)
    })

    //   if(checkIfPawnForwardTwoCaseAfter)
  }

  return moves
}
