import React, { useCallback, useState } from 'react';

import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  // esta es una funcion memerizada que es pasada como argumento y que tambien se esta utulizado React.memo para que
  // memorice el componente, si los argumentos no ca
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallBack hook {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
