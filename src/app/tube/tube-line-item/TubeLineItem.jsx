import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './TubeLineItemStyle.css'

class TubeLineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tubeLineId: this.props.match.params.tubeLineId
        };
    }

    componentWillMount() {
        this.props.getLineStatus(this.state.tubeLineId);
        this.props.getStopPoints(this.state.tubeLineId);
    }

    render() {
        //TODO check ?:, if, return statement
        const line = this.props.selectedLine;
        const stopPoints = this.props.stopPoints;
        if (Object.keys(line).length !== 0) {
            const lineStatuses = line.lineStatuses.map(item => item.statusSeverityDescription).join(', ');
            const reasons = line.lineStatuses.map(item => item.reason).join(', ');
            const serviceTypes = line.serviceTypes.map(item => item.name).join(', ');
            return (
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1> {line.name} </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-secondary font-weight-bold">
                                <label> Mode: {line.modeName} </label>
                            </li>
                            <li className="list-group-item list-group-item-secondary font-weight-bold">
                                <label> Status: {lineStatuses}</label>
                            </li>
                            {reasons ?
                                <li className="list-group-item list-group-item-secondary font-weight-bold">
                                    <label> Reasons: {reasons}</label>
                                </li> :
                                null}
                            <li className="list-group-item list-group-item-secondary font-weight-bold">
                                <label> Service types: {serviceTypes}</label>
                            </li>
                            <li className="list-group-item list-group-item-secondary font-weight-bold "
                                data-toggle="collapse"
                                data-target=".stopPoints"
                                aria-expanded="false"
                                aria-controls="stopPoints">
                                <label> Stop points
                                    <span
                                        className="badge badge-secondary stop-points-badge-count"> {stopPoints.length} </span>
                                </label>
                                <div className="collapse stopPoints">
                                    <div className="card card-body stop-points-container">
                                        <ul className="list-group list-group-flush">
                                            {stopPoints.map((item, index) => (
                                                <Link to={`/stop-point/${item.id}`}>
                                                    <li key={index}
                                                        className="list-group-item"> {index + 1}. {item.commonName} </li>
                                                </Link>))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        return null;
    }
}

TubeLineItem.propTypes = {
    selectedLine: PropTypes.shape({
        name: PropTypes.string.isRequired,
        modeName: PropTypes.string.isRequired,
        lineStatuses: PropTypes.arrayOf(
            PropTypes.shape({
                statusSeverityDescription: PropTypes.string.isRequired,
                reason: PropTypes.string,
            })
        ),
        serviceTypes: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        )
    }),
    stopPoints: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            commonName: PropTypes.string.isRequired
        })
    ),
    getTubeLines: PropTypes.func.isRequired,
    getStopPoints: PropTypes.func.isRequired
};

export default TubeLineItem;