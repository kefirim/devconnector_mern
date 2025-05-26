import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import { getPost } from '../../action/postAction';
import CommentItem from './CommentItem';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (loading || post === null) {
    return <Spinner />;
  }

  return (
    <section className="container">
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  );
};

export default Post;
