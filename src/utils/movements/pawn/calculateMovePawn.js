import { calculatePawnForward } from "./calculatePawnForward"
import { calculatePawnDiagonalLeft } from "./calculatePawnDiagonalLeft"
import { calculatePawnDiagonalRight } from "./calculatePawnDiagonalRight"

export const calculateMovePawn = (currentPawn, currentPlayer, board) => {
  const moves = []
  const direction = currentPlayer === "white" ? -1 : 1
  currentPawn.direction = direction
  calculatePawnForward(currentPawn, moves, board)
  calculatePawnDiagonalLeft(currentPawn, moves, board)
  calculatePawnDiagonalRight(currentPawn, moves, board)

  return moves
}
