import {HEALTH_LIST,HEALTH_MAIN} from "./types";
import axios from "axios";

export const healthList=(page,type,title)=>dispatch=>{
    axios.get("http://localhost/health/list_redux",{
        params:{
            page:page,
            type:type,
            title:title
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:HEALTH_LIST,
            payload:res.data
        }
        dispatch(action)
    })
}

export const healthMain=()=>dispatch=>{
    axios.get("http://localhost/health/main_redux").then(res=>{
        console.log(res.data)
        const action={
            type:HEALTH_MAIN,
            payload:res.data
        }
        dispatch(action)
    })
}