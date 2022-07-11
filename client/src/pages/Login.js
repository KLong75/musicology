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
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-username" label="Username" variant="filled" onChange={handleChange} />
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-email" label="Email" variant="filled" onChange={handleChange} />
        <TextField required className="row m-1 justify-content-center align-items-center" id="login-pw" label="Password" variant="filled" onChange={handleChange} />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end"></div>
        <Button className="col-6 m-1 justify-content-center align-items-center" id="btn" variant="contained" type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;



















// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const LogIn = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...formState }
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }
  
//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <main className=''>
//       <div className=''>
//         <div className=''>
//           <h4 className=''>Login</h4>
//           <div className=''>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className='form-input'
//                 placeholder='Your email'
//                 name='email'
//                 type='email'
//                 id='email'
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='******'
//                 name='password'
//                 type='password'
//                 id='password'
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className='btn d-block w-100' type='submit'>
//                 Submit
//               </button>
//             </form>

//             {error && <div>Login failed</div>}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default LogIn;