import skins from "../_PIECES/skins"
import { getPieceColor } from "../utils/_players/getPieceColor"
import { piecesColors } from "../utils/constant/constant"
const Piece = ({ typeOfPiece, size = "64" }) => {
  const color = getPieceColor(typeOfPiece)
  const piece = typeOfPiece.toLowerCase()

  return (
    <svg
      className="inline"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512">
      <path fill={piecesColors[color]} d={skins[piece]} />
    </svg>
  )
}

export default Piece
