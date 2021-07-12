import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/reviews">
            <p>Reviews</p>
            </Link>
        </nav>
    );
};

export default Navbar;