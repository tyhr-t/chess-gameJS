import { calculateMovePawn } from "./pawn/calculateMovePawn"
const movementBehavior = {
  pawn: calculateMovePawn,
  rook: (currentPawn) => console.log(currentPawn.value),
  knight: (currentPawn) => console.log(currentPawn.value),
  bishop: (currentPawn) => console.log(currentPawn.value),
  queen: (currentPawn) => console.log(currentPawn.value),
  king: (currentPawn) => console.log(currentPawn.value)
}

export default movementBehavior
