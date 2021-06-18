import React, { useState } from 'react';
import { useConter } from '../../hooks/useConter';
import { Small } from './Small';

import '../02-useEffect/effect.css';

export const Memorize = () => {
  const { counter, increment } = useConter(10);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => {
          setShow(!show);
        }}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
