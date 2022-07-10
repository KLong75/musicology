import React from 'react';
import { TextField, Button, Card } from '@mui/material';
import './style.css'

const SignUp = () => {
  return (
   <Card id="card" className="justify-content-center align-items-center">
      <form className=" m-1 p-2 align-items-center justify-content-center space-between" noValidate autoComplete="off">
        <h2 id="signup" className="m-3 align-items-center justify-content-center">Sign Up</h2>
        <div className=''>
          <TextField required className="m-2 justify-content-center" id="first-name" label="First Name" variant="filled" />
          <TextField required className="m-2 justify-content-center" id="last-name" label="Last Name" variant="filled" />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="instruments" label="Instruments" variant="filled" />
          <TextField required className=" m-2 justify-content-center align-items-center" id="age" label="Age" variant="filled" type="number" />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="email" label="Email" variant="filled" />
          <TextField required className=" m-2 justify-content-center align-items-center" id="password" label="Password" variant="filled" />
        </div>
        <Button className="col-6 m-3 justify-content-center align-items-center" id="btn" variant="contained">Sign Up</Button>
      </form>
    </Card>
  );
};

export default SignUp;