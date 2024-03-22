import {Link} from "react-router-dom";
export const Home=()=>{
    return(
        <>
            <div className="main-content">
                <section className="bg-main">


                    <div className="container">
                        <div className="welcome-speech" style={{"marginTop": "20px"}}>
                            <h1></h1>
                            <span></span><br/><br/>
                            <Link to="/flower/list" className="btn btn-white" style={{"marginTop": "10px"}}>

                            </Link>
                        </div>
                    </div>

                </section>
            </div>
            <div className="main-content">
                <section className="intro bg-light-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="assets/img/intro.jpg" className="img-responsive center-block" alt="intro"/>
                            </div>

                            <div className="col-md-7">
                                <div className="intro-description">
                                    <h2>avada the best agency for ever</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex,
                                        fermentum vel libero eget interdum semper libero. Curabitur egestas, arcu id
                                        tempor convallis.
                                    </p>

                                    <ul className="points">
                                        <li>
                                            <span>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            Vestibulum pulvinar commodo malesuada.
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            Pellentesque id massa et ligula convallis porta.
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            Vivamus sed nunc sed ligula rhoncus sit amet eu elit.
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            Curabitur in ipsum vel ipsum vehicula congue.
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-slategray">
                                        purchase
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <section className="bg-white feature">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3">
                                <div className="feature-content text-center">
                                    <div className="feature-icon-box">
                                        <div className="feature-icon center-block">
                                            <i className="fa fa-laptop"></i>
                                        </div>
                                    </div>

                                    <div className="feature-info">
                                        <h3 className="feature-heading">Responsive &amp; Multi-purpose</h3>
                                        <p className="feature-description">
                                            Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos
                                            himenaeos.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">
                                <div className="feature-content text-center">
                                    <div className="feature-icon-box">
                                        <div className="feature-icon center-block">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </div>

                                    <div className="feature-info">
                                        <h3 className="feature-heading">Clean &amp; Clear</h3>
                                        <p className="feature-description">
                                            Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos
                                            himenaeos.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">
                                <div className="feature-content text-center">
                                    <div className="feature-icon-box">
                                        <div className="feature-icon center-block">
                                            <i className="fa fa-thumbs-o-up"></i>
                                        </div>
                                    </div>
                                    <div className="feature-info">
                                        <h3 className="feature-heading">Best UX</h3>
                                        <p className="feature-description">
                                            Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos
                                            himenaeos.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">
                                <div className="feature-content text-center">
                                    <div className="feature-icon-box">
                                        <div className="feature-icon center-block">
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>

                                    <div className="feature-info">
                                        <h3 className="feature-heading">Good Feedback</h3>
                                        <p className="feature-description">
                                            Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos
                                            himenaeos.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>

                <section className="bg-light-gray">
                    <div className="container">

                        <div className="headline text-center">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2 className="section-title">show off our portfolio</h2>
                                    <p className="section-sub-title">
                                        absolutely stunning design &amp; functionality
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-item-list">
                            <div className="row">

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio1.jpg"
                                                     className="img-responsive center-block" alt="portfolio1"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Oliver a Note
                                                    </span>
                                                    <span>
                                                        Fashion
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio2.jpg"
                                                     className="img-responsive center-block" alt="portfolio2"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Shift Magazine
                                                    </span>
                                                    <span>
                                                        Photography
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio3.jpg"
                                                     className="img-responsive center-block" alt="portfolio3"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Camp Pine Tree
                                                    </span>
                                                    <span>
                                                        Web Design
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio4.jpg"
                                                     className="img-responsive center-block" alt="portfolio4"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Free Art App Design
                                                    </span>
                                                    <span>
                                                        Photography
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio5.jpg"
                                                     className="img-responsive center-block" alt="portfolio5"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Large Poster Set
                                                    </span>
                                                    <span>
                                                        Marketing
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="portfolio-item">
                                        <div className="item-image">
                                            <a href="#">
                                                <img src="assets/img/portfolio6.jpg"
                                                     className="img-responsive center-block" alt="portfolio6"/>
                                                <div><span><i className="fa fa-plus"></i></span></div>
                                            </a>
                                        </div>

                                        <div className="item-description">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <span className="item-name">
                                                        Skilet Album Cover
                                                    </span>
                                                    <span>
                                                        Business
                                                    </span>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="like">
                                                        <i className="fa fa-heart-o"></i>
                                                        576
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </section>

                <section className="twit-feed">
                    <div className="twit-feed-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div id="twit" className="owl-carousel owl theme">

                                        <div className="item text-center">
                                            <div className="twit-content">
                                                <div className="twit-icon">
                                                    <i className="fa fa-twitter"></i>
                                                </div>
                                                <h3 className="text-capitalize">free stock photos: 74 best sites to find
                                                    Awesome free images</h3>
                                                <p>
                                                    @themewagon <br/>
                                                    2 days ago on Twitter.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item text-center">
                                            <div className="twit-content">
                                                <div className="twit-icon">
                                                    <i className="fa fa-twitter"></i>
                                                </div>
                                                <h3 className="text-capitalize">free stock photos: 74 best sites to find
                                                    Awesome free images</h3>
                                                <p>
                                                    @themewagon <br/>
                                                    2 days ago on Twitter.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item text-center">
                                            <div className="twit-content">
                                                <div className="twit-icon">
                                                    <i className="fa fa-twitter"></i>
                                                </div>
                                                <h3 className="text-capitalize">free stock photos: 74 best sites to find
                                                    Awesome free images</h3>
                                                <p>
                                                    @themewagon <br/>
                                                    2 days ago on Twitter.com
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light-gray">
                    <div className="container">

                        <div className="headline text-center">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2 className="section-title">affordable pricing</h2>
                                    <p className="section-sub-title">
                                        absolutely stunning design &amp; functionality
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="price-box">
                                    <h3>Standard</h3>
                                    <div className="price-info">

                                        <span>15 Projects</span>
                                        <span>30 GB Storage</span>
                                        <span>Ultimate Data Transfer</span>
                                        <span>50 GB Bandwith</span>
                                        <span>Enhanced Security</span>
                                        <span>24/7 Support</span>

                                        <p className="price"><sup>$</sup><span>25</span>/MO</p>

                                    </div>


                                    <a href="#" className="btn pricing-btn">Get Started</a>
                                </div>

                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="price-box">
                                    <h3>Business</h3>
                                    <div className="price-info">

                                        <span>15 Projects</span>
                                        <span>30 GB Storage</span>
                                        <span>Ultimate Data Transfer</span>
                                        <span>50 GB Bandwith</span>
                                        <span>Enhanced Security</span>
                                        <span>24/7 Support</span>

                                        <p className="price"><sup>$</sup><span>35</span>/MO</p>

                                    </div>


                                    <a href="#" className="btn pricing-btn">Get Started</a>
                                </div>

                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="price-box">
                                    <h3>Premium</h3>
                                    <div className="price-info">

                                        <span>15 Projects</span>
                                        <span>30 GB Storage</span>
                                        <span>Ultimate Data Transfer</span>
                                        <span>50 GB Bandwith</span>
                                        <span>Enhanced Security</span>
                                        <span>24/7 Support</span>

                                        <p className="price"><sup>$</sup><span>45</span>/MO</p>

                                    </div>


                                    <a href="#" className="btn pricing-btn">Get Started</a>
                                </div>

                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="price-box">
                                    <h3>Ultimate</h3>
                                    <div className="price-info">

                                        <span>15 Projects</span>
                                        <span>30 GB Storage</span>
                                        <span>Ultimate Data Transfer</span>
                                        <span>50 GB Bandwith</span>
                                        <span>Enhanced Security</span>
                                        <span>24/7 Support</span>

                                        <p className="price"><sup>$</sup><span>55</span>/MO</p>

                                    </div>

                                    <a href="#" className="btn pricing-btn">Get Started</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-light-gray">
                    <div className="container">

                        <div className="headline text-center">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2 className="section-title">testimonials</h2>
                                    <p className="section-sub-title">
                                        absolutely stunning design &amp; functionality
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div id="client-speech" className="owl-carousel owl-theme">

                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client1.jpg" alt="client1"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>

                                            <div className="main-speech">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client2.jpg" alt="client2"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>

                                            <div className="main-speech">
                                                <p>
                                                    It is a long established fact that a reader will be distracted by
                                                    the readable content of a page when looking at its layout. The point
                                                    of using Lorem Ipsum is that.
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client1.jpg" alt="client3"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>

                                            <div className="main-speech">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client2.jpg" alt="client4"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>

                                            <div className="main-speech">
                                                <p>
                                                    It is a long established fact that a reader will be distracted by
                                                    the readable content of a page when looking at its layout. The point
                                                    of using Lorem Ipsum is that.
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client1.jpg" alt="client5"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>

                                            <div className="main-speech">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="client-box">
                                            <div className="about-client">
                                                <img src="assets/img/client2.jpg" alt="client6"/>
                                                <p className="client-intro">technext-ceo</p>
                                            </div>
                                            <div className="main-speech">
                                                <p>
                                                    It is a long established fact that a reader will be distracted by
                                                    the readable content of a page when looking at its layout. The point
                                                    of using Lorem Ipsum is that.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}