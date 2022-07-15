import React from 'react';
import { Link } from 'react-router-dom';

import guitar from '../assets/logo-images/guitar.png';
// import piano from '../assets/logo-images/piano.png';
import bass from '../assets/logo-images/bass.png';
import trombone from '../assets/logo-images/trombone.png';
import trumpet from '../assets/logo-images/trumpet.png';
import drums2 from '../assets/logo-images/drums2.png';
import keyboard from '../assets/logo-images/keyboard.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const LandingPage = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} id='top-instrument-row' spacing={6} justifyContent='space-evenly' alignItems='center' >
        <img src={trumpet} className="App-logo " id='trumpet' alt='trumpet' /> 
        <img src={guitar} className="App-logo"  id='guitar' alt="guitar"/> 
        <img src={trombone} className="App-logo"  id='trombone' alt='trombone'/> 
      </Stack>

      <Stack id='title-div'>
        <h1 id='app-title' className='font-link'>MUSICOLOGY</h1>
        <h2 id='app-subtitle' className='font-link'>For Those About to Rock</h2>
      </Stack>

      <Stack direction='row' id='landing-btn-stack' spacing={2} justifyContent='center'>
        <Link to='/login'><Button variant='contained' id='login-btn' size='small'>Log In</Button></Link>
        <Link to='/signup'> <Button variant='contained' id='signup-btn' size='small'>Sign Up</Button></Link>
        <Link to='/bulletin_board'> <Button variant='contained' id='bulletin_board-btn' size='small'>Visit</Button></Link>
      </Stack>
     
      <Stack direction={{ xs: 'column', sm: 'row' }} id='bottom-instrument-row' spacing={6} justifyContent='space-evenly' alignItems='center'>
        <img src={keyboard} className="App-logo"  id='keyboard' alt='keyboard'/> 
        <img src={drums2} className="App-logo" id='drums' alt='drumset' /> 
        <img src={bass} className="App-logo"  id='bass' alt='bass guitar'/> 
      </Stack>
    </>
  );
};

export default LandingPage;