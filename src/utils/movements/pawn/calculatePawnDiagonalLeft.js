import { getPieceColor } from "../../_players/getPieceColor"
import { isInBoard } from "../../cells/isInBoard"
export const calculatePawnDiagonalLeft = (currentPawn, moves, board) => {
  const positionX = currentPawn.positionX - 1
  const positionY = currentPawn.positionY + 1 * Number(currentPawn.direction)
  const possibleMovementPosition = {
    positionX,
    positionY
  }

  if (isInBoard(possibleMovementPosition)) {
    const pieceColor = getPieceColor(board[positionY][positionX])

    if (pieceColor !== currentPawn.color && pieceColor !== null) {
      moves.push(possibleMovementPosition)
    }
  }
}
