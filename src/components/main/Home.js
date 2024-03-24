import {useEffect,Fragment} from "react";
import {useSelector,useDispatch} from "react-redux";
import {healthMain} from "../../actions/HealthListAction";
import {Link} from "react-router-dom";

export const Home=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(healthMain())
    },[])
    const health_main=useSelector((state)=> state.healths.health_main)
    let html= health_main &&health_main.map((vo) =>
        <Fragment>
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
                    <div className="item-image">
                        <Link to={"/health/detail/"+vo.no}>
                            <img src={vo.poster}
                                 className="img-responsive center-block" alt="portfolio1"
                                 style={{"width": "100%", "height": "100%"}}
                            />
                            <div><span><i className="fa fa-plus"></i></span></div>
                        </Link>
                    </div>
                    <div className="item-description">
                        <div className="row">
                            <div className="col-xs-12" style={{"whiteSpace":"pre-wrap"}}>
                                <span className="item-name">{vo.title}</span>
                                <span>{vo.address}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    return (
        <>
            <div className="main-content">
                <section className="bg-main">


                    <div className="container">
                        <div className="welcome-speech" style={{"marginTop": "20px"}}>
                            <h1>stand with you<br/>on your path to wellness</h1>
                            <span>건강한 삶을 맞이하는 날을 함께합니다</span><br/><br/>
                            <Link to="/health/list" className="btn btn-white" style={{"marginTop": "10px"}}>
                                For wellness
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
            <div className="main-content">
                <section className="bg-light-gray">
                    <div className="container">

                        <div className="headline text-center">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2 className="section-title">Health Center</h2>
                                    <p className="section-sub-title">
                                    인기 운동센터 Top 6
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-item-list" >
                            <div className="row">
                                {html}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}