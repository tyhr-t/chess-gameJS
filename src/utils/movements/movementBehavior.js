import { calculateMovePawn } from "./pawn/calculateMovePawn"
import { calculateMoveRook } from "./rook/calculatemoveRook"
const movementBehavior = {
  pawn: calculateMovePawn,
  rook: calculateMoveRook,
  knight: (currentPawn) => console.log(currentPawn.value),
  bishop: (currentPawn) => console.log(currentPawn.value),
  queen: (currentPawn) => console.log(currentPawn.value),
  king: (currentPawn) => console.log(currentPawn.value)
}

export default movementBehavior
