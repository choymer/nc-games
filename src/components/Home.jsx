import React from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>WELCOME TO NC GAMES</h1>

      <p className="welcome-para">
        Hello {user.avatar_url}, how are you today? 😄
      </p>

      <p className="welcome-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default Home;
