import { useState } from 'react';
import Guess from '../Guess/Guess';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [guessInput, setGuessInput] = useState('');

  return (
    <div>
      <Guess guesses={guesses} />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
            return;
          }

          const newGuesses = [...guesses];

          newGuesses[guesses.length] = checkGuess(guessInput, answer);

          setGuesses(newGuesses);
          setGuessInput('');
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          name="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          disabled={guesses.length === NUM_OF_GUESSES_ALLOWED}
          value={guessInput}
          onChange={(event) =>
            setGuessInput(event.target.value.toUpperCase())
          }
        />
      </form>
    </div>
  );
}

export default Game;
