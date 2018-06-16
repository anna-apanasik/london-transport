import React, {Component} from 'react'
import PropTypes from "prop-types";
import './TubeStopPointStyle.css'
import ArrivalPredictionsStopPoint from "../arrival-predictions-stop-point/ArrivalPredictionsStopPoint";

class TubeStopPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tubeStopPointId: this.props.match.params.tubeStopPointId
        };
    }

    componentWillMount() {
        this.props.getStopPointById(this.state.tubeStopPointId)
    }

    render() {
        const stopPoint = this.props.selectedStopPoint;
        if (Object.keys(stopPoint).length !== 0) {
            return (
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1> {stopPoint.commonName} </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-secondary font-weight-bold">
                                <label> Mode: {stopPoint.modes.join(', ')} </label>
                            </li>
                            <li className="list-group-item list-group-item-dark list-group-item-action font-weight-bold"
                                data-toggle="collapse"
                                data-target=".additionalProperties"
                                aria-expanded="false"
                                aria-controls="additionalProperties">
                                <label> Facilities </label>
                                <div className="collapse additionalProperties">
                                    <div className="card card-body additional-properties-container">
                                        <ul className="list-group list-group-flush">
                                            {stopPoint.additionalProperties.map((item, index) => item.category === TubeStopPoint.FACILITY_CATEGORY ?
                                                <li className="list-group-item"
                                                    key={index}> {item.key} : {item.value} </li> :
                                                null)}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {stopPoint.modes.map((item, index) =>
                                <li className="list-group-item list-group-item-secondary font-weight-bold" key={index}>
                                    <ArrivalPredictionsStopPoint
                                        stopPointId={stopPoint.id}
                                        mode={item}/>
                                </li>)}
                        </ul>
                    </div>
                </div>
            );
        }
        return null;
    }
}

TubeStopPoint.propTypes = {
    selectedStopPoint: PropTypes.shape({
        id: PropTypes.string.isRequired,
        commonName: PropTypes.string.isRequired,
        modes: PropTypes.arrayOf(PropTypes.string),
        status: PropTypes.bool.isRequired,
        additionalProperties: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string,
            key: PropTypes.string,
            value: PropTypes.string
        }))
    }),
    getStopPointById: PropTypes.func.isRequired
};

TubeStopPoint.FACILITY_CATEGORY = 'Facility';

export default TubeStopPoint;