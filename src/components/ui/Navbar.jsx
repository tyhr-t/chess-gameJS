import React, { useContext, useEffect } from "react"
import { chessContext } from "../GameContextProvider"
import { board } from "../../utils/constant/constant"
import PieceCounter from "../PieceCounter"

const Navbar = () => {
  const chessGame = "chessGame"
  const { setHasGameStarted, hasGameStarted, setChessBoard, setCurrentPlayer } =
    useContext(chessContext)
  const startGame = () => setHasGameStarted(true)
  useEffect(() => {
    if (hasGameStarted) {
      setCurrentPlayer("white")
    }
  }, [hasGameStarted])

  const resetGame = () => {
    setChessBoard(structuredClone(board))
    setHasGameStarted(false)
    setCurrentPlayer("")
  }

  return (
    <nav className="bg-gray-800 gap-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 gap-4">
          <a className="flex-shrink-0 text-white">{chessGame}</a>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <button
                onClick={hasGameStarted ? resetGame : startGame}
                className=" cursor-pointer transition-all bg-yellow-500 text-white px-6 py-2 rounded-lg
                border-yellow-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[0px]">
                {hasGameStarted ? "reset" : "start"}
              </button>
            </div>
          </div>
          <PieceCounter />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
