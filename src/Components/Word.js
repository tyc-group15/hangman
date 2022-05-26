export const Word = ({ answer, correctLetters }) => {
  return (
    <>
      {answer.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? <p>&nbsp;{letter}&nbsp;</p>: <p>&nbsp; ____ &nbsp;</p>}
          </span>
        );
      })}
    </>
  );
};
