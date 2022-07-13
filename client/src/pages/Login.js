import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Card id="card" className="postition-relative align-items-center justify-content-center col-10">
      <form className="m-1 p-1 align-items-center justify-content-center" noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <h2 id="text" className="row m-1 align-items-center justify-content-center">Login</h2>
        
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-email" placeholder='email@address.com' label="Email" name='email' type='email' variant="filled" value={formState.email} onChange={handleChange} />

        <TextField required className="row m-1 justify-content-center align-items-center" id="login-pw" type='password' placeholder='******' value={formState.password} label="Password"  name='password' variant="filled" onChange={handleChange} />
        {error ? (
          <div>
            <p className="error-text">Dude, the login info you entered was bogus. Please try again.</p>
          </div>
        ) : null}
        <div className="flex-row flex-end"></div>
        <Button className="col-6 m-1 justify-content-center align-items-center" id="btn" variant="contained" type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
