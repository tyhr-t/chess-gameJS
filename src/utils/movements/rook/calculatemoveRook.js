export const calculateMoveRook = (currentPawn, board) => {
  const movesRook = []
  const { positionX, positionY } = currentPawn
  // const checkIfPawnForward = ""

  for (let i = 0; i < 7; i += 1) {
    if (!board[positionX][positionY - 1]) {
      // movesRook.push({ positionX, positionY: positionY - 1 })
      console.log(movesRook)
    }
  }
}
