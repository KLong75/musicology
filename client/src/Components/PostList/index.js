import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className='font-link'>Dude! You haven't posted anything on the bulletin board yet...</h3>;
  }

  return (
    <div>
      <h3 className='font-link'>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3" id='post-card'>
            <p className="card-header font-link">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
              >
              {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </p>
            <div className="card-body" id='post-card-body'>
                <p>{post.postText}</p>
                <Link to={`/post/${post._id}`}>
                <p className="mb-0 font-link">
                  Responses : {post.responseCount} || Click to{' '}
                  {post.responseCount ? 'join' : 'start'} the conversation!
                </p>
              </Link>
            </div>
          </div>
        ))}
     </div>
  );
};

export default PostList;