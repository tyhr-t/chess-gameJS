import { calculatePawnForward } from "./calculatePawnForward"
import { calculatePawnDoubleJump } from "./calculatePawnDoubleJump"

export const calculateMovePawn = (currentPawn, currentPlayer, board) => {
  const moves = []
  const { positionX, positionY } = currentPawn
  const checkIfPawnForward = Boolean(board[positionY - 1][positionX])
  const checkIfPawnForwardTwoCaseAfter = Boolean(
    board[positionY - 2][positionX]
  )

  calculatePawnForward(currentPawn, checkIfPawnForward, moves)
  calculatePawnDoubleJump(
    currentPawn,
    { checkIfPawnForwardTwoCaseAfter, checkIfPawnForward },
    moves
  )

  return moves
}
