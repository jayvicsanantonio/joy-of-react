import { memo } from 'react';

function GuessRow({ slots = [] }) {
  return (
    <p className="guess">
      {Array.from({ length: 5 }).map((_, j) => {
        const slot = slots[j];
        return (
          <span key={j} className={`cell ${slot?.status || ''}`}>
            {slot?.letter || ''}
          </span>
        );
      })}
    </p>
  );
}

export default memo(GuessRow);
