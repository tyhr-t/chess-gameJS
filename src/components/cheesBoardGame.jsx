import { useState, useEffect } from "react"
import Cell from "./Cell"
import { board } from "../utils/constant"
import { calculateMovementPossible } from "../utils/movements/calculateMovementPossible"

export const ChessBoard = () => {
  const [chessBoard, setChessBoard] = useState([...board])
  const [currentPawn, setCurrentPawn] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState("white")
  const [possiblesMovements, setPossiblesMovements] = useState([])

  useEffect(() => {
    if (currentPawn !== null) {
      console.log("selectedPawnState has changed : ", currentPawn)
      // On peut savoir le type de pion
      // En fonction du type de ce pion, on va calculer les mouvements possibles
      const mouvements = calculateMovementPossible(currentPawn)
      setPossiblesMovements(mouvements)
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
      <p>le pion selectionner est : {JSON.stringify(currentPawn)}</p>
    </div>
  )
}
