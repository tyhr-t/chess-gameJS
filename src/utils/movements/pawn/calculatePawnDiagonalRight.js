import { getPieceColor } from "../../_players/getPieceColor"
export const calculatePawnDiagonalRight = (currentPawn, direction, board) => {
  const x = currentPawn.PositionX + 1
  const y = currentPawn.PositionY + 1 * Number(direction)

  return getPieceColor(currentPawn.value) !== getPieceColor(board[y][x])
}
