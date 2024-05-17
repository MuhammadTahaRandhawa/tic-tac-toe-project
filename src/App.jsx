import { useState } from "react";
import Player from "./player";
import GameBoard from "./GameBoard";
import Log from "./Log";
function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {

    setActivePlayerSymbol((prevState) => prevState === 'X' ? 'O' : 'X');

    setGameTurns((prevGameTurns) => {
      let Player = 'X';
      if (gameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        Player = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, column: colIndex }, player: Player }, ...prevGameTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialPlayername={'Player 1'} symbol={'X'} isActive={activePlayerSymbol === 'X'} />
          <Player intialPlayername={'Player 2'} symbol={'O'} isActive={activePlayerSymbol === 'O'} />
        </ol>
      </div>
      <GameBoard handlePlayerTurns={handleSelectSquare} gameTurns={gameTurns}/>
      <Log gameTurns={gameTurns}></Log>
    </main>
  )
}

export default App
