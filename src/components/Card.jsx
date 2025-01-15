import { useEffect, useState } from 'react';

import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? 'locked' : '';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [count]);

  return (
    <div className='flex flex-col items-center justify-center w-[476px] h-[615px] bg-teal-900 rounded-xl transition-all shadow-[0_25px_121px_rgba(0,0,0,0.5)]'>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
