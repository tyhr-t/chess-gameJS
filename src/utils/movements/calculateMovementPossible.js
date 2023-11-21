import movementBehavior from "./movementBehavior"
export const calculateMovementPossible = (
  currentPawn,
  currentPlayer,
  board
) => {
  console.log("before", currentPawn, currentPlayer, board)
  const currentPawnToLowerCase = currentPawn.value.toLowerCase()
  console.log("after", currentPawnToLowerCase)
  const movements = movementBehavior[currentPawnToLowerCase](
    currentPawn,
    currentPlayer,
    board
  )

  return movements
}
