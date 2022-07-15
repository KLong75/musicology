import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitleOnly from '../Components/HeaderTitleOnly';

import devilHorns from '../assets/logo-images/cartoon_devil_horns_hand.png';

import  {Stack}  from '@mui/material';
import {Button} from '@mui/material';

const NoExist = () => {
  return (
    <>
    <HeaderTitleOnly />
    <div id='no-exist-div'>
      <h5 className='font-link'>Woh. That page does not exist. It's like dust in the wind dude. </h5>
      <Stack direction='row' id='btn-stack-need-account' spacing={4} justifyContent='center'>
        <Link to='/login'><Button variant='contained' id='login-btn'>Log In</Button></Link>
        <Link to='/signup'> <Button variant='contained' id='signup-btn'>Sign Up</Button></Link>
      </Stack>
      <img src={devilHorns} alt='devil horns' id='devil-horn-error-img'/>
    </div>
    </>
  );
};

export default NoExist;