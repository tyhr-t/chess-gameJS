import { getPiecesOnBoard } from "./getPiecesOnBoard"
export const getPiecesCount = (board) => {
  const piecesOnBoard = getPiecesOnBoard(board)
  const piecesCount = {
    pawn: 0,
    rook: 0,
    knight: 0,
    bishop: 0,
    queen: 0,
    king: 0,
    PAWN: 0,
    ROOK: 0,
    KNIGHT: 0,
    BISHOP: 0,
    QUEEN: 0,
    KING: 0
  }

  for (const piece of piecesOnBoard) {
    piecesCount[piece] += 1
  }

  return piecesCount
}
