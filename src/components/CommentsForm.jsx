import React, { useState } from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { postCommentByReviewId } from "../utils/api";
import { Form, Button } from "react-bootstrap";

const CommentsForm = ({ review_id, getComments }) => {
  //importing the user object to use it on the form.

  const { user } = useContext(UserContext);
  const [hasError, setHasError] = useState(false);

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

    {
      // const regex = /^[^\s]+(\s+[^\s]+)*$/; Considering to add some regex to validate form is not white spcaces.
      comment.body.length === 0
        ? setHasError(true)
        : postCommentByReviewId(review_id, comment).then((postDataToApi) => {
            setComment({
              username: user.username,
              body: "",
            });
            setHasError(false);
            getComments(); //Calling the function here to fetch all comments.
          });
    }
  };

  return (
    <div>
      <hr />
      <h1>POST A COMMENT</h1>
      <Form
        onSubmit={(e) => {
          submit(e);
        }}
        REVIEW
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label htmlFor="username">Username: </Form.Label>
          <Form.Control
            className="name-input"
            type="text"
            id="username"
            value={user.username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label htmlFor="body">Comments: </Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            type="text"
            id="body"
            value={comment.body}
            autoComplete="off"
            as="textarea"
            rows={3}
          />{" "}
        </Form.Group>
        {hasError ? <p>Please fill the form before submitting</p> : null}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentsForm;
