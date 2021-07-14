import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const Navbar = () => {

    const { user } = useContext(UserContext)
    // console.log(user)

    return (
        <nav className="nav">
            <div>
            <Link to="/reviews">
            <p>Reviews</p>
            </Link>
            <Categories />
            <Link to="/users">
            <p>List of users</p>
            </Link>
            </div>
            <div>
            <Link>
            <span>{user.username}</span>
            <img src={user.name} alt={user.avatar_url} />
            </Link>
            </div>
            
        </nav>
    );
};

export default Navbar;