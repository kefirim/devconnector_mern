import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { addLike, removeLike, deletePost } from '../../action/postAction';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions = true // facultatif, utile si tu veux réutiliser ce composant sans boutons
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>

        {showActions && (
          <>
            <button
              onClick={() => dispatch(addLike(_id))}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{' '}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              onClick={() => dispatch(removeLike(_id))}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => dispatch(deletePost(_id))}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

export default PostItem;
