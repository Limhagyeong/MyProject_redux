export const Footer=()=>{
    return(
    <>
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-3 col-sm-6 col-xs-6 footer-widget">
                        <h4>Useful Links</h4>
                        <ul className="row footer-links">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Mobile</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Services</a></li>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <li><a href="#">Organization</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Media</a></li>
                                <li><a href="#">24/7</a></li>
                                <li><a href="#">Right Way</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6 footer-widget">
                        <h4>Recent News</h4>

                        <div className="row footer-news">
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <img src="assets/img/intro.jpg" className="img-responsive center-block"
                                     alt="recent news 1"/>
                            </div>
                            <div className="col-md-8 col-sm-4 col-xs-6">
                                <div className="row">
                                    <p className="text-capitalize">
                                        <a href="#">
                                            a clear website gives more experience to the visitors
                                        </a>
                                    </p>
                                    <p className="news-date">Dec 12,2015</p>
                                </div>
                            </div>
                        </div>


                        <div className="row footer-news">
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <img src="assets/img/intro.jpg" className="img-responsive center-block"
                                     alt="recent news 2"/>
                            </div>
                            <div className="col-md-8 col-sm-4 col-xs-6">
                                <div className="row">
                                    <p className="text-capitalize">
                                        <a href="#">
                                            a clear website gives more experience to the visitors
                                        </a>
                                    </p>
                                    <p className="news-date">Dec 12,2015</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6 footer-widget">
                        <h4>E-News-Letter</h4>

                        <p>Sign up for our mailing list to get latest updates and offers</p>
                        <div className="input-group margin-bottom-sm">
                            <input className="form-control" type="text" placeholder="Email address"/>
                            <span className="input-group-addon">
                                    <i className="fa fa-paper-plane fa-fw"></i>
                                </span>
                        </div>
                        <p>We respect your privacy</p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6 footer-widget">
                        <h4>Avada Agency</h4>

                        <p>
                            HUGE Website Builder is a big library of pre-designed web elements which help you to create
                            website in few minutes.
                        </p>

                        <div className="footer-address">
                            <p>
                                1-800-123-HELLO <br/>
                                example@mail.com
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <ul className="footer-share-button">
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}