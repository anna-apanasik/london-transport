import React, {Component} from 'react';
import PropTypes from "prop-types";

class TubeLineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tubeLineId: this.props.match.params.tubeLineId
        };
    }

    componentWillMount() {
        this.props.getLineStatus(this.state.tubeLineId)
    }

    render() {
        //TODO check ?:, if, return statement
        const line = this.props.selectedLine;
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
                                </li> : null}
                            <li className="list-group-item list-group-item-secondary font-weight-bold">
                                <label> Service types: {serviceTypes}</label>
                            </li>
                        </ul>
                    </div>
                </div>)
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
    })
};

export default TubeLineItem;