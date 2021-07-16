import React, { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CommentsForm from "./CommentsForm";
import SpinnerLoad from "./SpinnerLoad";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Below function is for passing as a props to commentsForm and use it

  function getComments() {
    getCommentsByReviewId(review_id).then((getCommentsFromApi) => {
      setComments(getCommentsFromApi);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getCommentsByReviewId(review_id).then((getCommentsFromApi) => {
      setComments(getCommentsFromApi);
      setIsLoading(false);
    });
  }, [review_id]);
  if (isLoading) return <SpinnerLoad />;
  return (
    <>
      <CommentsForm review_id={review_id} getComments={getComments} />
      <div>
        <hr />
        <h1>COMMENTS</h1>
        <ul>
          {comments.map((comment) => {
            return (
              <li className="comment" key={comment.comment_id}>
                <h2>Author: {comment.author}</h2>
                <p>Comment: {comment.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
