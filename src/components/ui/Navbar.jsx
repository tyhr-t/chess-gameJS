import React, { useContext } from "react"
import { chessContext } from "../GameContextProvider"
import { board } from "../../utils/constant/constant"
const Navbar = () => {
  const chessGame = "chessGame"
  const { setHasGameStarted, hasGameStarted, setChessBoard } =
    useContext(chessContext)
  const startGame = () => setHasGameStarted(true)
  const resetGame = () => {
    console.log(board)
    setChessBoard(structuredClone(board))
    setHasGameStarted(false)
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <a className="flex-shrink-0 text-white">{chessGame}</a>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <button
                onClick={hasGameStarted ? resetGame : startGame}
                className="  text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-red-200">
                {hasGameStarted ? "reset" : "start"}
              </button>
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-400">
                Log
              </button>
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Timer :
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
