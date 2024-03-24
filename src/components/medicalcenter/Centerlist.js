import {useState,useEffect,useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import Pagination from "react-js-pagination";
import {centerList} from "../../actions/ListAction";
import {Link} from "react-router-dom";
export const Centerlist=()=>{
    const [curpage,setCurpage]=useState(1)
    const [name,setName]=useState('')
    const dispatch=useDispatch()
    const [centertype,setCentertype]=useState('')
    useEffect(()=>{
        dispatch(centerList(curpage,name,centertype))
    },[curpage,name,centertype])
    const center_list=useSelector((state)=> state.centers.center_list.list)
    const totalpage=useSelector((state)=>state.centers.center_list.totalpage)
    const cateChange = (centertype) => {
        setCentertype(centertype);
        setCurpage(1);
    };

    const handleChange = (page) => {
        setCurpage(page);
    };

    const findData = (e) => {
        setName(e.target.value);
    };

    let html= center_list &&center_list.map((vo)=>

        <tr>
            <td className={"text-center"} width={"10%"}>{vo.cno}</td>
            <td width={"20%"}>
                {vo.name}
            </td>
            <td className={"text-center"} width={"35%"}>{vo.address}</td>
            <td className={"text-center"} width={"15%"}>{vo.centertype}</td>
            <td className={"text-center"} width={"10%"}>{vo.phone}</td>
            <td className={"text-center"} width={"20%"}>{vo.opentype}</td>
        </tr>
    )
    return (
        <>
            <div id="center-page">
                <header className="page-head">
                    <div className={"center"} style={{"marginTop": "-70px"}}>
                        <span style={{"fontSize": "70px"}}>Medical Center</span>
                        <p style={{"color": "white"}}>의료 센터</p>
                    </div>
                </header>
            </div>
            <div className={"text-center"} style={{"margin": "30px 0 30px 0"}}>
                <aside>
                    <div className="tag-widget">
                        <div className="tags">
                            <a href="#" className={centertype === '의원' ? 'active' : ''}
                               onClick={() => cateChange('의원')}>의원</a>
                            <a href="#" className={centertype === '약국' ? 'active' : ''}
                               onClick={() => cateChange('약국')}>약국</a>

                        </div>
                    </div>
                </aside>
            </div>
            <div className={"container"} style={{"width": "500px", "marginBottom": "20px"}}>
                <div className="input-group margin-bottom-sm">
                    <input className="form-control" type="text" placeholder="검색어를 입력하세요"
                           value={name} onChange={findData}/>
                    <span className="input-group-addon" >
                                    <i className="fa fa-paper-plane fa-fw"></i>
                                    </span>
                </div>
            </div>
            <div className={"container"} style={{"marginTop": "20px"}}>
                <table className={"table"} style={{"marginTop": "20px"}}>
                    <thead>
                    <tr style={{"borderTop": "1px solid black"}}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"20%"}>병원명</th>
                        <th className={"text-center"} width={"35%"} style={{"whiteSpace":"pre-wrap"}}>주소</th>
                        <th className={"text-center"} width={"15%"}>구분</th>
                        <th className={"text-center"} width={"10%"}>전화번호</th>
                        <th className={"text-center"} width={"20%"}>설립</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                </table>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"text-center"}>
                <Pagination
                    activePage={curpage}
                    itemsCountPerPage={12}
                    totalItemsCount={totalpage}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={handleChange}
                    style={{"width": "100%"}}
                />
            </div>
        </>
    )
}