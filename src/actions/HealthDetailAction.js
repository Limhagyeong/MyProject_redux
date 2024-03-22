import {HEALTH_DETAIL} from "./types";
import axios from "axios";

export const healthDetail=(no)=>dispatch=>{
    axios.get("http://localhost/health/detail_redux",{
        params:{
            no:no
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:HEALTH_DETAIL,
            payload:res.data
        }
        dispatch(action)
    })
}