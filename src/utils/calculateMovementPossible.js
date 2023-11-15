import movmentBehavior from "./movementBehavior"
export const calculateMovementPossible = (
  currentPawn,
  currentPlayer,
  board
) => {
  const currentPawnToLowerCase = currentPawn.value.toLowerCase()
  const movements = movmentBehavior[currentPawnToLowerCase](
    currentPawn,
    currentPlayer,
    board
  )

  return movements
}
