import React from 'react';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';

import Header from '../Components/Header';
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam}
  });

  function formatUrl(url){
    var httpString = 'http://'
        , httpsString = 'https://'
        ;
    if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString)
        url = httpString + url;
    return url;
  }

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to ='/profile' />;
  }

  if (loading) {
    return <div>Get ready to rock...</div>
  }

  if (!user?.username) {
    return (
      <h4>
        Ready to rock? You must be logged in to jam with us. Use the links above to sign up or log in.
      </h4>
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
              <div className="card-body">
                <img src="" className="rounded-circle" width="150"></img>
                <div className="mt-3">
                  <h3>"Profile Name"</h3>
                  <h4>Email:</h4>
                  <h4>Age:</h4>
                  <h4>Location:</h4>
                  <h4>Instruments:</h4>
                  <h4>Description:</h4>
                  <h4>Genres:</h4>
                  <h4>Influences:</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">Projects</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Project Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    Project Description
                  </div>
                  <div>
                    Project file
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className=''>
        <h2 className=''>
           {userParam ? `${user.username}` : 'You Rock!'}
        </h2>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
        <p>{user.instruments}</p>
        <p>{user.description}</p>
        <p>{user.genres}</p>
        <p>{user.influences}</p>
        <p>{user.pastProjects}</p>
        <p>{user.currentProjects}</p>
        <a href={formatUrl(user.audioLink)} target='_blank' rel="noreferrer"><p>Audio Sample: Check out my tunes!</p></a>
        <a href={formatUrl(user.videoLink)} target='_blank' rel="noreferrer"><p>Video Sample: See me in action!</p></a>
        
        {/* {userParam && (
          <button className='btn ml-auto' onClick={handleClick}>
            Add Friend
          </button>
        )} */}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <PostList 
            posts={user.posts} 
            // title={`${user.username}'s posts...`} 
            title={userParam ? `${user.username}` : 'Your Posts'}
          />
        </div>
        {/* <div className=''>
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div> */}
      </div>
      <div className=''>{!userParam && <PostForm />}</div>
    </div>
    </main>
    </>
  );
};

export default Profile;
