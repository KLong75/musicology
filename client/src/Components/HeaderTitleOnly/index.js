import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';


const HeaderTitleOnly = () => {

  return (
    <header className=''>  
      <Stack justifyContent='space-evenly' alignItems='center'>
      <Link to='/' id='header-title-only-title'>
        <h1 className='font-link'>MUSICOLOGY</h1>
      </Link>
      <h4 className='font-link'>For Those About to Rock</h4>  
      </Stack>
  </header>
  );
};

export default HeaderTitleOnly;