import { calculateMovePawn } from "./pawn/calculateMovePawn"
import { calculateMoveRook } from "./rook/calculatemoveRook"
import { calculateQueenMove } from "./queen/calculateQueenMove"
import { calculateKingMove } from "./king/calculateKingMove"
import { calculateMoveBishop } from "./bishop/calculateMoveBishop"
const movementBehavior = {
  pawn: calculateMovePawn,
  rook: calculateMoveRook,
  king: calculateKingMove,
  queen: calculateQueenMove,
  knight: (currentPawn) => console.log(currentPawn.value),
  bishop: calculateMoveBishop
}

export default movementBehavior
