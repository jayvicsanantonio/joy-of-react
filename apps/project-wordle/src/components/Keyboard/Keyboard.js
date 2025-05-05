import { useMemo, memo } from 'react';

function getLatestLetterStatuses(guesses) {
  const letterMap = {};

  for (let i = guesses.length - 1; i >= 0; i--) {
    for (const { letter, status } of guesses[i]) {
      if (!letterMap[letter]) {
        letterMap[letter] = status;
      }
    }
  }
  return letterMap;
}

function Keyboard({ guesses }) {
  const letterStatuses = useMemo(
    () => getLatestLetterStatuses(guesses),
    [guesses]
  );

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
          {row.map((letter) => (
            <div
              className={`letter ${letterStatuses[letter] || ''}`}
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default memo(Keyboard);
