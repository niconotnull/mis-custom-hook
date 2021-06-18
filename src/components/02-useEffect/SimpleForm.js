import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formaState, setFormaState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formaState;

  useEffect(() => {
    // console.log('Hey');
  }, []);

  useEffect(() => {
    // console.log('formState cambio');
  }, [formaState]);

  useEffect(() => {
    // console.log('Cambio en el email');
  }, [email]);

  const handleInputChange = ({ target }) => {
    console.log(target.name, target.value);
    setFormaState({
      ...formaState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};
