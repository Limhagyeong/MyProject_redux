import {Fragment,useState,useEffect,useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchBoardInsert} from "../../actions/BoardAction";

function Boardinsert(){
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    const {nameRef}=useRef(null)
    const {subjectRef}=useRef(null)
    const {contentRef}=useRef(null)
    const {pwdRef}=useRef(null)
    const dispatch=useDispatch()


    const Namechange=(e)=>{
        setName(e.target.value)
    }
    const subchange=(e)=>{
        setSubject(e.target.value)
    }
    const conchange=(e)=>{
        setContent(e.target.value)
    }
    const pwdchange=(e)=>{
        setPwd(e.target.value)
    }

    const insert=()=>{
        if(name.trim()==null)
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==null)
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==null)
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==null)
        {
            pwdRef.current.focus()
            return
        }
        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }
        dispatch(fetchBoardInsert(params))
    }
    // 결과값 받기
    const insert_res=useSelector((state)=>state.boards.res)
    if(insert_res==='yes')
    {
        window.location.href="/board/list"
    }
    else if(insert_res==='no')
    {
        alert("새글 작성에 실패하였습니다")
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
            <div className={"container"}>
                <div className={"row"}>
                    <h3 className={"text-center"}>1:1 문의하기</h3>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td width={"15%"} className={"text-center"}>이름</td>
                            <td width={"85%"}>
                                <input type={"text"} size={"15"} className={"input-sm"}
                                       onChange={Namechange} value={name} ref={nameRef}/>
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>제목</td>
                            <td width={"85%"}>
                                <input type={"text"} size={"50"} className={"input-sm"}
                                       onChange={subchange} value={subject} ref={subjectRef}/>
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>내용</td>
                            <td width={"85%"}>
                                <textarea rows={"10"} cols={"52"} onChange={conchange}
                                          ref={contentRef}>{content}</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>비밀번호</td>
                            <td width={"85%"}>
                                <input type={"password"} size={"15"} className={"input-sm"} onChange={pwdchange}
                                       value={pwd} ref={pwdRef}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={"2"} className={"text-center"}>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"text-center"} style={{"marginBottom": "20px"}}>
                <button className={"btn-xs"} onClick={() => insert()}>작성</button>
                <button className={"btn-xs"} onClick={() => nav(-1)}>취소</button>
            </div>
        </Fragment>
    )
}

export default Boardinsert