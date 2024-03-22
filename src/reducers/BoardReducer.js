import {FETCH_BOARD_LIST,FETCH_BOARD_UPDATE,FETCH_BOARD_INSERT,FETCH_BOARD_DELETE,BOARD_UPDATE_OK,FETCH_BOARD_DETAIL} from "../actions/types";

const boardState={
    board_list:{},
    res:'',
    update_data:{},
    board_detail:{},
    total:0
}

export default function(state=boardState,action){
    switch (action.type)
    {
        case FETCH_BOARD_LIST:
            return{
                ...state,
                board_list: action.payload
            }
        case FETCH_BOARD_INSERT:
            return {
                ...state,
                res: action.payload
            }
        case FETCH_BOARD_UPDATE:
            return {
                ...state,
                update_data: action.payload
            }
        case FETCH_BOARD_DELETE:
            return {
                ...state,
                res: action.payload
            }
        case FETCH_BOARD_DETAIL:
            return {
                ...state,
                board_detail: action.payload
            }
        case BOARD_UPDATE_OK:
            return {
                ...state,
                res: action.payload
            }
        default:
            return state
    }
}
