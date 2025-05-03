import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => {
        return (
          <p key={i} className="guess">
            {range(5).map((_, j) => {
              const slot = guesses[i] && guesses[i][j];

              return (
                <span key={j} className={`cell ${slot?.status}`}>
                  {slot?.letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
