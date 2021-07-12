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
        </nav>
    );
};

export default Navbar;