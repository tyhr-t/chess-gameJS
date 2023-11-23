import { calculateMovePawn } from "./pawn/calculateMovePawn"
import { calculateMoveRook } from "./rook/calculatemoveRook"
import { calculateQueenMove } from "./queen/calculateQueenMove"
const movementBehavior = {
  pawn: calculateMovePawn,
  rook: calculateMoveRook,
  queen: calculateQueenMove,
  knight: (currentPawn) => console.log(currentPawn.value),
  bishop: (currentPawn) => console.log(currentPawn.value),

  king: (currentPawn) => console.log(currentPawn.value)
}

export default movementBehavior
