import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/api";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((getUsersFromApi) => {
      setUsers(getUsersFromApi);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading ...</p>;
  return (
    <div className="content">
      <h1>USER LIST</h1>
      <ul>
        {users.map((user) => {
          return (
            <li className="user-list" key={user.username}>
              <p>User: {user.username}</p>
              <Link to={`/users/${user.username}`}>See more</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
