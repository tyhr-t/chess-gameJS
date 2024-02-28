import Piece from "./Piece"
import { chessContext } from "./GameContextProvider"
import { useContext } from "react"

const PieceCounter = () => {
  const { piecesCount } = useContext(chessContext)

  return (
    piecesCount && (
      <div className="flex text-white gap-4 ">
        {Object.keys(piecesCount).map((piece) => (
          <>
            <Piece size={"30"} key={piece} typeOfPiece={piece} />
            {piecesCount[piece]}
          </>
        ))}
      </div>
    )
  )
}
export default PieceCounter
