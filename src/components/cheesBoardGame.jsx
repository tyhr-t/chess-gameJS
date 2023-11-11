import React, { useState } from "react"
import { generateBoard } from "../utils/generateBoard"
import { defaultConfigChessBoard } from "../utils/defaultConfigChessBoard"

export const ChessBoard = () => {
  const [config] = useState(defaultConfigChessBoard)
  const chessBoard = generateBoard()

  return (
    <div>
      {chessBoard.map((line, lineIndex) => (
        <div className="flex border" key={lineIndex}>
          {line.map((square, elementOfLineIndex) => {
            const lineIsPair = lineIndex % 2 === 0
            const offset = lineIsPair ? 0 : 1
            const isPair = (elementOfLineIndex + offset) % 2 === 0

            return (
              <div
                className={`w-20 h-20 bg-${isPair ? "" : ""}`}
                style={{ backgroundColor: isPair ? "#616198" : "" }}
                key={`${square}-${lineIndex}`}>
                {config[square]}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
