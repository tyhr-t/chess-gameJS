export const checkPossibleToMoveHere = (x, y, possibleMovement) => {
  let canMoveHere = false

  for (const value of possibleMovement) {
    if (x === value.positionX && y === value.positionY) {
      canMoveHere = true
    }
  }

  return canMoveHere
}
