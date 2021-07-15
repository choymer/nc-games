import React, { useEffect, useState, useContext } from "react";
import { getUserbyUsername } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { Button } from "react-bootstrap";

const User = () => {
  const { setUser } = useContext(UserContext);
  const [getUser, setGetUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    getUserbyUsername(username).then((getUserFromApi) => {
      setGetUser(getUserFromApi);
      setIsLoading(false);
    });
  }, [username]);

  if (isLoading) return <p>Loading ...</p>;
  return (
    <div className="content">
      <h2>Username: {getUser.username}</h2>
      <p>Name: {getUser.avatar_url}</p>
      <img className="avatar" src={getUser.name} alt={getUser.avatar_url} />
      <Button
        onClick={() => {
          setUser(getUser);
        }}
      >
        Select User
      </Button>
    </div>
  );
};

export default User;
