export const getPiecesOnBoard = (originalBoard) => {
  const piecesOnBoard = []
  originalBoard.forEach((line) => {
    line.forEach((piece) => {
      if (piece) {
        piecesOnBoard.push(piece)
      }
    })
  })

  return piecesOnBoard
}
