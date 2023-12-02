import { getPiecesCount } from "../boardParsing/getPiecesCount"

export const board = [
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN", "PAWN"],
  ["ROOK", "KNIGHT", "BISHOP", "QUEEN", "KING", "BISHOP", "KNIGHT", "ROOK"]
]

export const boardPiecesCount = getPiecesCount(board)

export const directionsIterators = {
  upLeft: { x: -1, y: -1 },
  up: { x: 0, y: -1 },
  upRight: { x: 1, y: -1 },
  right: { x: 1, y: 0 },
  downRight: { x: 1, y: 1 },
  down: { x: 0, y: 1 },
  downLeft: { x: -1, y: 1 },
  left: { x: -1, y: 0 }
}

export const MAXIMAL_X_VALUE_ON_BOARD = 0
export const MAXIMAL_Y_VALUE_ON_BOARD = 7

export const piecesColors = {
  white: "#B37B3C",
  black: "#1F0900"
}

export const tileColors = {
  white: "bg-[#FFFBDE]",
  black: "bg-[#FFD4B9]"
}
