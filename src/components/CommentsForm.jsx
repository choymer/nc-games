import React, { useState } from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { postCommentByReviewId } from "../utils/api";

const CommentsForm = ({ review_id, getComments }) => {
  //importing the user object to use it on the form.

  const { user } = useContext(UserContext);

  //As the user is selected, when a post is submmited the username is filled by default with the user {username:""}

  const [comment, setComment] = useState({
    username: user.username,
    body: "",
  });

  //Handle the changes on the input-text file, copying the object once the submit button has clicked, as we can't mutate the state.

  const handle = (e) => {
    const newComment = { ...comment };
    newComment[e.target.id] = e.target.value;
    setComment(newComment);
  };

  //Handle the submit button.

  const submit = (e) => {
    e.preventDefault();

    postCommentByReviewId(review_id, comment).then((postDataToApi) => {
      setComment({
        username: user.username,
        body: "",
      });
      getComments(); //Calling the function here to fetch all comments.
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" value={user.username} />

        <label htmlFor="body">Comments: </label>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="body"
          value={comment.body}
          autoComplete="off"
        />

        <button>Post comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
