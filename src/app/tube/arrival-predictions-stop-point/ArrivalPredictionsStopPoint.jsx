import React, {Component} from 'react';
import {connect} from 'react-redux';
import {tubeOperations} from '../duck/index';
import PropTypes from "prop-types";
import Collapse from 'react-css-collapse';
import './ArrivalPredictionsStopPointStyle.css'

class ArrivalPredictionsStopPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inboundDirectionPredictions: [],
            outboundDirectionPredictions: [],
            hasPredictions: false,
            isOpenInbound: false,
            isOpenOutbound: false
        };
    }

    componentWillMount() {
        this.props.getArrivalPredictions(this.props.stopPointId);
    }

    componentWillReceiveProps(nextProps) {
        let arrivalPredictions = nextProps.arrivalPredictions.filter(item => item.modeName === nextProps.mode)

        if (arrivalPredictions.length === 0) {
            this.setState({
                hasPredictions: false
            });
            return;
        }

        if (arrivalPredictions.length !== 0) {
            let inbound = arrivalPredictions.filter(item => item.direction === ArrivalPredictionsStopPoint.INBOUND_DIRECTION),
                outbound = arrivalPredictions.filter(item => item.direction === ArrivalPredictionsStopPoint.OUTBOUND_DIRECTION);

            inbound.sort((a, b) => a.timeToStation - b.timeToStation);
            outbound.sort((a, b) => a.timeToStation - b.timeToStation);

            this.setState({
                inboundDirectionPredictions: inbound,
                outboundDirectionPredictions: outbound,
                hasPredictions: true
            });
        }
    }

    render() {
        return (
            <div>
                <label> Arrival predictions for {this.props.mode}</label>
                <div className="arrival-predictions-title">
                    <button className="btn btn-outline-dark btn-sm btn-custom-style"
                            type="button"
                            onClick={() => this.setState({
                                isOpenInbound: !this.state.isOpenInbound,
                                isOpenOutbound: false
                            })}
                            disabled={!this.state.hasPredictions}> Inbound
                    </button>

                    <button className="btn btn-outline-dark btn-sm btn-custom-style"
                            type="button"
                            onClick={() => this.setState({
                                isOpenOutbound: !this.state.isOpenOutbound,
                                isOpenInbound: false
                            })}
                            disabled={!this.state.hasPredictions}> Outbound
                    </button>
                </div>
                <div className="row">
                    <div className="col arrival-predictions-table">
                        <Collapse isOpen={this.state.isOpenInbound}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Time to station</th>
                                    <th scope="col">Platform</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.inboundDirectionPredictions.map((item, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.destinationName}</td>
                                        <td>{Math.floor(item.timeToStation / 60) + ':' + item.timeToStation % 60}</td>
                                        <td>{item.platformName}</td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </Collapse>

                        <div className="arrival-predictions-table">
                            <Collapse isOpen={this.state.isOpenOutbound}>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Destination</th>
                                        <th scope="col">Time to station</th>
                                        <th scope="col">Platform</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.outboundDirectionPredictions.map((item, index) =>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.destinationName}</td>
                                            <td>{Math.floor(item.timeToStation / 60) + ':' + item.timeToStation % 60}</td>
                                            <td>{item.platformName}</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

ArrivalPredictionsStopPoint.propTypes = {
    stopPointId: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    arrivalPredictions: PropTypes.arrayOf(
        PropTypes.shape({
            modeName: PropTypes.string.isRequired,
            platformName: PropTypes.string.isRequired,
            direction: PropTypes.string.isRequired,
            destinationName: PropTypes.string.isRequired,
            currentLocation: PropTypes.string.isRequired,
            timeToStation: PropTypes.number.isRequired,
            expectedArrival: PropTypes.string.isRequired
        })
    ),
    getArrivalPredictions: PropTypes.func.isRequired
};

ArrivalPredictionsStopPoint.INBOUND_DIRECTION = 'inbound';
ArrivalPredictionsStopPoint.OUTBOUND_DIRECTION = 'outbound';

const mapStateToProps = state => ({
    arrivalPredictions: state.tube.arrivalPredictions
});

const mapDispatchToProps = {
    getArrivalPredictions: tubeOperations.getArrivalPredictionsByStopPointId
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrivalPredictionsStopPoint);