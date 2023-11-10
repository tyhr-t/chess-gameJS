import React from "react"

export const ChessBoard = () => {
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const chessBoard = []

  for (let i = 0; i < verticalAxis.length; i += 1) {
    for (let j = 0; j < horizontalAxis.length; j += 1) {
      chessBoard.push(`${verticalAxis[i]}${horizontalAxis[j]}`)
    }
  }

  return (
    <div className="flex flex-wrap w-64 h-64">
      {chessBoard.map((item, id) =>
        id % 2 === 0 ? (
          <div key={id} className="w-8 h-8 bg-white">
            {item}
          </div>
        ) : (
          <div key={id} className="w-8 h-8 bg-black">
            {item}
          </div>
        )
      )}
    </div>
  )
}
