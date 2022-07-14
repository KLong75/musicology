import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RESPONSE } from '../../utils/mutations'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ResponseForm = ({ postId }) => {
  const [responseText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addResponse, { error }] = useMutation(ADD_RESPONSE);

  const handleChange = (event) => {
    if (event.target.value.length <=280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addResponse ({
        variables: { responseText, postId}
      });
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h5>Think you might like to jam with this person? Leave a response below:</h5>
      <form
        id='response-form' 
        className='' 
        onSubmit={handleFormSubmit}
      >
        <Stack spacing={2} justifyContent='left'>
        <textarea
          placeholder='Respond to this post...'
          value={responseText}
          className='form-input'
          onChange={handleChange}
        ></textarea>
        
        <p 
        className={`${characterCount === 300 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/300
        {error && <span className=''>Something went wrong with your response...</span>}
      </p>
      <Button className='btn'variant='contained'
         type='submit' size='small'>Submit
      </Button>



      </Stack>
      </form>
      
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ResponseForm;