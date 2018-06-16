import types from './types';

const INITIAL_STATE = {
    lines: [],
    selectedLine: {}
};

const tubeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_TUBE_LINES: {
            const {value} = action;
            return {
                ...state,
                lines: value,
                selectedLine: {}
            }
        }

        case types.GET_TUBE_LINE_STATUS_BY_ID: {
            const {value} = action;
            return {
                ...state,
                selectedLine: value
            }
        }

        default:
            return state;
    }
};

export default tubeReducer;