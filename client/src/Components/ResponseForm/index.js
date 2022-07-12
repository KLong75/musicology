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
        className={`${characterCount === 300 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/300
        {error && <span className=''>Something went wrong with your response...</span>}
      </p>
      <form 
        className='' 
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder='Do you want to jam?'
          value={responseText}
          className='form-input'
          onChange={handleChange}
        ></textarea>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
      
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ResponseForm;