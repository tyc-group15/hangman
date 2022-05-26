export const Popup = ({ answer, status, newGame }) => {
  let finalMessage = "";

  if (status === "win") {
    finalMessage = "Congratulations! You won!";
  } else if (status === "lose") {
    finalMessage = "Oops.. You lost..";
  }

  return (
    <div id="popup-container" style={{ display: "flex", justifyContent: "center" }}>
      {status === "" ? null : (
        <div id="popup">
          <h2 style={{ color: "white" }}>{finalMessage}</h2>
          <p>The word was {answer}.</p>
          <button onClick={newGame}>New game</button>
        </div>
      )}
    </div>
  );
};
