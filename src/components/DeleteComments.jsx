import React from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { DeleteCommentByCommentId } from "../utils/api";

const DeleteComments = ({ author, comment_id, getComments }) => {
  const { user } = useContext(UserContext);

  const deleteComment = () => {
    DeleteCommentByCommentId(comment_id);
  };

  return (
    <div>
      {author === user.username ? (
        <Button
          variant="outline-dark"
          className="votes-button"
          onClick={deleteComment}
        >
          Delete
        </Button>
      ) : null}
    </div>
  );
};

export default DeleteComments;
