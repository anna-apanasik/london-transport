import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    }

    onChangeSearchValue(e) {
        this.setState({query: e.target.value});
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to='/tube-lines'>
                    <h4 className="nav-link">Tube Lines</h4>
                </Link>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                           type="search"
                           placeholder="Search"
                           aria-label="Search"
                           onChange={this.onChangeSearchValue}/>
                    <Link to={`/search/${this.state.query}`}>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </Link>
                </form>
            </nav>
        );
    }
}

export default NavBar;