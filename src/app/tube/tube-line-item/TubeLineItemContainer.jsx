import {connect} from 'react-redux';
import {tubeOperations} from '../duck/index';
import TubeLineItem from "./TubeLineItem";

const mapStateToProps = state => ({
    selectedLine: state.tube.selectedLine
});

const mapDispatchToProps = {
    getLineStatus: tubeOperations.getLineStatusById
};

const TubeLineItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TubeLineItem);

export default TubeLineItemContainer;