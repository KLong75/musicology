import React from "react";
// import React, { useEffect } from "react";
import Auth from "../utils/auth";
import { Navigate, useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

import Header from "../Components/Header";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";


import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import devilHorns from '../assets/logo-images/cartoon_devil_horns_hand.png'
import Footer from "../Components/Footer";
import HeaderTitleOnly from "../Components/HeaderTitleOnly";


const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  function formatUrl(url) {
    var httpString = "http://",
      httpsString = "https://";
    if (
      url.substr(0, httpString.length) !== httpString &&
      url.substr(0, httpsString.length) !== httpsString
    )
      url = httpString + url;
    return url;
  }

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/profile' />;
  }

  if (loading) {
    return <div>Get ready to rock...</div>;
  }

  if (!user?.username) {
    return (
      <>
      <HeaderTitleOnly />
      <div id='need-account-div'>
      <h5 className="font-link">
        Ready to rock? You need an account to jam with us. Sign up or log in today!
      </h5>
      <Stack direction='row' id='btn-stack-need-account' spacing={4} justifyContent='center'>
        <Link to='/login'><Button variant='contained' id='login-btn'>Log In</Button></Link>
        <Link to='/signup'> <Button variant='contained' id='signup-btn'>Sign Up</Button></Link>
      </Stack>
      <img src={devilHorns} alt='devil horns' id='devil-horn-error-img'/>
      </div>
    </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="main">
            <div className="row">
              <div className="col-md-4 mt-1">
                <div className="card text-center sidebar">
                  <div className="card-body shadow-lg" id='user-data-card'>
                    <img src="https://cdn-images.audioaddict.com/1/5/d/b/a/a/15dbaa1f6a26c234d4977f10e9ea8808.png" className="rounded-circle" width="150" alt='guitar-icon'></img>
                    <div className="mt-3">
                      <h1 className="font-link">{userParam ? `${user.username}` : 'You Rock!'}</h1>
                      <h4 className="py-3 font-link">Email:</h4>
                      <p>{user.email}</p>
                      <h4 className="py-3 font-link ">Age:</h4>
                      <p>{user.age}</p>
                      <h4 className="py-3 font-link">Location:</h4>
                      <p>{user.location}</p>
                      <h4 className="py-3 font-link">Instruments:</h4>
                      <p>{user.instruments}</p>
                      <h4 className="py-3 font-link">About Me:</h4>
                      <p>{user.description}</p>
                      <h4 className="py-3 font-link">Genres:</h4>
                      <p>{user.genres}</p>
                      <h4 className="py-3 font-link">Influences:</h4>
                      <p>{user.influences}</p>
                      <h4 className="py-3 font-link">Links:</h4>
                      <a href={formatUrl(user.audioLink)} target='_blank' rel="noreferrer"><p>Audio Sample: Check out my tunes!</p></a>
                      <a href={formatUrl(user.videoLink)} target='_blank' rel="noreferrer"><p>Video Sample: See me in action!</p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-1">
                <div className="card mb-3 content shadow-lg" id='user-project-card'>
                  <h3 className="text-center m-3 pt-3 font-link">Projects</h3>
                  <div className="card-body">
                    <div className="row justify-content">
                      <div className="col-md-3 mx-auto">
                        <h5 className="text-center font-link">Current:</h5>
                        <p>{user.currentProjects}</p>
                      </div>
                      <div className="col-md-3 mx-auto">
                        <h5 className="text-center font-link">Past:</h5>
                        <p>{user.pastProjects}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 content shadow-lg" id='profile-post-list-box'>
                <div className="mx-auto col-12 mb-3 col-lg-8">
                  <PostList
                    className='font-link'
                    posts={user.posts}
                    title={userParam ? `${user.username}'s Posts` : 'Your Posts'}
                  />
                </div>
              </div>
              <div className=''>{!userParam && <PostForm />}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;








































// import React from "react";
// // import React, { useEffect } from "react";
// import Auth from "../utils/auth";
// import { Navigate, useParams } from "react-router-dom";

// import { Link } from 'react-router-dom';

// import Header from "../Components/Header";
// import PostList from "../Components/PostList";
// import PostForm from "../Components/PostForm";

// import { useQuery } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";
// //import FileUploader from "../Components/FileUploader/FileUploader";

// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// // import Avatar from '@mui/material/Avatar'
// import devilHorns from '../assets/logo-images/cartoon_devil_horns_hand.png'


// const Profile = (props) => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   function formatUrl(url) {
//     var httpString = "http://",
//       httpsString = "https://";
//     if (
//       url.substr(0, httpString.length) !== httpString &&
//       url.substr(0, httpsString.length) !== httpsString
//     )
//       url = httpString + url;
//     return url;
//   }

//   const user = data?.me || data?.user || {};

//   // navigate to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/profile" />;
//   }

//   if (loading) {
//     return <div>Get ready to rock...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <>
//       <h4>
//         Ready to rock? You need an account to jam with us. What are you waiting for? Sign up or log in today!
//       </h4>
//       <Stack direction='row' id='btn-stack' spacing={4} justifyContent='center'>
//         <Link to='/login'><Button variant='contained' id='login-btn'>Log In</Button></Link>
//         <Link to='/signup'> <Button variant='contained' id='signup-btn'>Sign Up</Button></Link>
//       </Stack>
//       <img src={devilHorns} alt='devil horns'/>
//     </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="container">
//           <div className="main">
//             <div className="row">
//               <div className="col-md-4 mt-1">
//                 <div className="card text-center sidebar">
//                   <div className="card-body">
//                     {/* <FileUploader />  */}                    
//                     <div className="mt-3">
//                       <h3>{userParam ? `${user.username}` : "You Rock!"}</h3>
//                       <h4>Email:</h4>
//                       <p>{user.email}</p>
//                       <h4>Age:</h4>
//                       <p>{user.age}</p>
//                       <h4>Location:</h4>
//                       <p>{user.location}</p>
//                       <h4>Instruments:</h4>
//                       <p>{user.instruments}</p>
//                       <h4>Description:</h4>
//                       <p>{user.description}</p>
//                       <h4>Genres:</h4>
//                       <p>{user.genres}</p>
//                       <h4>Influences:</h4>
//                       <p>{user.influences}</p>
//                       <h4>Links:</h4>
//                       <a
//                         href={formatUrl(user.audioLink)}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <p>Audio Sample: Check out my tunes!</p>
//                       </a>
//                       <a
//                         href={formatUrl(user.videoLink)}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <p>Video Sample: See me in action!</p>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-8 mt-1">
//                 <div className="card mb-3 content">
//                   <h1 className="m-3 pt-3">Projects</h1>
//                   <div className="card-body">
//                     <div className="row">
//                       <div className="col-md-3">
//                         <h5>Current:</h5>
//                         <p>{user.currentProjects}</p>
//                       </div>
//                       <div className="col-md-3">
//                         <h5>Past:</h5>
//                         <p>{user.pastProjects}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex-row justify-space-between mb-3">
//                   <div className="col-12 mb-3 col-lg-8">
//                     <PostList
//                       posts={user.posts}
//                       // title={`${user.username}'s posts...`}
//                       title={userParam ? `${user.username}'s posts` : "Your Posts"}
//                     />
//                   </div>
//                   {/* <div className=''>
//                       <FriendList
//                       username={user.username}
//                       friendCount={user.friendCount}
//                       friends={user.friends}
//                       />
//                       </div> */}
//                 </div>
//                 <div className="">{!userParam && <PostForm />}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Profile;

















// import React from 'react';
// import Auth from '../utils/auth';
// import { Navigate, useParams } from 'react-router-dom';

// import Header from '../Components/Header';
// import PostList from '../Components/PostList';
// import PostForm from '../Components/PostForm';

// import { useQuery } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';


// const Profile = (props) => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam}
//   });

//   function formatUrl(url){
//     var httpString = 'http://'
//         , httpsString = 'https://'
//         ;
//     if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString)
//         url = httpString + url;
//     return url;
//   }

//   const user = data?.me || data?.user || {};

//   // navigate to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to ='/profile' />;
//   }

//   if (loading) {
//     return <div>Get ready to rock...</div>
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         Ready to rock? You must be logged in to jam with us. Use the links above to sign up or log in.
//       </h4>
//     );
//   }


//   return (
//     <>
//     <Header />
//     <main>
//     <div>
//       <div className=''>
//         <h2 className=''>
//            {userParam ? `${user.username}` : 'You Rock!'}
//         </h2>
//         <p>{user.email}</p>
//         <p>{user.age}</p>
//         <p>{user.location}</p>
//         <p>{user.instruments}</p>
//         <p>{user.description}</p>
//         <p>{user.genres}</p>
//         <p>{user.influences}</p>
//         <p>{user.pastProjects}</p>
//         <p>{user.currentProjects}</p>
//         <a href={formatUrl(user.audioLink)} target='_blank' rel="noreferrer"><p>Audio Sample: Check out my tunes!</p></a>
//         <a href={formatUrl(user.videoLink)} target='_blank' rel="noreferrer"><p>Video Sample: See me in action!</p></a>
        
//         {/* {userParam && (
//           <button className='btn ml-auto' onClick={handleClick}>
//             Add Friend
//           </button>
//         )} */}
//       </div>

//       <div className="flex-row justify-space-between mb-3">
//         <div className="col-12 mb-3 col-lg-8">
//           <PostList 
//             posts={user.posts} 
//             // title={`${user.username}'s posts...`} 
//             title={userParam ? `${user.username}` : 'Your Posts'}
//           />
//         </div>
//         {/* <div className=''>
//           <FriendList
//             username={user.username}
//             friendCount={user.friendCount}
//             friends={user.friends}
//           />
//         </div> */}
//       </div>
//       <div className=''>{!userParam && <PostForm />}</div>
//     </div>
//     </main>
//     </>
//   );
// };

// export default Profile;
