import React, { useState, useEffect } from 'react';
import './App.css';
import Figure from './components/figure-component/Figure';
import Header from './components/header-component/Header';
import WrongLetters from './components/wrong-letters-component/WrongLetters';
import GuessWord from './components/guess-word-component/GuessWord'
import Notification from './components/notification-component/Notification'
import PopupMessage from './components/popup-message-component/PopupMessage';
import {showNotification as show} from './helpers/helpers';

const foodCategory = ['candy', 'icecream', 'chocolate'];
let selectedWord = foodCategory[Math.floor(Math.random() * foodCategory.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification,setShowNotification] = useState(false);

  useEffect(()=>{
    const handleKeydown=event =>{
      const { key, keyCode}=event;

    if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters=>[...currentLetters,letter]);
          }
          else {
           show(setShowNotification);
          }
        }else{
          if(!wrongLetters.includes(letter)){
            setWrongLetters(wrongLetters=>[...wrongLetters, letter]);
          }else{
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return()=>window.removeEventListener('keydown', handleKeydown);
  },[correctLetters,wrongLetters,playable]);

  function playAgain(){
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    
    const random=Math.floor(Math.random()*foodCategory.length);
    selectedWord=foodCategory[random];
  }

return (
  <>
    <Header />
    <div id="Game" className='game'>
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <GuessWord selectedWord={selectedWord} correctLetters={correctLetters} /> 
    </div>
   
    <Notification showNotification={showNotification}/>
    <PopupMessage correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
  </>
);
}

export default App;
