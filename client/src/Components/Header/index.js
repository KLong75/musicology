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
    <header className='font-link '>  

    <div className=''>
      <h1 className='font-link'>MUSICOLOGY</h1>
        <p className='font-link'>For Those About to Rock</p>  

      <nav className=''>
        {Auth.loggedIn() ? (
          <>
          <Stack direction='row' id='btn-stack' spacing={2} justifyContent='right'>
            <Link to='/profile'>My Profile</Link>
            <Link to='/bulletin_board'>Bulletin Board</Link>
            <Link to='/update_profile'>Update Profile</Link>
            <a href='/' onClick={logout}>
              Logout
            </a>
          </Stack>
          </>
        ) : (
          <>
            <Stack direction='row' id='btn-stack' spacing={4} justifyContent='right'>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </Stack>
          </>
        )}
      </nav>
    </div>
  </header>
  );
};

export default Header;