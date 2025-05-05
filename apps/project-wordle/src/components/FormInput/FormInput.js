import { useCallback, useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function FormInput({ answer, guesses, setGuesses, hasWon }) {
  const [guessInput, setGuessInput] = useState('');
  const handleSubmit = useCallback(() => {
    if (
      guessInput.length !== 5 ||
      guesses.length === NUM_OF_GUESSES_ALLOWED ||
      hasWon
    ) {
      return;
    }

    const newGuesses = [...guesses];
    newGuesses[guesses.length] = checkGuess(guessInput, answer);

    setGuesses(newGuesses);
    setGuessInput('');
  }, [guesses, setGuesses, guessInput, answer, hasWon]);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      aria-label="Word guess input form"
      autoComplete="off"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        autoFocus
        required
        disabled={guesses.length === NUM_OF_GUESSES_ALLOWED || hasWon}
        value={guessInput}
        onChange={(event) =>
          setGuessInput(event.target.value.toUpperCase())
        }
        aria-label="Enter your 5-letter guess"
      />
    </form>
  );
}

export default FormInput;
