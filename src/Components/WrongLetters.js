export const WrongLetters = ({ wrongLetters }) => (
  <>
    <p>Wrong Letters:</p>
    {wrongLetters.map((letter) => (
      <p> &nbsp;{letter}&nbsp; </p>
    ))}
  </>
);
