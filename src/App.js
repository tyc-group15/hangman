import { useEffect, useState } from "react";

import { AlphabetInput } from "./Components/AlphabetInput";
import { wordRandomiser } from "./Components/WordRandomiser";
import { HangmanCanvas } from "./Components/HangmanCanvas";
import { Word } from "./Components/Word";
import { WrongLetters } from "./Components/WrongLetters";
import { Popup } from "./Components/Popup";

import hangman from "./hangman.png";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(wordRandomiser()); // randomly chooses a word for the user to guess
  const [letter, setLetter] = useState(String); // stores the letter that the user has clicked on
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
        }
      }

      checkWin();
    }

    function checkWin() {
      if (wrongLetters.length === 10) {
        setStatus("lose");
        return;
      }

      answer.split("").forEach((letter) => {
        setStatus("win");
        if (letter === " ") return;
        else if (!correctLetters.includes(letter)) {
          setStatus("");
        }
      });
    }
  }, [letter, wrongLetters, correctLetters, answer]);

  const newGame = () => {
    setAnswer(wordRandomiser()); // randomly chooses a word for the user to guess
    // Empty consts
    setCorrectLetters([]);
    setWrongLetters([]);
    setLetter("");
    setStatus("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={hangman} className="App-logo" alt="logo" />
        <h1>team 15's HANGMAN</h1>
      </header>
        <div id="gameContainer">
          <div id="container">
            <p>Lives: {10 - wrongLetters.length}</p>
          </div>
          <div id="container">
            <HangmanCanvas mistakes={wrongLetters.length} />
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
      {status === "lose" || status === "win" ? (
        <Popup answer={answer} status={status} newGame={newGame} />
      ) : null}
    </div>
  );
}

export default App;
