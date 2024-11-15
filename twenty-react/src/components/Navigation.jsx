// where the links will be stored

// use Link components from react-router-dom
import { Link } from 'react-router-dom';

// fill in Link with pages logic !!!!!!!!
function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to=""> About Me </Link></li>
                <li><Link to=""> Portfolio </Link></li>
                <li><Link to=""> Contact </Link></li>
                <li><Link to=""> Resume </Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;