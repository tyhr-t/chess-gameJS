import { ChessBoard } from "./cheesBoardGame"

const App = () => (
  <div className="h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="taskbar">Taskbar</div>
      <ChessBoard />
      <div className="footer">Footer</div>
    </div>
  </div>
)

export default App
