import React from 'react';
import Auth from '../utils/auth'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ResponseForm from '../components/ResponseForm';
import ResponseList from '../components/ResponseList';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';


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
      <div className="card">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="">
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
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
      
      {post.responseCount > 0 && (
        <ResponseList responses={post.responses} />
      )}
      {Auth.loggedIn() && <ResponseForm postId={post._id} />}
      </div>
    </main>
    </>
  );
};

export default SinglePost;