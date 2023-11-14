import React, { useState } from "react"
import { generateBoard } from "../utils/generateBoard"
import Cell from "./Cell"

export const ChessBoard = () => {
  const [chessBoard, setChessBoard] = useState(generateBoard())
  const [selectedPawnState, setSelectedPawnState] = useState(null)

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => (
            <Cell
              setChessBoard={setChessBoard}
              key={`${x}-${y}`}
              setSelectedPawnState={setSelectedPawnState}
              chessBoard={chessBoard}
              x={x}
              y={y}
            />
          ))}
        </div>
      ))}
      <p>le pion selectionner est : {selectedPawnState}</p>
    </div>
  )
}
