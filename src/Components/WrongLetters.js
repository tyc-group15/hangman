export const WrongLetters = ({ wrongLetters }) => (
  <>
    <p>Wrong Letters:</p>
    {wrongLetters.map((letter, i) => (
      <p key={i}> &nbsp;{letter}&nbsp; </p>
    ))}
  </>
);
