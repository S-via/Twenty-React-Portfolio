// where the links will be stored
// use Link components from react-router-dom
import { Link } from 'react-router-dom';
import React from 'react';


function Navigation() {
    return (
        
        <nav>
            <ul className="flex space-x-4 md:space-x-6">
                <li><Link className="text-white hover:text-blue-500"aria-current="page" to="/"> About Me </Link></li>
                <li ><Link className="text-white hover:text-blue-500"aria-current="page" to="/portfolio"> Portfolio </Link></li>
                <li><Link  className="text-white hover:text-blue-500"aria-current="page"to="/contact"> Contact </Link></li>
                <li ><Link className="text-white hover:text-blue-500"aria-current="page" to="/resume"> Resume</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;