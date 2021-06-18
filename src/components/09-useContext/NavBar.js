import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          useContext
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink exact activeClassName='active' className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName='active'
              className='nav-link'
              to='/about'>
              About
            </NavLink>
            <NavLink
              exact
              activeClassName='active'
              className='nav-link'
              to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
