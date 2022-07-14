import React from 'react';

import Header from '../Components/Header';
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';
import Footer from '../Components/Footer';

// import devilHorns from '../assets/logo-images/cartoon_devil_horns_hand.png';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';

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
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <PostForm />
          </div>
          
        )}
       
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8 '}`} id='bulletin-board-posts'>
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
          <div className='col-12 col-lg-3 mb-3' id='end-of-board-tag'>
            {/* This div will only appear when a user is logged in. What should we do with it?*/}
          </div>
          ) : null}
      </div>
    </main>
    <Footer />
    </>
  );
};

export default BulletinBoard;