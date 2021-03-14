import getAvailableMoves from "./getAvailableMoves";
import checkWinner from "./checkWinner"
import checkDraw from "./checkDraw"

const bestMove = (gameState) => {
    let bestScore = -Infinity;
    let move;
    getAvailableMoves(gameState).forEach((element, index) => {
        gameState[element] = '0';
        let score = minimax(gameState, 0, false);
       // console.log(score,element)
        gameState[element] = "";
        if (score > bestScore) {
            bestScore = score;
            move = element;
          }   
    });
    return move;

  }
export default bestMove;

  function minimax(gameState, depth, isMaximizing) {
    let result = checkWinner(gameState);
    //console.log(result)
    if(result !== null){
        if (result === '0') return 100;
        else if(result === 'x') return -100;
    }else{
        let draw = checkDraw(gameState)
        if(draw){
            return 0;
      }
    } 
    if (isMaximizing) {
      let bestScore = -Infinity;

      getAvailableMoves(gameState).forEach((element, index) => {
        gameState[element] = '0';
        let score = minimax(gameState, depth+1, false);
        gameState[element] = "";
        bestScore = Math.max(score, bestScore);
    });
    return bestScore  
    } else {
      let bestScore = Infinity;
      getAvailableMoves(gameState).forEach((element, index) => {
        gameState[element] = 'x';
        let score = minimax(gameState, depth+1, true);
        gameState[element] = "";
        bestScore = Math.min(score, bestScore);
    });
    return bestScore
    }
  }