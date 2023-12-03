/* eslint-disable max-lines-per-function */

import { createContext, useState, useEffect } from "react"
import { board } from "../utils/constant/constant"
import { calculateMovementPossible } from "../utils/movements/calculateMovementPossible"
import { getPiecesCount } from "../utils/boardParsing/getPiecesCount"

export const chessContext = createContext()
export const GameContextProvider = ({ children }) => {
  const [chessBoard, setChessBoard] = useState(structuredClone(board))
  const [currentPawn, setCurrentPawn] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState("")
  const [possiblesMovements, setPossiblesMovements] = useState([])
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [piecesCount, setPiecesCount] = useState(null)

  useEffect(() => {
    setPiecesCount(getPiecesCount(chessBoard))
  }, [chessBoard])

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
    <chessContext.Provider
      value={{
        chessBoard,
        setChessBoard,
        currentPawn,
        setCurrentPawn,
        currentPlayer,
        setCurrentPlayer,
        possiblesMovements,
        setPossiblesMovements,
        setHasGameStarted,
        hasGameStarted,
        piecesCount
      }}>
      {children}
    </chessContext.Provider>
  )
}
