import {CENTER_LIST,CENTER_DETAIL} from "../actions/types";
const centerState={
    center_list:{},
    center_detail:{}
}
export default function centerReducer(state = centerState, action) {
    switch (action.type) {
        case CENTER_LIST:
            return {
                ...state,
                center_list: action.payload
            }
        case CENTER_DETAIL:
            return {
                ...state,
                center_detail: action.payload
            }
        default:
            return state
    }
}