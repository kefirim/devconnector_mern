import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../action/postAction';

const PostForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addPost({ text }));
      setText('');
    }
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;
