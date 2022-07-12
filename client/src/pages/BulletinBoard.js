import React from 'react';

import Header from '../Components/Header';
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
//import 'bootstrap/dist/css/bootstrap.min.css';

const BulletinBoard = () => {
    // use useQuery hook to make every request
    const { loading, data } = useQuery(QUERY_POSTS);
    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const posts = data?.posts || [];
    const loggedIn = Auth.loggedIn();

  return (
    
    <>
    
    <Header />
    <main>
      <div className=''>
        {loggedIn && (
          <div className=''>
            <PostForm />
          </div>
        )}
          <div className={`listTitle col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <PostList 
                posts={posts} 
                title='Bulletin Board'
              />
            )}
          </div>
          {loggedIn && userData ? (
          <div className=''>
            {/* This div will only appear when a user is logged in */}
            "It's a long way to the top if you wanna rock and roll."
          </div>
          ) : null}
      </div>
    </main>
    
    </>
   
  );
};

export default BulletinBoard;