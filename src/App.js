import { useEffect, useState } from "react";

import hangman from "./hangman.png";
import "./App.css";
import { AlphabetInput } from "./Components/AlphabetInput";
import { wordRandomiser } from "./Components/WordRandomiser";
import { HangmanCanvas } from "./Components/HangmanCanvas";

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
            <p>Lives: {10-mistakes}</p>
          </div>
          <div id="container">
          </div>
          <div id="container">
            {answer.split("").map((letter, i) => 
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? <p>&nbsp;{letter}&nbsp;</p>: <p>&nbsp; ____ &nbsp;</p>}
          </span>
            )}
          </div>
          <div id="container">
            <p>Wrong Letters:</p>
            {wrongLetters.map((letter) => (
              <p> &nbsp;{letter}&nbsp; </p>
            ))}
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
