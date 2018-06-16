import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to='/tube-lines'>
                    {/*TODO check tag a*/}
                    <p className="nav-link">Home</p>
                </Link>
            </nav>
        );
    }
}

export default NavBar;