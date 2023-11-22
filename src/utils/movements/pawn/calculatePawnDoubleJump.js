export const calculatePawnDoubleJump = (currentPawn, moves, board) => {
  const { positionX } = currentPawn
  const positionY = currentPawn.positionY + 2 * Number(currentPawn.direction)
  const startPositionYForDoubleJump = currentPawn.color === "white" ? 6 : 1

  if (
    board[positionY][positionX] === "" &&
    currentPawn.positionY === startPositionYForDoubleJump
  ) {
    moves.push({
      positionX,
      positionY
    })
  }
}
