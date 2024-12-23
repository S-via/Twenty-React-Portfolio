// where the links will be stored
// use Link components from react-router-dom
import { Link } from 'react-router-dom';
import React from 'react';

// fill in Link with pages logic !!!!!!!!
function Navigation() {
    return (
        
        <nav className='nav-bar'>
            <ul className="nav nav-tabs">
                <li className="nav-item"><Link class="nav-link active" aria-current="page" to="/"> About Me </Link></li>
                <li className="nav-item"><Link class="nav-link active" aria-current="page" to="/portfolio"> Portfolio </Link></li>
                <li className="nav-item"><Link  class="nav-link active" aria-current="page"to="/contact"> Contact </Link></li>
                <li className="nav-item"><Link class="nav-link active" aria-current="page" to="/resume"> Resume</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;