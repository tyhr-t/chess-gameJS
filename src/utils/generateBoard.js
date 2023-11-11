export const generateBoard = () => {
  const lines = Array.from(Array(8).keys())
  const squares = Array.from(Array(8).keys())
  // return lines.map((line) =>
  //   squares.map((squareNumber) => Number(`${line}${squareNumber}`))
  // )
  const board = lines.map(() => squares.map(() => Number(`0`)))
  board[0][0] = "1"

  return board
}
