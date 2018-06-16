import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {commonOperations} from "../duck";
import './SearchingResultsStyle.css'

class SearchingResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.match.params.query
        };
    }

    componentWillMount() {
        this.props.searchStopPointByQuery(this.state.query);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.query !== this.state.query) {
            this.setState({query: nextProps.match.params.query});
            this.props.searchStopPointByQuery(this.state.query);
        }
    }

    render() {
        const results = this.props.results;
        if (Object.keys(results).length !== 0) {
            return (
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1>Results for "{this.state.query}"</h1>
                        <h3>Total count: {results.total}</h3>
                        <div className="card results-stop-points-container">
                            <ul className="list-group list-group-flush">
                                {results.matches.map((item, index) => (
                                    <Link to={`/stop-point/${item.id}`}>
                                        <li key={index} className="list-group-item"> {item.name} </li>
                                    </Link>))}
                            </ul>
                        </div>
                    </div>
                </div>)
        }
        return null;
    }
}

SearchingResults.propTypes = {
    query: PropTypes.string.isRequired,
    results: PropTypes.shape({
        total: PropTypes.number.isRequired,
        matches: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                modes: PropTypes.arrayOf(PropTypes.string.isRequired),
                name: PropTypes.string.isRequired
            })
        )
    }),
    searchStopPointByQuery: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    results: state.common.results
});

const mapDispatchToProps = {
    searchStopPointByQuery: commonOperations.searchStopPointByQuery
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchingResults);