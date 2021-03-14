const getAvailableMoves= (gameState) => {
    const moves = [];
    gameState.forEach((value, index) => {
        if (!value) moves.push(index);
    });
    return moves;
}

export default getAvailableMoves;