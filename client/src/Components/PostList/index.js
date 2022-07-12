import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>Dude! What do you want to say? You haven't posted anything on the bulletin board yet...</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className=''
              >
              {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  Responses: {post.responseCount} || Click to{' '}
                  {post.responseCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;