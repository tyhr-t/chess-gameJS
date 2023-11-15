const movmentBehavior = {
  pawn: (currentPawn, currentPlayer, board) => {
    const arrayOfMovementsPossible = []
    console.log(currentPawn.value)

    /* 4 mouvements possibles pour le pion */

    // 1. Avancer d'une case -> Si le pion n'est pas bloqué. Il ne peut pas manger
    // 2. Avancer de deux cases -> Si le pion est sur sa ligne de départ et qu'il n'est pas bloqué, il ne peut pas manger
    // 3. Manger en diagonale a gauche -> Si le pion est bloqué par l'adversaire, il peut manger
    // 4. Manger en diagonale a droite -> Si le pion est bloqué par l'adversaire, il peut manger

    /* La fonction doit retourner un tableau qui comprend jusqu'à 4 positions */
    /* Si il arrive sur la dernière ligne de l'adversaire, il peut se transformer en une pièce décédée glorieusement au combat */

    return currentPawn.value
  },
  rook: (currentPawn) => console.log(currentPawn.value),
  knight: (currentPawn) => console.log(currentPawn.value),
  bishop: (currentPawn) => console.log(currentPawn.value),
  queen: (currentPawn) => console.log(currentPawn.value),
  king: (currentPawn) => console.log(currentPawn.value)
}

export default movmentBehavior
