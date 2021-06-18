import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>
      <button className='btn btn-outline-primary' onClick={() => setUser({})}>
        Logout
      </button>
    </div>
  );
};
