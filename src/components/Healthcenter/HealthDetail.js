import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useParams,useNavigate} from "react-router-dom";
import {healthDetail} from "../../actions/HealthDetailAction";

export const HealthDetail=()=> {
    const dispatch = useDispatch()
    const {no}=useParams()
    const nav=useNavigate()
    useEffect(() => {
        dispatch(healthDetail(no))
    }, [])
    const health_detail = useSelector((state) => state.healths.health_detail)
    return(
        <Fragment>
            <div className={"container"} style={{"marginBottom":"80px"}}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td width={"30%"} className={"text-center"} rowSpan={"4"}>
                            <img src={health_detail.poster}
                                 style={{"width": "280", "height": "250px"}}
                            />
                        </td>
                        <td colSpan={"2"}>
                            <h3>{health_detail.title}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>주소</td>
                        <td width={"50%"}>{health_detail.address}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>전화</td>
                        <td width={"50%"}>{health_detail.phone}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>영업시간</td>
                        <td width={"50%"}>{health_detail.time}</td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className={"text-right"}>
                            <button className={"btn-sm btn-danger"} onClick={()=>nav("/health/list")}>목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>

            </div>
            </div>
        </Fragment>
    )
}