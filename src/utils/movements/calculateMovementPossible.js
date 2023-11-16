import movementBehavior from "./movementBehavior"
export const calculateMovementPossible = (
  currentPawn,
  currentPlayer,
  board
) => {
  const currentPawnToLowerCase = currentPawn.value.toLowerCase()
  const movements = movementBehavior[currentPawnToLowerCase](
    currentPawn,
    currentPlayer,
    board
  )

  return movements
}
