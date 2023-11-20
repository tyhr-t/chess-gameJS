export const getPieceColor = (cellValue) => {
  if (cellValue === cellValue.toLowerCase()) {
    return "black"
  }

  return "white"
}
