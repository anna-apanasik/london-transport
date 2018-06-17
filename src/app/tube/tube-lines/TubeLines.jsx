import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const propTypes = {
    lines: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    getTubeLines: PropTypes.func.isRequired
};

class TubeLines extends Component {

    componentWillMount() {
        this.props.getTubeLines();
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1>Tube Lines</h1>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {this.props.lines.map(item => (
                                <Link to={`/tube-lines/${item.id}`}>
                                    <li key={item.id} className="list-group-item"> {item.name} </li>
                                </Link>))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

TubeLines.propTypes = propTypes;

export default TubeLines;