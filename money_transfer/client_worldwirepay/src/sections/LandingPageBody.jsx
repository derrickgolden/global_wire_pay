
import { Link } from "react-router-dom";
import { ban_frame_1, ban_frame_2, ban_frame_3, ban_frame_4, ban_right, banner_bg } from "../assets/images";
import { client_baseurl } from "../baseUrl";


const LandingPageBody = () =>{
    return(
        <section className="banner-section land-pg">
        <div className="banner-content d-flex align-items-center">
            <div className="container">
                <div className="illu-item">
                    <img className="item-1" src={ban_frame_1} alt="image"/>
                <img className="item-2" src={ban_frame_2} alt="image"/>
                    <img className="item-3" src={ban_frame_3} alt="image"/>
                    <img className="item-4" src={ban_frame_4} alt="image"/>
                </div>
                <div className="row justify-content-start">
                    <div className="col-lg-7 col-md-10">
                        <div className="main-content">
                            <div className="top-area justify-content-center">
                                <h1>Instantly pay the world</h1>
                                <p className="xxlr">A simple and highly secure money transfer around the world</p>
                                <form action="#">
                                    <div className="input-field d-flex">
                                        <input type="email" placeholder="Where are you sending money to"/>
                                        <Link to={`${client_baseurl}/user/login`} 
                                            className="cmn-btn">
                                            <span>Log In</span>
                                        </Link >
                                    </div>
                                </form>
                                <div className="bottom-banner d-flex align-items-center">
                                    <div className="left">
                                        <Link className="icon mfp-iframe popupvideo"
                                            to="#">
                                            <img src="assets/img/video-icon.png" alt="icon"/>
                                        </Link>
                                    </div>
                                    <div className="right d-grid">
                                        <h5>245M+</h5>
                                        <div className="review d-flex align-items-center">
                                            <h6>4.0</h6>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star blank"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-illu">
                    <img className="right-1 wow fadeInUp" src={ban_right} alt="image"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default LandingPageBody;