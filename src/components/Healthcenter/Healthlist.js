import {useState, useEffect, useRef, Fragment} from "react";
import {useSelector,useDispatch} from "react-redux";
import Pagination from "react-js-pagination";
import {healthList} from "../../actions/HealthListAction";
import {Link} from "react-router-dom";
import {centerList} from "../../actions/ListAction";
export const Healthlist=()=>{
    const [curpage,setCurpage]=useState(1)
    const [title,setTitle]=useState('')
    const dispatch=useDispatch()
    const [type,setType]=useState(1)
    useEffect(()=>{
        dispatch(healthList(curpage,type,title))
    },[curpage,type,title])
    const health_list=useSelector((state)=> state.healths.health_list.hList)
    const totalpage=useSelector((state)=>state.healths.health_list.totalpage)
    const typeChange = (type) => {
        if(type==='서울 요가센터')
        {
            setType(1)
        }
        if(type==='서울 필라테스센터')
        {
            setType(2)
        }if(type==='인천 요가센터')
        {
            setType(3)
        }if(type==='인천 필라테스센터')
        {
            setType(4)
        }
        setCurpage(1);
    };

    const handleChange = (page) => {
        setCurpage(page);
    };

    const findData = (e) => {
        setTitle(e.target.value);
    };

    let html= health_list &&health_list.map((vo) =>

        <div className="col-md-3 col-sm-6" >
            <div className="portfolio-item">
                <div className="item-image">
                    <Link to={"/health/detail/"+vo.no}>
                        <img src={vo.poster} className="img-responsive center-block"
                             alt="portfolio1"/>
                        <div><span><i className="fa fa-plus"></i></span></div>
                    </Link>
                </div>

                <div className="item-description">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="item-name">{vo.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Fragment>
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
                            <a href="#" className={type === '서울 요가센터' ? 'active' : ''}
                               onClick={() => typeChange('서울 요가센터')}>서울 요가센터</a>
                            <a href="#" className={type === '서울 필라테스센터' ? 'active' : ''}
                               onClick={() => typeChange('서울 필라테스센터')}>서울 필라테스센터</a>
                            <a href="#" className={type === '인천 요가센터' ? 'active' : ''}
                               onClick={() => typeChange('인천 요가센터')}>인천 요가센터</a>
                            <a href="#" className={type === '인천 필라테스센터' ? 'active' : ''}
                               onClick={() => typeChange('인천 필라테스센터')}>인천 필라테스센터</a>

                        </div>
                    </div>
                </aside>
            </div>
            <div className={"container"} style={{"width": "500px", "marginBottom": "20px"}}>
                <div className="input-group margin-bottom-sm">
                    <input className="form-control" type="text" placeholder="검색어를 입력하세요"
                           value={title} onChange={findData}/>
                    <span className="input-group-addon">
                                    <i className="fa fa-paper-plane fa-fw"></i>
                                    </span>
                </div>
            </div>
            <div className="container" style={{"width": "1500px"}}>
                <div className="col-md-9">
                    <div className="portfolio-item-list">
                        <div className="row">
                            {html}
                        </div>
                    </div>
                </div>
                <aside className="col-md-3">

                    <div className="tab-widget">
                        <h4>Tab Widget</h4>
                        <div className="nav-tabs-default">
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#popular" data-toggle="tab">
                                        <div className="tab-widget-title">Popular Post</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#recent" data-toggle="tab">
                                        <div className="tab-widget-title">Recent Post</div>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active" id="popular">
                                    <div className="popular-post">
                                        <img src="assets/img/tab-widget2.jpg" className="img-responsive center-block"/>
                                        <h5 className="post-widget-heading">Image Post Title here</h5>
                                        <span className="date">may 24,2015</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="popular-post">
                                        <img src="assets/img/tab-widget1.jpg" className="img-responsive center-block"/>
                                        <h5 className="post-widget-heading">Image Post Title here</h5>
                                        <span className="date">may 24,2015</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>


                                <div className="tab-pane" id="recent">
                                    <div className="recent-post">
                                        <img src="assets/img/tab-widget1.jpg" className="img-responsive center-block"/>
                                        <h5 className="post-widget-heading">Image Post Title here</h5>
                                        <span className="date">may 24,2015</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="recent-post">
                                        <img src="assets/img/tab-widget2.jpg" className="img-responsive center-block"/>
                                        <h5 className="post-widget-heading">Image Post Title here</h5>
                                        <span className="date">may 24,2015</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
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
        </Fragment>
    )
}