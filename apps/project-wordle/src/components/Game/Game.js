import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        console.log(guessInput);
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
        value={guessInput}
        onChange={(event) =>
          setGuessInput(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default Game;
