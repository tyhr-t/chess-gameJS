import { calculatePawnDoubleJump } from "./calculatePawnDoubleJump"
export const calculatePawnForward = (currentPawn, moves, board) => {
  const { positionX } = currentPawn
  const positionY = currentPawn.positionY + 1 * Number(currentPawn.direction)

  if (board[positionY][positionX] === "") {
    moves.push({
      positionX,
      positionY
    })
    calculatePawnDoubleJump(currentPawn, moves, board)
  }
}
