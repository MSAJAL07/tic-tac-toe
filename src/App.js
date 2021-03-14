import React, {useEffect, useState} from 'react';
import Square from "./components/square";
import checkWinner from "./util/checkWinner"
import   bestMove  from "./util/ai";
import checkDraw from "./util/checkDraw"
const clearState = ["", "", "", "", "", "", "", "", ""];

function App() {
    const [gameState, updateGameState] = useState(clearState)
    const [isXChance, updateIsXChance] = useState(false)
    const [isPlayingWithF, updateIsPlayingWithF] = useState(false)

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        updateIsXChance(!isXChance)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState)
        updateIsXChance(false);
    }
    const changeMode = () => {
     // updateGameState(clearState)
      clearGame()
      updateIsPlayingWithF(!isPlayingWithF)

    }
    useEffect(() => {

      let winner = checkWinner(gameState);
      if (winner) {
          
          alert(` ${winner} won the Game !`)
          clearGame();
        }else{
          let draw = checkDraw(gameState)
          if(draw){
            alert('Draw !')
            clearGame();
        }else if(!isPlayingWithF && !isXChance){
         // console.log(gameState)
            let moves = bestMove(gameState);
           // console.log(moves)
            // if(moves.length){
            //   const random = Math.floor(Math.random() * moves.length);
            //   console.log(random)
              onUserClicked(moves);
           // }

        }
        }
        
    }, [gameState, isPlayingWithF])

    
    return (
        <div className="app-header">
            <p className="heading-text">Tic Tac Toe </p>
            <div className = "row jc-center">
            <button disabled={isPlayingWithF} onClick={changeMode}>Friend</button>
            <button disabled={!isPlayingWithF}  onClick={changeMode}>Computer</button>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <Square className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <Square className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <Square className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <Square onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>Clear Game</button>
            <text style={{ marginBottom: 20, color: "grey", display: "inline" }}>&copy; Sajal Kumar Mishra</text>
        </div>
    );
}

export default App;
