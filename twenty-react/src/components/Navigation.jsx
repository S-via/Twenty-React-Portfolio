// where the links will be stored
// use Link components from react-router-dom
import { Link } from 'react-router-dom';
import React from 'react';

// fill in Link with pages logic !!!!!!!!
function Navigation() {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to="/"> About Me </Link></li>
                <li><Link to="/portfolio"> Portfolio </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
                <li><Link to="/resume"> Resume</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;