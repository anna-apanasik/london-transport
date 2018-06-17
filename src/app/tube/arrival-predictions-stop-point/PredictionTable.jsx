import React from 'react';
import PropTypes from "prop-types";
import Collapse from 'react-css-collapse';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    predictions: PropTypes.arrayOf(
        PropTypes.shape({
            platformName: PropTypes.string.isRequired,
            destinationName: PropTypes.string.isRequired,
            timeToStation: PropTypes.number.isRequired
        })
    ),
};

function PredictionTable({ isOpen, predictions }) {
    return (
        <Collapse isOpen={isOpen}>
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
                {predictions.map((item, index) =>
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.destinationName}</td>
                        <td>{Math.floor(item.timeToStation / 60) + ':' + item.timeToStation % 60}</td>
                        <td>{item.platformName}</td>
                    </tr>)}
                </tbody>
            </table>
        </Collapse>
    );
}

PredictionTable.propTypes = propTypes;

export default PredictionTable;