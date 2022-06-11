import React from "react";
import "./Figure.css";

const Figure = ({ wrongLetters }) => {
    const errors = wrongLetters.length;
    return (
        <svg width={250} height={350} className="figure">
            <line x1="10" y1="10" x2="10" y2="200" />       //rod
            <line x1="0" y1="200" x2="50" y2="200" />       //rod
            <line x1="10" y1="10" x2="70" y2="10" />        //rod
            <line x1="70" y1="10" x2="70" y2="30" />        //rod

            {errors > 0 && <circle cx="70" cy="50" r="20" fill="none" />}   //head

            {errors > 1 && <line x1="70" y1="70" x2="70" y2="130" />}       //body

            {errors > 2 && <line x1="70" y1="90" x2="40" y2="60" />}        //left arm
            {errors > 3 && <line x1="70" y1="90" x2="100" y2="60" />}       //right arm

            {errors > 4 && <line x1="70" y1="130" x2="40" y2="170" />}      //left leg
            {errors > 5 && <line x1="70" y1="130" x2="100" y2="170" />}     //right leg
        </svg>
    )
}

export default Figure