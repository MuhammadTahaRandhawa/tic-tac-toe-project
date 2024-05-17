export default function Log({ gameTurns }) {
    
    return (
        <ol>
        {   
        gameTurns.map((element) => <li><span>{element.player}</span>
        <span>{element.square.row}</span>
        <span>{element.square.column}</span></li>)
        }
        </ol>
    );
}