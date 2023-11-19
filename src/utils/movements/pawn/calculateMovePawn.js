import { calculatePawnForward } from "./calculatePawnForward"
import { calculatePawnDoubleJump } from "./calculatePawnDoubleJump"
import { calculatePawnDiagonalLeft } from "./calculatePawnDiagonalLeft"
import { calculatePawnDiagonalRight } from "./calculatePawnDiagonalRight"

export const calculateMovePawn = (currentPawn, currentPlayer, board) => {
  const moves = []
  const { positionX, positionY } = currentPawn
  const checkIfPawnForward = Boolean(board[positionY - 1][positionX])
  const checkIfPawnForwardTwoCaseAfter = Boolean(
    board[positionY - 2][positionX]
  )
  const checkIfPawnInDiagonalLeft = Boolean(board[positionY - 1][positionX - 1])
  const checkIfPawnInDiagonalRight = Boolean(
    board[positionY - 1][positionX + 1]
  )

  calculatePawnDiagonalRight(currentPawn, moves, checkIfPawnInDiagonalRight)

  calculatePawnDiagonalLeft(currentPawn, moves, checkIfPawnInDiagonalLeft)
  calculatePawnForward(currentPawn, checkIfPawnForward, moves)
  calculatePawnDoubleJump(
    currentPawn,
    { checkIfPawnForwardTwoCaseAfter, checkIfPawnForward },
    moves
  )

  return moves
}
