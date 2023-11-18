export const calculatePawnForward = (
  currentPawn,
  checkIfPawnForward,
  moves
) => {
  if (!checkIfPawnForward) {
    moves.push({
      positionY: currentPawn.positionY - 1,
      positionX: Number(currentPawn.positionX)
    })
  }
}
