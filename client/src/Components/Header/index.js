import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className=''>  
    <div className=''>
      <Link to='/'>
        <h1>Musicology</h1>
      </Link>

      <nav className=''>
        {Auth.loggedIn() ? (
          <>
            <Link to='/profile'>My Profile</Link>
            <a href='/' onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </nav>
    </div>
  </header>
  );
};

export default Header;