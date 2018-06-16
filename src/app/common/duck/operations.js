import actions from './actions';
import * as request from 'superagent';
import appConstants from '../../constants';

const searchStopPointByQueryAction = actions.searchStopPointByQuery;

const searchStopPointByQuery = (query) => (dispatch) => {
    request
        .get(appConstants.UNFIED_API_URL + `/StopPoint/Search?query=${query}`)
        .accept('application/json')
        .then(res => {
            dispatch(searchStopPointByQueryAction(res.body))
        })
        .catch(error => {
            //TODO error alert
        })
};

export default {
    searchStopPointByQuery
};