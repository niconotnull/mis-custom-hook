import React from 'react';
import { useConter } from '../../hooks/useConter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useConter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // Se crea una constante que va a ser igual si viene la data (!!data si tenemos la data si  es true ) entonces (&&data[0]) trae la data en la posicion cero
  // !null == true o !!null == false  entonces !null && 'Hola mundo' == Hola mundo
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-center'>
          <p className=''>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className='btn btn-primary'>
        Siguiente quote
      </button>
    </div>
  );
};
