import {connect} from 'react-redux';
import {tubeOperations} from '../duck/index';
import TubeStopPoint from "./TubeStopPoint";

const mapStateToProps = state => ({
    selectedStopPoint: state.tube.selectedStopPoint
});

const mapDispatchToProps = {
    getStopPointById: tubeOperations.getStopPointById,
};

const TubeStopPointContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TubeStopPoint);

export default TubeStopPointContainer;