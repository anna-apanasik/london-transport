import {combineReducers} from 'redux'
import tubeReducer from "./app/tube/duck/reducers";
import commonReducer from "./app/common/duck/reducers";

const rootReducer = combineReducers({
    tube: tubeReducer,
    common: commonReducer
});

export default rootReducer;