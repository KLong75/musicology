import React, { useState } from 'react';
import { TextField, Button, Stack, Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import HeaderTitleOnly from '../Components/HeaderTitleOnly';

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
    <>
    <Grid  
    
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
      <HeaderTitleOnly />
      <form  className="m-1 p-1 align-items-center justify-content-center" noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <h2 id='login' className="row m-1 col-12 align-items-center justify-content-center font-link">Login</h2>
          <Stack direction='row' alignItems="center" className='row form-input justify-content-center'>
            <TextField required className="m-2 col-auto col-md-5" id="login-email" placeholder='email@address.com' label="Email" name='email' type='email' variant="filled" value={formState.email} onChange={handleChange} />

            <TextField required className="m-2 col-auto col-md-5" id="login-pw" type='password' placeholder='******' value={formState.password} label="Password"  name='password' variant="filled" onChange={handleChange} />
            {error ? (

                <span className="error-text font-link">Dude, the login info you entered was bogus. Please try again.</span>
                
            ) : null}
            <div className="flex-row flex-end"></div>
          </Stack>
        <Button className="col-8 m-1 justify-content-center align-items-center" id="btn" variant="contained" type="submit">Login</Button>
      </form>
    </Grid>
    </>
  );
};

export default Login;