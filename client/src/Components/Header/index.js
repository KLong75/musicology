import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Stack from '@mui/material/Stack';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className=''>  
    <div className=''>
      <Link to='/bulletin_board'>
        <h1>Musicology</h1>
      </Link>
      <p>For Those About to Rock</p>

      <nav className=''>
        {Auth.loggedIn() ? (
          <>
          <Stack direction='row' id='btn-stack' spacing={4} justifyContent='right'>
            <Link to='/profile'>My Profile</Link>
            <Link to='/update_profile'>Add/Update Profile Pic</Link>
            <a href='/' onClick={logout}>
              Logout
            </a>
            </Stack>
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