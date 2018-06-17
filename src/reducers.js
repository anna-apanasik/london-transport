import {combineReducers} from 'redux'
import tubeReducer from "./app/tube/duck";
import commonReducer from "./app/common/duck";

const rootReducer = combineReducers({
    tube: tubeReducer,
    common: commonReducer
});

export default rootReducer;