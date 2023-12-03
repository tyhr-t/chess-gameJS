import { MAXIMAL_X_VALUE_ON_BOARD, MINIMAL_X_VALUE_ON_BOARD,MINIMAL_Y_VALUE_ON_BOARD,MAXIMAL_Y_VALUE_ON_BOARD} from "../constant/constant"

export const isInBoard = (position) =>
  position.positionY <= MAXIMAL_Y_VALUE_ON_BOARD &&
  position.positionY >= MINIMAL_Y_VALUE_ON_BOARD &&
  position.positionX <= MAXIMAL_X_VALUE_ON_BOARD &&
  position.positionX >= MINIMAL_X_VALUE_ON_BOARD


  