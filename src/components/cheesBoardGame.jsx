import React, { useState } from "react"
import { generateBoard } from "../utils/generateBoard"
// import { movePawn } from "../utils/movePawn"

export const ChessBoard = () => {
  const [chessBoard /* setChessBoard */] = useState(generateBoard())
  const [selectedPawnState, setSelectedPawnState] = useState(null)
  const currentPawnSelected = (e) => {
    const pawnValue = e.target?.getAttribute("data-square-value")

    if (pawnValue === "1") {
      setSelectedPawnState(pawnValue)
      console.log(typeof selectedPawnState, selectedPawnState)
    }

    // console.log(selectedPawnState)
  }

  /**
   State pour déterminer quel pion est sélectionné : [selectedPawnState, setSelectedPawnState] = useState(null)
   chessBoard[selectedPawnState.y][selectedPawnState.x] => La valeur présente dans une case.
   Pour sélectionner le pion, l'utilisateur doit cliquer sur la case où se trouve le pion.
   On sauvegarde la position du pion dans le state.
   Pour faire bouger le pion, l'utilisateur doit cliquer sur une case vide => ça modifie chessBoard en fonction de selectedPawnState.
   Une fois que le pion est bougé, le state doit repasser sur null.
   */
  // const clickedOnSquare = (x, y) => console.log(x, y)

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
                data-square-value={chessBoard[y][x]}
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
