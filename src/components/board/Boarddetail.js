import {Fragment,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchBoardDetail} from "../../actions/BoardAction";

function BoardDetail(){
    const {no} =useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBoardDetail(no))
    },[])
    const boardDetail=useSelector((state)=>state.boards.board_detail)
    return (
        <Fragment>
            <div id="commu-page">
                <header className="page-head">
                    <div className={"center"} style={{"marginTop": "-70px"}}>
                        <span style={{"fontSize": "70px"}}>Q&A Board</span>
                        <p style={{"color": "black"}}>문의 게시판</p>
                    </div>
                </header>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <h3 className={"text-center"}>내용보기</h3>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td className={"text-center"} width={"20%"}>번호</td>
                            <td className={"text-center"} width={"30%"}>{boardDetail.no}</td>
                            <td className={"text-center"} width={"20%"}>작성일</td>
                            <td className={"text-center"} width={"30%"}>{boardDetail.regdate}</td>
                        </tr>
                        <tr>
                            <td className={"text-center"} width={"20%"}>이름</td>
                            <td className={"text-center"} width={"30%"}>{boardDetail.name}</td>
                            <td className={"text-center"} width={"20%"}>조회수</td>
                            <td className={"text-center"} width={"30%"}>{boardDetail.hit}</td>
                        </tr>
                        <tr>
                            <td className={"text-center"} width={"20%"}>제목</td>
                            <td colSpan={"3"}>{boardDetail.subject}</td>
                        </tr>
                        <tr>
                            <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                        <pre style={{
                            "whiteSpace": "pre-wrap",
                            "backgroundColor": "white",
                            "border": "none"
                        }}>{boardDetail.content}</pre>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"row"} style={{"marginBottom": "20px"}}>>
                <div className={"text-center"}>
                    <Link to={"/board/update/" + no}>
                        <button className={"btn-xs"}>수정</button>
                    </Link>
                    <Link to={"/board/delete/" + no}>
                        <button className={"btn-xs"}>삭제</button>
                    </Link>
                    <Link to={"/board/list"}>
                        <button className={"btn-xs"}>목록</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BoardDetail