import { useState, useEffect } from "react"
import { generateBoard } from "../utils/generateBoard"
import Cell from "./Cell"

export const ChessBoard = () => {
  const [chessBoard, setChessBoard] = useState(generateBoard())
  const [currentPawn, setCurrentPawn] = useState(null)

  useEffect(() => {
    console.log("selectedPawnState has changed : ", currentPawn)
  }, [currentPawn])

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => (
            <Cell
              setChessBoard={setChessBoard}
              key={`${x}-${y}`}
              setCurrentPawn={setCurrentPawn}
              chessBoard={chessBoard}
              x={x}
              y={y}
              currentPawn={currentPawn}
            />
          ))}
        </div>
      ))}
      <p>le pion selectionner est : {currentPawn?.value}</p>
    </div>
  )
}
