import types from './types';

const searchStopPointByQuery = (value) => ({
    type: types.SEARCH_STOP_POINT,
    value: value
});

export default {
    searchStopPointByQuery
};