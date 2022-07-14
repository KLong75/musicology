import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Stack from '@mui/material/Stack';

import guitar from '../../assets/logo-images/guitar.png';
import devilHorns from '../../assets/logo-images/cartoon_devil_horns_hand.png';


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='font-link'>  

    <div className='' id='header-box'>
      <h1 className='font-link' id='header-title'>MUSICOLOGY</h1>
        <p className='font-link'>For Those About to Rock</p>  

      <nav className=''>
        {Auth.loggedIn() ? (
          <>
          <Stack direction='row' id='btn-stack' spacing={1} justifyContent='right'>
            
            <img src={guitar} alt='' id='header-icon' />
            <Link to='/profile'>My Profile</Link>
            <img src={devilHorns} alt='' id='header-icon' />
            <Link to='/bulletin_board'>Bulletin Board</Link>
            {/* <Link to='/update_profile'>Update Profile</Link> */}
            <img src={guitar} alt='' id='header-icon' />
            <a href='/' onClick={logout}>
              Logout
            </a>
            {/* <img src={mic} alt='' id='header-icon' /> */}
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