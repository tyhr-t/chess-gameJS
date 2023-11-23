import movementBehavior from "./movementBehavior"
export const calculateMovementPossible = (currentPawn, dep, board) => {
  const currentPawnToLowerCase = currentPawn.value.toLowerCase()
  const movements = movementBehavior[currentPawnToLowerCase](
    currentPawn,
    dep,
    board
  )

  return movements
}
