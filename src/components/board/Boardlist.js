import {Fragment,useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList} from "../../actions/BoardAction";

export const BoardList=()=> {
    const [curpage, setCurpage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBoardList(curpage))
    }, [curpage])
    const boardlist=useSelector((state)=>state.boards.board_list.blist)
    const totalpage=useSelector((state)=>state.boards.board_list.totalpage)
    const prevHandler = () => {
        if(curpage>1) {
            setCurpage(curpage - 1)
        }
    }
    const nextHandler = () => {
        if(curpage<totalpage)
        {
            setCurpage(curpage + 1)
        }

    }

    let html=boardlist && boardlist.map((vo)=>
        <tr>
            <td className={"text-center"} width={"10%"}>{vo.no}</td>
            <td width={"45%"}>
                <Link to={"/board/detail/"+vo.no}>
                    {vo.subject}
                </Link>
            </td>
            <td className={"text-center"} width={"15%"}>{vo.name}</td>
            <td className={"text-center"} width={"20%"}>{vo.regdate.substring(0,vo.regdate.indexOf(" "))}</td>
            <td className={"text-center"} width={"10%"}>{vo.hit}</td>
        </tr>
    )

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
            <div className={"text-center"} style={{"margin": "30px 0 30px 0"}}>
                <aside>
                    <div className="tag-widget">

                        <div className="tags">
                            <a href="#">자주 묻는 질문</a>
                            <a href="#">1:1 문의</a>

                        </div>
                    </div>
                </aside>
            </div>
            <div className={"container"} style={{"marginTop": "20px"}}>
                <div className={"row"}>
                            <span style={{"float": "right"}}><Link to={"/board/insert"}>
                                <i className="fas fa-pen"></i>&nbsp;새글 작성하기</Link>
                            </span>
                </div>
                <table className={"table"} style={{"marginTop": "20px"}}>
                    <thead>
                    <tr style={{"borderTop": "1px solid black"}}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"45%"}>제목</th>
                        <th className={"text-center"} width={"15%"}>이름</th>
                        <th className={"text-center"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"10%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                </table>
            </div>
            <div className={"text-center"} style={{"marginBottom": "20px"}}>
                <button className={"btn-sm"} onClick={() => prevHandler()}>이전</button>
                {curpage} page / {totalpage} pages
                <button className={"btn-sm"} onClick={() => nextHandler()}>다음</button>
            </div>
        </Fragment>
    )
}
