import {Link} from "react-router-dom";

export const Header=()=>{
    return(
        <>
            <nav id="mainNavigation" className="navbar navbar-dafault main-navigation" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#main-nav-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <span className="sr-only">Avada Pro Agency</span>
                            <Link to="/">
                                <img src="assets/img/main_logo.png" className="img-responsive center-block" alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="main-nav-collapse">
                        <ul className="nav navbar-nav navbar-right text-uppercase">
                            <li>
                                <Link to="/"><span>home</span></Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/center/list" className="dropdown-toggle"
                                      data-toggle="dropdown"><span>의료센터</span></Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/health/list" className="dropdown-toggle"
                                      data-toggle="dropdown"><span>운동센터</span></Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/board/list" className="dropdown-toggle"
                                      data-toggle="dropdown"><span>자유게시판</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}