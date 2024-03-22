import {FETCH_BOARD_LIST,FETCH_BOARD_UPDATE,FETCH_BOARD_INSERT,FETCH_BOARD_DELETE,BOARD_UPDATE_OK,FETCH_BOARD_DETAIL} from "./types";
import axios from "axios";
export const fetchBoardList=(page)=>dispatch=>{
    axios.get("http://localhost/board/list_reduxboard",{
        params:{
            page:page
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:FETCH_BOARD_LIST,
            payload:res.data
        }
        dispatch(action)
    })
}

export const fetchBoardInsert=(insertData)=>dispatch=>{
    axios.post("http://localhost/board/insert_reduxboard",null,{
        params:insertData
    }).then(res=>{
        const action={
            type:FETCH_BOARD_INSERT,
            payload: res.data
        }
        dispatch(action)
    })
}

export const boardDelete=(no,pwd)=>dispatch=>{
    axios.post("http://localhost/board/delete_reduxboard",null,{
        params:{
            no:no,
            pwd:pwd
        }
    }).then(res=>{
        const action={
            type:FETCH_BOARD_DELETE,
            payload:res.data
        }
        dispatch(action)
    })
}
// 수정하기
export const boardUpdateData=(no)=>dispatch=>{
    axios.get("http://localhost/board/update_reduxboard",{
        params:{
            no:no
        }
    }).then(res=>{
        const action={

            type:FETCH_BOARD_UPDATE,
            payload:res.data
        }
        dispatch(action)
    })
}

export const boardUpdateOk=(updateData)=>dispatch=>{
    axios.post("http://localhost/board/update_ok_reduxboard",null,{
        params:updateData
    }).then(res=>{
        const action={
            type:BOARD_UPDATE_OK,
            payload:res.data
        }
        dispatch(action)
    })
}
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get("http://localhost/board/detail_reduxboard",{
        params:{
            no:no
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:FETCH_BOARD_DETAIL,
            payload: res.data
        }
        dispatch(action)
    })
}