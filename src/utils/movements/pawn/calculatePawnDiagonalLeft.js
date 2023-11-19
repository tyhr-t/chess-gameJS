export const calculatePawnDiagonalLeft = (
  currentPawn,
  moves,
  checkIfPawnInDiagonalLeft
) => {
  if (!checkIfPawnInDiagonalLeft /*&& color*/) {
    moves.push({
      positionY: currentPawn.positionY - 1,
      positionX: currentPawn.positionX - 1
    })
  }
}
