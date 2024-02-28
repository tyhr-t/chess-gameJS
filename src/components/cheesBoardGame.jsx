import { useContext } from "react"
import Cell from "./Cell"
import { chessContext } from "./GameContextProvider"

export const ChessBoard = () => {
  const { chessBoard, currentPawn, currentPlayer, hasGameStarted } =
    useContext(chessContext)

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => (
            <Cell key={`${x}-${y}`} x={x} y={y} />
          ))}
        </div>
      ))}
      {hasGameStarted ? (
        <div className="flex flex-col   ">
          <div className="text-2xl font-bold">
            {`Current player : ${currentPlayer}`}
          </div>
          <div className="text-2xl font-bold">
            {currentPawn
              ? `Current pawn : ${currentPawn?.color} ${currentPawn?.value}`
              : "No pawn selected"}
          </div>
        </div>
      ) : (
        <div className="text-2xl font-bold">{`Start the game`}</div>
      )}
    </div>
  )
}
