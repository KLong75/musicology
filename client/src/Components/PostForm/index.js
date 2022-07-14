import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
        data : { posts: [addPost, ...posts] }
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
    <div className='font-link '>
      <h5>Post on the Bulletin Board</h5>
      <form className='flex-row justify-center justify-space-between-md align-stretch '
      onSubmit={handleFormSubmit}
      >
        <textarea
          id='post-form-text-area'
          placeholder="Find your last new drummer..."
          value={postText}
          className='form-input col-12 col-md-9 shadow-lg'
          onChange={handleChange}
        ></textarea>

        <Stack spacing={2} justifyContent='left'>

        <p className={`m-0 ${characterCount === 500 ||  error ? 'text-error' : ''}`} id='post-form-char-count'>
        Character Count: {characterCount}/500
        {error && <span className=''>Something went wrong...</span>}
      </p>

      <Button className='btn'variant='contained'
         type='submit' size='small' id='post-form-submit-btn'>Submit
      </Button>
      </Stack>


      </form>
    </div>
  );
};

export default PostForm;