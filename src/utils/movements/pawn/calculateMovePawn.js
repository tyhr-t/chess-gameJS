export const calculateMovePawn = (currentPawn /*currentPlayer, board*/) => {
  const pawnForwardCurrentPawn = currentPawn.positionX + 1
  console.log(pawnForwardCurrentPawn)

  if (pawnForwardCurrentPawn.value && currentPawn) {
    console.log("tu as la possibilité davancer")
  }

  console.log(currentPawn.value)

  return currentPawn.value
}
