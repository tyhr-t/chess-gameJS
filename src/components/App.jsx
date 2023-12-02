import { ChessBoard } from "./cheesBoardGame"
import Navbar from "./ui/Navbar"
import { GameContextProvider } from "./GameContextProvider"

const App = () => (
  <GameContextProvider>
    <div className="h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <ChessBoard />
        <div className="footer">Footer</div>
      </div>
    </div>
  </GameContextProvider>
)

export default App
