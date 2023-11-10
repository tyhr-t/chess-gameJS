import { ChessBoard } from "./cheesBoardGame"
const App = () => {
  const test = 123

  return (
    <div>
      <div className="h-screen flex justify-center text-center">
        {ChessBoard}
      </div>
      <p>{test}</p>
    </div>
  )
}

export default App
