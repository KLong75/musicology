import React from 'react';
import { TextField, Button, Card } from '@mui/material';
import './style.css'


const LogIn = () => {

  return (
    <Card id="card" className="postition-relative align-items-center justify-content-center col-10">
      <form className="m-1 p-1 align-items-center justify-content-center" noValidate autoComplete="off">
        <h2 id="text" className="row m-1 align-items-center justify-content-center">Login</h2>
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-email" label="Email" variant="filled" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-pw" label="Password" variant="filled" />
        <Button className="col-6 m-1 justify-content-center align-items-center" id="btn" variant="contained">Login</Button>
      </form>
    </Card>
  );
};

export default LogIn;