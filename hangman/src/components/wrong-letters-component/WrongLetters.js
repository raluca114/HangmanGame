import React from "react";
import "./WrongLetters.css";

const WrongLetters=({wrongLetters })=>{
    return(

    <div className="wrongLetters">
        <div>
            {wrongLetters.length>0&&<p>Wrong</p>}
            {wrongLetters
            .map((letter, index)=><span key={index}>{letter}</span>)
            .reduce((prev,curr)=>prev==null?[curr]:[prev,', ', curr ],null)} 
        </div>
    </div>
    )
}

export default WrongLetters