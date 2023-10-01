import React from 'react';
import './post.css';

function Post() {
  return (
    <>
      <div className='pb'>
        <h2 className='ph'>CREATE A NEW POST</h2>
        <input placeholder='Title....' type="text" className='md md-title' />
        <textarea placeholder='Description' rows={6} cols={22} className='md md-description' />
        <div className='button-container'>
          <a className='pbn'>UPLOAD FILE</a>
          <a className='pbn'>POST</a>
        </div>
      </div>
      <div className='v'>
        <h3>VIEW PREVIOUS POSTS</h3>
      </div>
    </>
  );
}

export default Post;
