import React, { useEffect, useState, useContext } from "react";
import { getUserbyUsername } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { Button } from "react-bootstrap";
import SpinnerLoad from "./SpinnerLoad";

const User = () => {
  const { setUser } = useContext(UserContext);
  const [getUser, setGetUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    getUserbyUsername(username)
      .then((getUserFromApi) => {
        setGetUser(getUserFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrMessage(err.response.data.msg);
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) return <SpinnerLoad />;
  return (
    <div className="content">
      {errMessage ? (
        <p className="errMsg">{errMessage} 😥</p>
      ) : (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default User;
