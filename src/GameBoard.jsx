
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard({ handlePlayerTurns, gameTurns }) {

    let gameBoard = initialGameBoard;

    if (gameTurns.length > 0) {
        gameTurns.forEach(element => {
            const { square, player } = element;
            const { row, column } = square;

            gameBoard[row][column] = player;
        });
    }


    function handleChange(rowIndex, colIndex) {

        handlePlayerTurns(rowIndex, colIndex);
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return <li>
                    <ol key={rowIndex}>{
                        row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => handleChange(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>

            })}
        </ol>
    );
}