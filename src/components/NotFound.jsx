import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>LOOKS SOMETHING IS WRONG 404</h1>
      <Link to="/">Click here to go back to Home</Link>
    </div>
  );
};

export default NotFound;
