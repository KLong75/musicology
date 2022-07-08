import React from 'react';
import { TextField, Button, Card } from '@mui/material';
import './style.css'

const SignUp = () => {
  return (
   <Card id="card" className="align-items-center justify-content-center col-10">
      <form className="m-1 p-1 align-items-center justify-content-center" noValidate autoComplete="off">
        <h2 id="text" className="row m-1 align-items-center justify-content-center">Login</h2>
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="First Name" variant="filled" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="Last Name" variant="filled" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="Email" variant="filled" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="Age" variant="filled" type="number" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="Instruments" variant="filled" />
        <TextField required className="row m-1 justify-content-center align-items-center" id="" label="Password" variant="filled" />
        <Button className="col-6 m-1 justify-content-center align-items-center" id="btn" variant="contained">Sign Up</Button>
      </form>
    </Card>
  );
};

export default SignUp;