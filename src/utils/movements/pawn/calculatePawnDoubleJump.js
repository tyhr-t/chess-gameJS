// export const calculatePawnDoubleJump = (currentPawn, checks, moves) => {
//   if (
//     currentPawn.positionY === 6 &&
//     checks.checkIfPawnForward &&
//     checks.checkIfPawnForwardTwoCaseAfter
//   ) {
//     moves.push({
//       positionY: currentPawn.positionY - 2,
//       positionX: Number(currentPawn.positionX)
//     })
//   }
// }

import { getPieceColor } from "../../_players/getPieceColor"

export const calculatePawnDoubleJump = (currentPawn, direction, board) => {
  const x = currentPawn.PositionX
  const y = currentPawn.PositionY + 1 * Number(direction)
  const startPositionYForDoubleJump =
    getPieceColor(currentPawn.value) === "white" ? 6 : 1

  return board[y][x] === "" && y === startPositionYForDoubleJump
}
