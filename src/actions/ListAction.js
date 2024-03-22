import {CENTER_LIST} from "./types";
import axios from "axios";

export const centerList=(page,name,centertype)=>dispatch=>{
    axios.get("http://localhost/center/list_redux",{
        params:{
            page:page,
            name:name,
            centertype:centertype
        }
    }).then(res=>{
        console.log(res.data)
        const action={
            type:CENTER_LIST,
            payload:res.data
        }
        dispatch(action)
    })
}