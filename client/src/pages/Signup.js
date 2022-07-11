import React, { useState } from 'react';
import { TextField, InputLabel, MenuItem, Select, Box, Button, Card, FormControl } from '@mui/material';
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

          <FormControl >
            <InputLabel id="input-label">Age</InputLabel>
            <Select
              labelId='age-select' 
              className=" m-2 justify-content-center align-items-center" 
              id="age" 
              value={formState.age} 
              label="Age" 
              name='age'
              onChange={handleChange} 
            >  
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={21}>21</MenuItem>
            <MenuItem value={22}>22</MenuItem>
            <MenuItem value={23}>23</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={26}>26</MenuItem>
            <MenuItem value={27}>27</MenuItem>
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={29}>29</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={31}>31</MenuItem>
            <MenuItem value={32}>32</MenuItem>
            <MenuItem value={33}>33</MenuItem>
            <MenuItem value={34}>34</MenuItem>
            <MenuItem value={35}>35</MenuItem>
            <MenuItem value={36}>36</MenuItem>
            <MenuItem value={37}>37</MenuItem>
            <MenuItem value={38}>38</MenuItem>
            <MenuItem value={39}>39</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={41}>41</MenuItem>
            <MenuItem value={42}>42</MenuItem>
            <MenuItem value={43}>43</MenuItem>
            <MenuItem value={44}>44</MenuItem>
            <MenuItem value={45}>45</MenuItem>
            <MenuItem value={46}>46</MenuItem>
            <MenuItem value={47}>47</MenuItem>
            <MenuItem value={48}>48</MenuItem>
            <MenuItem value={49}>49</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={51}>51</MenuItem>
            <MenuItem value={52}>52</MenuItem>
            <MenuItem value={53}>53</MenuItem>
            <MenuItem value={54}>54</MenuItem>
            <MenuItem value={55}>55</MenuItem>
            <MenuItem value={56}>56</MenuItem>
            <MenuItem value={57}>57</MenuItem>
            <MenuItem value={58}>58</MenuItem>
            <MenuItem value={59}>59</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={61}>61</MenuItem>
            <MenuItem value={62}>62</MenuItem>
            <MenuItem value={63}>63</MenuItem>
            <MenuItem value={64}>64</MenuItem>
            <MenuItem value={65}>65</MenuItem>
            <MenuItem value={66}>66</MenuItem>
            <MenuItem value={67}>67</MenuItem>
            <MenuItem value={68}>68</MenuItem>
            <MenuItem value={69}>69</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={71}>71</MenuItem>
            <MenuItem value={72}>72</MenuItem>
            <MenuItem value={73}>73</MenuItem>
            <MenuItem value={74}>74</MenuItem>
            <MenuItem value={75}>75</MenuItem>
            <MenuItem value={76}>76</MenuItem>
            <MenuItem value={77}>77</MenuItem>
            <MenuItem value={78}>78</MenuItem>
            <MenuItem value={79}>79</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={81}>81</MenuItem>
            <MenuItem value={82}>82</MenuItem>
            <MenuItem value={83}>83</MenuItem>
            <MenuItem value={84}>84</MenuItem>
            <MenuItem value={85}>85</MenuItem>
            <MenuItem value={86}>86</MenuItem>
            <MenuItem value={87}>87</MenuItem>
            <MenuItem value={88}>88</MenuItem>
            <MenuItem value={89}>89</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={91}>91</MenuItem>
            <MenuItem value={92}>92</MenuItem>
            <MenuItem value={93}>93</MenuItem>
            <MenuItem value={94}>94</MenuItem>
            <MenuItem value={95}>95</MenuItem>
            <MenuItem value={96}>96</MenuItem>
            <MenuItem value={97}>97</MenuItem>
            <MenuItem value={98}>98</MenuItem>
            <MenuItem value={99}>99</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
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