export const getPieceColor = (cellValue) => {
  if (cellValue !== null) {
    if (cellValue === cellValue.toLowerCase()) {
      return "black"
    }

    return "white"
  }

  return null
}
