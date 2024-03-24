import {HEALTH_LIST,HEALTH_DETAIL,HEALTH_MAIN} from "../actions/types";

const healthState={
    health_list:{},
    health_detail:{},
    health_main:{}
}
export default function healthReducer(state = healthState, action) {
    switch (action.type) {
        case HEALTH_LIST:
            return {
                ...state,
                health_list: action.payload
            }
        case HEALTH_DETAIL:
            return {
                ...state,
                health_detail: action.payload
            }
        case HEALTH_MAIN:
            return {
                ...state,
                health_main: action.payload
            }
        default:
            return state
    }
}