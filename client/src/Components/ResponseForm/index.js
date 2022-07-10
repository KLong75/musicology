import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RESPONSE } from '../../utils/mutations'

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
      <p 
        className={`m-0 ${characterCount === 300 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/300
        {error && <span className='ml-2'>Something went wrong...</span>}
      </p>
      <form 
        className='flex-row justify-center justify-space-between-md align-stretch' 
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder='Leave a reaction to this thought...'
          value={responseText}
          className='form-input col-12 col-md-9'
          onChange={handleChange}
        ></textarea>
        <button className='btn col-12 col-md-3' type='submit'>
          Submit
        </button>
      </form>
      
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ResponseForm;