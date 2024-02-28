import { getPieceColor } from "./getPieceColor"
export const handleSelection = (rawPawnInfo, currentPlayer, setCurrentPawn) => {
  const { value } = rawPawnInfo
  const colorOfPiece = getPieceColor(value)

  if (value && currentPlayer === colorOfPiece) {
    setCurrentPawn({ ...rawPawnInfo, color: colorOfPiece })
  }
}
