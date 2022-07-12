import React from 'react';

const PostForm = () => {
  return (
    <div>
      <p className=''>
        Character Count: /280
      </p>
      
      <form className=''>
        <textarea
          placeholder="Let's Rock..."
          value=''
          className=''
          onChange=''
        ></textarea>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;