import {Fragment, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {centerDetail} from "../../actions/DetailAction";

export const CenterDetail=()=>{
    const dispatch=useDispatch()
    const {cno}=useParams()
    useEffect(()=>{
        dispatch(centerDetail(cno))
    },[cno])
    const center_detail=useSelector((state)=> state.centers.center_detail)
    return(
        <Fragment>
            <div id="center-page">
                <header className="page-head">
                    <div className={"center"} style={{"marginTop": "-70px"}}>
                        <span style={{"fontSize": "70px"}}>Medical Center</span>
                        <p style={{"color": "white"}}>의료 센터</p>
                    </div>
                </header>
            </div>
        </Fragment>
    )
}