import {combineReducers} from 'redux'
import tubeReducer from "./app/tube/duck/reducers";

const rootReducer = combineReducers({
    tube: tubeReducer
});

export default rootReducer;