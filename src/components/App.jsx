import { ChessBoard } from "./cheesBoardGame"

const App = () => (
  <div className="h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
    <div className="h-screen flex justify-center text-center">
      <ChessBoard />
    </div>
  </div>
)

export default App
