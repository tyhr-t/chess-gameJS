export const calculatePawnDoubleJump = (currentPawn, checks, moves) => {
  if (
    currentPawn.positionY === "6" &&
    !checks.checkIfPawnForward &&
    !checks.checkIfPawnForwardTwoCaseAfter
  ) {
    moves.push({
      positionY: currentPawn.positionY - 2,
      positionX: Number(currentPawn.positionX)
    })
  }
}
