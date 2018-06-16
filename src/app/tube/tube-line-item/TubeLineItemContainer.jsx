import {connect} from 'react-redux';
import {tubeOperations} from '../duck/index';
import TubeLineItem from "./TubeLineItem";

const mapStateToProps = state => ({
    selectedLine: state.tube.selectedLine,
    stopPoints: state.tube.stopPoints
});

const mapDispatchToProps = {
    getLineStatus: tubeOperations.getLineStatusById,
    getStopPoints: tubeOperations.getTubeStopPointsById
};

const TubeLineItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TubeLineItem);

export default TubeLineItemContainer;
