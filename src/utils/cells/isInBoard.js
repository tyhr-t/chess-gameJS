export const isInBoard = (position) =>
  position.positionY > 7 &&
  position.positionY < 0 &&
  position.positionX > 7 &&
  position.positionX < 0
