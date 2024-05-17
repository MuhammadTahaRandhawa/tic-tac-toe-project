
import { useState } from "react";

export default function Player({ intialPlayername, symbol , isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(intialPlayername);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }
    
    function handleNameChange(event){
        setPlayerName(event.target.value.toString());
    }


    return (
        <li className={isActive? 'active' : null}>
            <span className="player">
                {isEditing 
                    ?<input type="text" defaultValue={playerName} required onChange={handleNameChange}/> 
                    :<span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    );
}