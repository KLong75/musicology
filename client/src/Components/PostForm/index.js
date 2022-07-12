import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {

      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (e) {
        console.warn('First post insertion by user')
      } 
      // read thought array cache
      const { posts } = cache.readQuery({ query: QUERY_POSTS });
      cache.writeQuery({
        query: QUERY_POSTS,
        data : { thoughts: [addPost, ...posts] }
      });
    }
  });

  const handleChange = (event) => {
      if (event.target.value.length <= 500) {
        setText(event.target.value);
        setCharacterCount(event.target.value.length);
      }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addPost({
        variables: { postText },
      });

      //clear form
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }  
  };



  return (
    <div>
      <p className={`${characterCount === 500 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/500
        {error && <span className=''>Something went wrong...</span>}
      </p>
      <form className=''
      onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Let's rock..."
          value={postText}
          className='form-input '
          onChange={handleChange}
        ></textarea>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;