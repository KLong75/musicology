import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () => {
  const [formState, setFormState] = useState({ 
    email: '', 
    username: '',
    password: '',
    age: 0,
    location: '',
    instruments: '',
    description: '',
    genres: '',
    influences: '',
    currentProjects: '',
    pastProjects: '',
    videoLink: '',
    audioLink: ''
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   const mutationResponse = await addUser({
  //     variables: { ...formState

  //     },
  //   });
  //   const token = mutationResponse.data.addUser.token;
  //   Auth.login(token);
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '', 
      username: '',
      password: '',
      age: 0,
      location: '',
      instruments: '',
      description: '',
      genres: '',
      influences: '',
      currentProjects: '',
      pastProjects: '',
      videoLink: '',
      audioLink: ''
    });
  };

  return (
   <Card id="card" className="justify-content-center align-items-center">
      <form onSubmit={handleFormSubmit} className=" m-1 p-2 align-items-center justify-content-center space-between" noValidate autoComplete="off" >
        <h2 id="signup" className="m-3 align-items-center justify-content-center">Sign Up</h2>
        <div>
          <TextField required className="m-2 justify-content-center align-items-center" id="email" placeholder='email@address.com'  label="Email" name='email' type='email' variant="filled" value={formState.email} onChange={handleChange} />
          <TextField required className=" m-2 justify-content-center align-items-center" id="username" placeholder= 'What should we call you?' value={formState.username} label="Username" name='username' type='username' variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField required className=" m-2 justify-content-center align-items-center" id="password" type='password' placeholder='******' value={formState.password} label="Password" name='password' variant="filled" onChange={handleChange} />
          <TextField  className=" m-2 justify-content-center align-items-center" id="instruments" placeholder='drums, bass, guitar, kazoo' value={formState.instruments} label="Instrument(s)" name='instruments' variant="filled" onChange={handleChange} />
          
        </div>
        <div>
          <TextField className=" m-2 justify-content-center align-items-center" id="location" placeholder='city, state' value={formState.location} label="Location" name='location' variant="filled" onChange={handleChange} />
          <TextField  className=" m-2 justify-content-center align-items-center" id="age" value={formState.age} label="Age" name='age' variant="filled" type="number" onChange={handleChange} />
        </div>
        <div>
          <TextField className=" m-2 justify-content-center align-items-center" id="desctiption" placeholder='beginning guitarist etc.' value={formState.description} label="Description" name='description' variant="filled" onChange={handleChange} />
          <TextField className=" m-2 justify-content-center align-items-center" id="genres" placeholder='rock, punk, metal, jazz, etc.' value={formState.genres} label="Genre(s)" name='genres' variant="filled" onChange={handleChange} /> 
        </div>
        <div>
          <TextField className=" m-2 justify-content-center align-items-center" id="influences" placeholder='Pink Floyd, Pearl Jam' value={formState.influences} label="Influences" name='influences' variant="filled" onChange={handleChange} />
          <TextField className=" m-2 justify-content-center align-items-center" id="currentProjects" placeholder='singer in death metal band' value={formState.currentProjects} label="Current Projects" name='currentProjects' variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField className=" m-2 justify-content-center align-items-center" id="pastProjects" placeholder='drummer in country band' value={formState.pastProjects} label="Past Projects" name='pastProjects' variant="filled" onChange={handleChange} />

          <TextField className=" m-2 justify-content-center align-items-center" id="audioLink" placeholder='SoundCloud, Bandcamp' value={formState.audioLink} label="Link to Audio" name='audioLink' variant="filled" onChange={handleChange} />
        </div>
        <div>
          <TextField className=" m-2 justify-content-center align-items-center" id="videoLink" placeholder='YouTube, Instagram, etc' value={formState.videoLink} label="Link to Videos" name='videoLink' variant="filled" onChange={handleChange} />
          
        </div>
        <Button className="col-6 m-3 justify-content-center align-items-center" id="btn" variant="contained" type="submit">Sign Up</Button>
      </form>
      {error && <div>Sign up failed. Bogus.</div>}
    </Card>
  );
};

export default SignUp;