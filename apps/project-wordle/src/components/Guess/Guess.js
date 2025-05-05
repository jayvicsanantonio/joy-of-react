import { memo } from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessRow from './GuessRow';

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <GuessRow key={i} slots={guesses[i]} />
      ))}
    </div>
  );
}

export default memo(Guess);
