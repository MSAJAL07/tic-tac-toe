const checkDraw = (gameState) => {
    let flag = true
    gameState.forEach(element => {
        if(element === "") flag = false
    });
    return flag;
}

export default checkDraw;