import { memo } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function Banner({ hasWon, onRestart, guesses, answer }) {
  const tries = guesses.length;

  if (!(tries === NUM_OF_GUESSES_ALLOWED || hasWon)) {
    return;
  }

  if (hasWon) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {tries === 1 ? ' 1 guess' : ` ${tries} guesses`}
          </strong>
          .
        </p>
        <button
          className="reset-button"
          onClick={onRestart}
          aria-label="Restart Game"
        >
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button
        className="reset-button"
        onClick={onRestart}
        aria-label="Restart Game"
      >
        Restart Game
      </button>
    </div>
  );
}

export default memo(Banner);
