import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';
//import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
   <Card id="card" className="justify-content-center align-items-center">
      <form className=" m-1 p-2 align-items-center justify-content-center space-between" noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <h2 id="signup" className="m-3 align-items-center justify-content-center">Sign Up</h2>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="email" label="Email" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="username" label="Username" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="instruments" label="Instruments" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="age" label="Age" variant="filled" type="number" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="location" label="Location" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="desctiption" label="Description" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="genre" label="Genre(s)" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="" label="" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="currentProjects" label="Current Projects" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="pastProjects" label="Past Projects" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="videoLink" label="Link to Videos" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="audioLink" label="Link to Audio" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="influences" label="Influences" variant="filled" onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="password" label="Password" variant="filled" onChange={handleChange} />
        </div>
        <Button className="col-6 m-3 justify-content-center align-items-center" id="btn" variant="contained" type="submit">Sign Up</Button>
      </form>
    </Card>
  );
};

export default SignUp;