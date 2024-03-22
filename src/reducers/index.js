import {combineReducers} from "redux";

import centerReducer from "./CenterReducer";
import healthReducer from "./HealthReducer";
import boardReducer from "./BoardReducer";

export default combineReducers({
    centers:centerReducer,
    healths:healthReducer,
    boards:boardReducer
})