import React from 'react';
import drums from '../../assets/logo-images/drums2.png';

import { Stack } from '@mui/material';
const Footer = () => {
  return (
    <footer className=''>
      <img src={drums} id='footer-drums' alt='music notes'/>
      <span className='font-link' id='footer-tag'> "Find your last next drummer"</span>
      <img src={drums} id='footer-drums' alt='music notes'/>
      
      
    </footer>
  );
};

export default Footer;