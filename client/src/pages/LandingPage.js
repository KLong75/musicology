import React from 'react';
import { Link } from 'react-router-dom';

import guitar from '../assets/logo-images/guitar.png';
import piano from '../assets/logo-images/piano.png';
import bass from '../assets/logo-images/bass.png';
import trombone from '../assets/logo-images/trombone.png';
import trumpet from '../assets/logo-images/trumpet.png';
import drums2 from '../assets/logo-images/drums2.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const LandingPage = () => {
  return (
    <main>

      <div>
       
       <img src={trumpet} className="App-logo" id='trumpet' alt="trumpet" /> 
       <img src={bass} className="App-logo" alt="logo" id='bass' /> 
       <img src={drums2} className="App-logo" id='drums' alt="drumset" /> 
      </div>


      <div id='title-div'>
        <h1 id='app-title'>MUSICOLOGY</h1>
        <h2>For Those About to Rock</h2>
        <Stack direction='row' id='btn-stack' spacing={6} justifyContent='center'>
          
          <Link to='/login'><Button variant='contained' id='login-btn'>Log In</Button></Link>
          <Link to='/signup'> <Button variant='contained' id='signup-btn'>Sign Up</Button></Link>
         
        </Stack>
      </div>

      

      <div>
       <img src={piano} className="App-logo" alt="logo" id='piano' /> 
       <img src={guitar} className="App-logo" alt="guitar" id='guitar' /> 
       <img src={trombone} className="App-logo" alt="logo" id='trombone'/> 
    
      </div>

    </main>
  );
};

export default LandingPage;