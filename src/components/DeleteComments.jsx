import React from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const DeleteComments = ({ author }) => {
  const { user } = useContext(UserContext);
  console.log(author, "<author");
  console.log(user.username, "<<user");
  return (
    <div>
      {author === user.username ? (
        <Button variant="outline-dark" className="votes-button">
          Delete
        </Button>
      ) : null}
    </div>
  );
};

export default DeleteComments;
