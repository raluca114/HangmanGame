import React from "react";
import "./GuessWord.css";

const GuessWord=({selectedWord, correctLetters})=>{
    return(
    <div className="guessWord">
    {selectedWord.split('').map((letter, index)=>{
        return(<span className="letter" key={index}>
        {correctLetters.includes(letter)? letter:''}
        </span>)})
}
    </div>
    )
}

export default GuessWord