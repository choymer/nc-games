import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/reviews">
            <p>Reviews</p>
            </Link>
            <Categories />
            <Link to="/users">
            <p>List of users</p>
            </Link>
        </nav>
    );
};

export default Navbar;