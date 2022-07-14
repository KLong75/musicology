import React from 'react';
import Auth from '../utils/auth'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import ResponseForm from '../Components/ResponseForm';
import ResponseList from '../Components/ResponseList';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Footer from '../Components/Footer';


const SinglePost = () => {
  const {id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });
  
  const post = data?.post || {};
  
  if (loading) {
    return <div> Loading...</div>
  }

  return (
    <>
    <Header />
    <main>
    <div>
      <div className="card" id='single-post-box'>
        <p className="card-header font-link">
          <span style={{ fontWeight: 700 }} className="card-title">
            <Link 
              to={`/profile/${post.username}`}
              style={{ fontWeight: 700 }}
              className=''
            >
              {post.username}
            </Link>{' '}
          </span>{' '}
          posted on {post.createdAt}
        </p>
        <div className="card-body" id='single-post-card-body'>
          <p>{post.postText}</p>
        </div>
      </div>
      
      {post.responseCount > 0 && (
        <>

        <p></p>
        <ResponseList responses={post.responses} />
        </>
      )}
      {Auth.loggedIn() && <ResponseForm postId={post._id} />}
      </div>
    </main>
    <Footer />
    </>
  );
};

export default SinglePost;