import { calculatePawnForward } from "./calculatePawnForward"
import { calculatePawnDoubleJump } from "./calculatePawnDoubleJump"
import { calculatePawnDiagonalLeft } from "./calculatePawnDiagonalLeft"
import { calculatePawnDiagonalRight } from "./calculatePawnDiagonalRight"

export const calculateMovePawn = (currentPawn, currentPlayer, board) => {
  const moves = []
  const direction = currentPlayer === "white" ? -1 : 1
  const { positionX, positionY } = currentPawn

  /* Moves va devoir être modifié dans ce fichier
  
  - Modifier chaque fonction pour qu'elles prennent "board" et "direction" en paramètre
  - Les fonctions doivent dorénavant retourner des positions
  */

  const checkIfPawnInDiagonalRight = Boolean(
    board[positionY + 1 * Number(direction)][positionX + 1]
  )
  calculatePawnDiagonalRight(currentPawn, moves, checkIfPawnInDiagonalRight)

  const checkIfPawnInDiagonalLeft = Boolean(
    board[positionY + 1 * Number(direction)][positionX - 1]
  )
  calculatePawnDiagonalLeft(currentPawn, moves, checkIfPawnInDiagonalLeft)

  const checkIfPawnForward = Boolean(
    board[positionY + 1 * Number(direction)][positionX]
  )
  calculatePawnForward(currentPawn, checkIfPawnForward, moves)
  const checkIfPawnForwardTwoCaseAfter = Boolean(
    board[positionY + 2 * Number(direction)][positionX]
  )
  calculatePawnDoubleJump(
    currentPawn,
    { checkIfPawnForwardTwoCaseAfter, checkIfPawnForward },
    moves
  )

  return moves
}
