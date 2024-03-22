import {CENTER_DETAIL, CENTER_LIST} from "./types";
import axios from "axios";

export const centerDetail=(cno)=>dispatch=>{
    axios.get("http://localhost/center/detail_redux",{
        params:{
            cno:cno
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:CENTER_DETAIL,
            payload:res.data
        }
        dispatch(action)
    })
}