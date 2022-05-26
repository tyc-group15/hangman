import { useEffect, useState } from "react";

import hangman from "./hangman.png";
import "./App.css";
import { AlphabetInput } from "./Components/AlphabetInput";
import { wordRandomiser } from './Components/WordRandomiser';

function App() {
  const [answer, setAnswer] = useState(String); // randomly chooses a word for the user to guess
  const [playable, setPlayable] = useState(Boolean);
  const [letter, setLetter] = useState(String); // stores the letter that the user has clicked on
  const [mistakes, setMistakes] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    console.log("in app, this is the letter:", letter);
    console.log(answer);
  });

  const newGame = () => {
    setPlayable(true);
    setAnswer(wordRandomiser()); // randomly chooses a word for the user to guess
    // Empty consts
    setCorrectLetters([]);
    setWrongLetters([]);
    setLetter("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={hangman} className="App-logo" alt="logo" />
        <h1>team 15's HANGMAN</h1>
      </header>
      <div id="gameContainer">
        <div id="container">
          <p>Lives left</p>
        </div>
        <div id="container">
          <p>hangman drawing, where the animation is supposed to be</p>
        </div>
        <div id="container">
          <p>
            this is where we have what the user has correctly guessed so far
          </p>
        </div>
        <div id="container">
          <p>this is where we have the incorrectly guessed letters</p>
        </div>
        <div id="container" style={{ backgroundColor: "transparent" }}>
          <AlphabetInput setLetter={setLetter} />
        </div>
        <button onClick={newGame}>New game</button>
      </div>
    </div>
  );
}

export default App;
