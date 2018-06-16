import { connect } from 'react-redux';
import { tubeOperations } from '../duck/index';
import TubeLines from "./TubeLines";

const mapStateToProps = state => ({
    lines: state.tube.lines
});

const mapDispatchToProps = {
    getTubeLines: tubeOperations.getTubeLines
};

const TubeLinesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TubeLines);

export default TubeLinesContainer;
