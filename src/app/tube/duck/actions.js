import types from './types';

const getTubeLinesAction = (value) => ({
    type: types.GET_TUBE_LINES,
    value: value
});

const getLineStatusAction = (value) => ({
    type: types.GET_TUBE_LINE_STATUS_BY_LINE_ID,
    value: value
});

const getTubeStopPointsAction = (value) => ({
    type: types.GET_TUBE_STOP_POINTS_BY_LINE_ID,
    value: value
});

const getStopPointByIdAction = (value) => ({
    type: types.GET_STOP_POINT_BY_ID,
    value: value
});

const getArrivalPredictionsByStopPointIdAction = (value) => ({
    type: types.GET_ARRIVAL_PREDICTIONS_BY_STOP_POINT_ID,
    value: value
});

export default {
    getTubeLinesAction,
    getLineStatusAction,
    getTubeStopPointsAction,
    getStopPointByIdAction,
    getArrivalPredictionsByStopPointIdAction
};