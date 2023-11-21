export const calculatePawnForward = (currentPawn, direction, board) => {
  const x = currentPawn.PositionX
  const y = currentPawn.PositionY + 1 * Number(direction)

  return board[y][x] === ""
}
