import actions from './actions';
import * as request from 'superagent';
import appConstants from '../../constants';

const getTubeLinesAction = actions.getTubeLinesAction;
const getLineStatusAction = actions.getLineStatusAction;

const getTubeLines = () => (dispatch) => {
    request
        .get(appConstants.UNFIED_API_URL + '/Line/Mode/tube')
        .accept('application/json')
        .then(res => {
            dispatch(getTubeLinesAction(res.body))
        })
        .catch(error => {
            //TODO error alert
        })
};

const getLineStatusById = (id) => (dispatch) => {
    request
        .get(appConstants.UNFIED_API_URL + `/Line/${id}/Status`)
        .accept('application/json')
        .then(res => {
            dispatch(getLineStatusAction(res.body[0]))
        })
        .catch(error => {
            //TODO error alert
        })
};

export default {getTubeLines, getLineStatusById};