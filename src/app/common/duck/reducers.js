import types from './types';

const INITIAL_STATE = {
    results: {}
};

const commonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SEARCH_STOP_POINT: {
            const {value} = action;
            return {
                ...state,
                results: value
            };
        }

        default:
            return state;
    }
};

export default commonReducer;