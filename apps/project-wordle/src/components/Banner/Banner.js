import React from 'react';

function Banner({ hasWon, onRestart, tries }) {
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
        <button className="reset-button" onClick={onRestart}>
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
      <button className="reset-button" onClick={onRestart}>
        Restart Button
      </button>
    </div>
  );
}

export default Banner;
