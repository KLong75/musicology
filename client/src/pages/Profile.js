import React from 'react';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';

import Header from '../components/Header';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam}
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to ='/profile:username' />;
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user?.username) {
    return (
      <h4>
        Ready to rock? You must be logged in to jam with us. Use the links above to sign up or log in.
      </h4>
    );
  }

  // const handleClick = async () => {
  //   try {
  //     await addFriend({
  //       variables: { id: user._id }
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <>
    <Header />
    <main>
    <div>
      <div className=''>
        <h2 className=''>
           {userParam ? `${user.username}` : 'You'}
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
        <a href={user.audioLink} target='_blank' rel="noreferrer"><p>Audio Sample: Check out my tunes!</p></a>
        <a href={user.videoLink} target='_blank' rel="noreferrer">  <p>Video Sample: See me in action!</p></a>
        
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
            title={`${user.username}'s posts...`} 
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
