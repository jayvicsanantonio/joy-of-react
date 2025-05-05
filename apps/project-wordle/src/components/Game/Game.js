import { useCallback, useState } from 'react';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [guessInput, setGuessInput] = useState('');
  const hasWon =
    guesses.length > 0 &&
    guesses[guesses.length - 1].map((a) => a.letter).join('') ===
      answer;

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const onRestart = useCallback(() => {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }, []);

  return (
    <div>
      <Guess guesses={guesses} />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();

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
          disabled={
            guesses.length === NUM_OF_GUESSES_ALLOWED || hasWon
          }
          value={guessInput}
          onChange={(event) =>
            setGuessInput(event.target.value.toUpperCase())
          }
          aria-label="Enter your 5-letter guess"
        />
      </form>
      {(guesses.length === NUM_OF_GUESSES_ALLOWED || hasWon) && (
        <Banner
          hasWon={hasWon}
          onRestart={onRestart}
          tries={guesses.length}
          answer={answer}
        />
      )}
    </div>
  );
}

export default Game;
