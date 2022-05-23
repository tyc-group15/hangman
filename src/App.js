import hangman from "./hangman.png";
import "./App.css";

function App() {
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
          <p>this is where we have what the user has correctly guessed so far</p>
        </div>
        <div id="container">
          <p>this is where we have the incorrectly guessed letters</p>
        </div>
        <div id="container">
          <p>buttons for the alphabets</p>
        </div>
      </div>
    </div>
  );
}

export default App;
