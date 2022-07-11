import React from 'react';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';

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
    <div>
      <div className=''>
        <h2 className=''>
           Viewing {userParam ? `${user.username}'s` : 'your'} profile. 
        </h2>
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
  );
};

export default Profile;
