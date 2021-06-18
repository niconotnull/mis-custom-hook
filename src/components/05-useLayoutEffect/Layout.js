import React, { useLayoutEffect, useRef, useState } from 'react';
import { useConter } from '../../hooks/useConter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
  const { counter, increment } = useConter(1);
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // Se crea una constante que va a ser igual si viene la data (!!data si tenemos la data si  es true ) entonces (&&data[0]) trae la data en la posicion cero
  // !null == true o !!null == false  entonces !null && 'Hola mundo' == Hola mundo
  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Loyout Effect</h1>
      <hr />

      <blockquote className='blockquote text-center'>
        <p ref={pTag} className=''>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className='btn btn-primary'>
        Siguiente quote
      </button>
    </div>
  );
};
