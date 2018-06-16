import types from './types';

const INITIAL_STATE = {
    lines: [],
    selectedLine: {},
    stopPoints: [],
    selectedStopPoint: {},
    arrivalPredictions: []
};

const tubeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_TUBE_LINES: {
            const {value} = action;
            return {
                ...state,
                lines: value,
                selectedLine: {},
                stopPoints: []
            };
        }

        case types.GET_TUBE_LINE_STATUS_BY_LINE_ID: {
            const {value} = action;
            return {
                ...state,
                selectedLine: value
            };
        }

        case types.GET_TUBE_STOP_POINTS_BY_LINE_ID: {
            const {value} = action;
            return {
                ...state,
                stopPoints: value
            };
        }

        case types.GET_STOP_POINT_BY_ID: {
            const {value} = action;
            return {
                ...state,
                selectedStopPoint: value
            }
        }

        case types.GET_ARRIVAL_PREDICTIONS_BY_STOP_POINT_ID: {
            const {value} = action;
            return {
                ...state,
                arrivalPredictions: value
            }
        }

        default:
            return state;
    }
};

export default tubeReducer;