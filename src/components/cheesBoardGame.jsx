import React, { useState } from "react"
import { generateBoard } from "../utils/generateBoard"
import { movePawn } from "../utils/movePawn"

export const ChessBoard = () => {
  const [chessBoard /* setChessBoard */] = useState(generateBoard())
  const [selectedPawnState, setSelectedPawnState] = useState(null)
  const [currentAxis, setCurrentAxis] = useState(null)
  const [currentAxisY, setCurrentAxisY] = useState(null)
  /**
   State pour déterminer quel pion est sélectionné : [selectedPawnState, setSelectedPawnState] = useState(null)
   chessBoard[selectedPawnState.y][selectedPawnState.x] => La valeur présente dans une case.
   Pour sélectionner le pion, l'utilisateur doit cliquer sur la case où se trouve le pion.
   On sauvegarde la position du pion dans le state.
   Pour faire bouger le pion, l'utilisateur doit cliquer sur une case vide => ça modifie chessBoard en fonction de selectedPawnState.
   Une fois que le pion est bougé, le state doit repasser sur null.
   */
  // const clickedOnSquare = (x, y) => console.log(x, y)
  const currentPawnSelected = (e) => {
    const pawnId = e.target.getAttribute("data-pawn-id")
    setSelectedPawnState(pawnId)

    const x = selectedPawnState?.split("-")[0]
    setCurrentAxis(x)
    const y = selectedPawnState?.split("-")[1]
    setCurrentAxisY(y)
    console.log(movePawn(currentAxis, currentAxisY))
  }

  return (
    <div>
      {chessBoard.map((line, y) => (
        <div className="flex border" key={y}>
          {line.map((square, x) => {
            const lineIsPair = y % 2 === 0
            const offset = lineIsPair ? 0 : 1
            const isBlack = (x + offset) % 2 === 0

            return (
              <div
                data-pawn-id={`${x}-${y}`}
                onClick={currentPawnSelected}
                className={`w-20 h-20 ${isBlack ? "bg-blue-300" : ""}`}
                key={`${x}-${y}`}>
                {`${chessBoard[y][x]} | (${x} - ${y})`}
              </div>
            )
          })}
        </div>
      ))}
      <p>le pion selectionner est : {selectedPawnState}</p>
    </div>
  )
}
