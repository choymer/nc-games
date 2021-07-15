import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav">
      <div className="nav__left">
        <Link to="/reviews">
          <p className="nav__link">Reviews</p>
        </Link>
        <Categories />
        <Link to="/users">
          <p className="nav__link">User List</p>
        </Link>
      </div>

      <div>
        <Link className="nav__link">
          {/* <span>{user.username}</span> */}
          <img src={user.name} alt={user.avatar_url} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
