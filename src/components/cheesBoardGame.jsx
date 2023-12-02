import { useContext } from "react"
import Cell from "./Cell"
import { chessContext } from "./GameContextProvider"

export const ChessBoard = () => {
  const { chessBoard, currentPawn, currentPlayer } = useContext(chessContext)

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => (
            <Cell key={`${x}-${y}`} x={x} y={y} />
          ))}
        </div>
      ))}
      <p>le joueur {currentPlayer} doit jouer allez joue !</p>
      <p>le pion selectionner est : {JSON.stringify(currentPawn)}</p>
    </div>
  )
}
