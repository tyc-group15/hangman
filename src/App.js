import { useEffect, useState } from "react";

import hangman from "./hangman.png";
import "./App.css";
import { AlphabetInput } from "./Components/AlphabetInput";
import { wordRandomiser } from "./Components/WordRandomiser";
import { HangmanCanvas } from "./Components/HangmanCanvas";
import { Word } from "./Components/Word";
import { WrongLetters } from "./Components/WrongLetters";

function App() {
  const [answer, setAnswer] = useState(String); // randomly chooses a word for the user to guess
  const [playable, setPlayable] = useState(Boolean);
  const [letter, setLetter] = useState(String); // stores the letter that the user has clicked on
  const [mistakes, setMistakes] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    seek();
    function seek() {
      if (answer.includes(letter)) {
        if (!correctLetters.includes(letter))
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
          setMistakes(wrongLetters.length);
        }
      }

      checkWin();
    }

    function checkWin() {
      if (mistakes === 10) setStatus("lose");

      setStatus("win");
      answer.split("").forEach((letter) => {
        if (!correctLetters.includes(letter)) {
          setStatus("");
        }
      });
    }
  }, [letter, wrongLetters, correctLetters]);

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
      {playable ? (
        <div id="gameContainer">
          <div id="container">
            <p>Lives: {10 - mistakes}</p>
          </div>
          <div id="container">
            <HangmanCanvas mistakes={mistakes} />
          </div>
          <div id="container">
            <Word answer={answer} correctLetters={correctLetters} />
          </div>
          <div id="container">
            <WrongLetters wrongLetters={wrongLetters} />
          </div>
          <div id="container">
            <AlphabetInput setLetter={setLetter} />
          </div>
          <button onClick={newGame}>New game</button>
        </div>
      ) : (
        <button onClick={newGame}>New game</button>
      )}
    </div>
  );
}

export default App;
