import {Fragment,useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/BoardAction";

function BoardDelete(){
    const {no}=useParams()
    const nav=useNavigate()
    const pwdRef=useRef(null)
    const dispatch=useDispatch()
    const boardDel=()=>{
        let pwd=pwdRef.current.value
        if(pwd.trim()==='')
        {
            pwdRef.current.focus()
            return
        }
        dispatch(boardDelete(no,pwd))
    }

    const del_res=useSelector((state)=>state.boards.res)
    if(del_res==='yes')
    {
        window.location.href="/board/list"
    }
    else if(del_res==='no')
    {
        alert("비밀번호가 일치하지 않습니다")
        pwdRef.current.value=''
        pwdRef.current.focus()
    }
    return (
        <Fragment>
            <div id="commu-page">
                <header className="page-head">
                    <div className="header-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <ol className="breadcrumb">

                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className={"container"} style={{"marginBottom": "20px"}}>
                <div className={"row"} style={{"display": "flex"}}>
                    <table className={"table"} style={{"display": "flex"}}>
                        <tbody>
                        <tr>
                            <td>
                                비밀번호 : <input type={"password"}
                                              style={{"width": "200px", "height": "30px", "marginRight": "10px"}}
                                              ref={pwdRef}/>
                                <input type={"button"} value={"삭제"} className={"btn-xs"}
                                       onClick={() => boardDel()}/>
                                <button className={"btn-sm btn-danger"} onClick={() => nav(-1)}>취소</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default BoardDelete