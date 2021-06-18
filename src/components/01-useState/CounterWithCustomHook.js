import React from 'react';
import { useConter } from '../../hooks/useConter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useConter(100);

  return (
    <div>
      <h1>Conter with hook {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className='btn'>
        +1
      </button>
      <button onClick={reset} className='btn'>
        Reset
      </button>
      <button onClick={() => decrement(2)} className='btn'>
        -1
      </button>
    </div>
  );
};
