import { useCallback, useState } from 'react';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import FormInput from '../FormInput/FormInput';
import Keyboard from '../Keyboard/Keyboard';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
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
    <div className="game-container">
      <Guess guesses={guesses} />
      <FormInput
        hasWon={hasWon}
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
      />
      <Keyboard guesses={guesses} />
      <Banner
        hasWon={hasWon}
        onRestart={onRestart}
        guesses={guesses}
        answer={answer}
      />
    </div>
  );
}

export default Game;
