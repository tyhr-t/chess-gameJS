import { useState, useEffect } from "react"
import Cell from "./Cell"
import { board } from "../utils/constant/constant"
import { calculateMovementPossible } from "../utils/movements/calculateMovementPossible"

export const ChessBoard = () => {
  const [chessBoard, setChessBoard] = useState([...board])
  const [currentPawn, setCurrentPawn] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState("white")
  const [possiblesMovements, setPossiblesMovements] = useState([])

  useEffect(() => {
    if (currentPawn !== null) {
      const mouvements = calculateMovementPossible(
        currentPawn,
        currentPlayer,
        chessBoard
      )
      setPossiblesMovements(mouvements)
    } else {
      setPossiblesMovements([])
    }
  }, [currentPawn])

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => (
            <Cell
              possiblesMovements={possiblesMovements}
              setPossiblesMovements={setPossiblesMovements}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
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
      <p>le joueur {currentPlayer} doit jouer allez joue !</p>
      <p>le pion selectionner est : {JSON.stringify(currentPawn)}</p>
    </div>
  )
}
