import React from 'react';
import guitar from '../../assets/logo-images/guitar.png';

import { Stack } from '@mui/material';
const Footer = () => {
  return (
    <footer className=''>
      <img src={guitar} id='footer-guitar' alt='music notes'/>
      <span className='font-link' id='footer-tag'> "It's a long way to the top if you want to rock and roll."</span>
      <img src={guitar} id='footer-guitar' alt='music notes'/>
      <Stack>
      <span id='copy-write'> ©2022 </span>
      <span id='copy-write'>by U, Me, and the Kevins</span>
      </Stack>
      
    </footer>
  );
};

export default Footer;