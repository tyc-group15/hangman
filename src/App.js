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
      </div>
    </div>
  );
}

export default App;
