import { Link } from "react-router-dom";
import { ban_frame_1, ban_frame_2, ban_frame_3, ban_frame_4, ban_right, banner_bg } from "../assets/images";

const LandingPageBody = () =>{
    return(
        <section class="banner-section">
        <div class="banner-content d-flex align-items-center">
            <div class="container">
                <div class="illu-item">
                    <img class="item-1" src={ban_frame_1} alt="image"/>
                <img class="item-2" src={ban_frame_2} alt="image"/>
                    <img class="item-3" src={ban_frame_3} alt="image"/>
                    <img class="item-4" src={ban_frame_4} alt="image"/>
                </div>
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="main-content">
                            <div class="top-area justify-content-center">
                                <h1>Instantly pay the world</h1>
                                <p class="xxlr">A simple and highly secure money transfer around the world</p>
                                <form action="#">
                                    <div class="input-field d-flex">
                                        <input type="email" placeholder="Where are you sending money to"/>
                                        <Link to="http://localhost:5173/user/login" class="cmn-btn"><span>Log In</span></Link >
                                    </div>
                                </form>
                                <div class="bottom-banner d-flex align-items-center">
                                    <div class="left">
                                        <a class="icon mfp-iframe popupvideo"
                                            href="https://www.youtube.com/watch?v=MJ0zpsWQ_XM">
                                            <img src="assets/img/video-icon.png" alt="icon"/>
                                        </a>
                                    </div>
                                    <div class="right d-grid">
                                        <h5>245M+</h5>
                                        <div class="review d-flex align-items-center">
                                            <h6>4.0</h6>
                                            <a href="javascript:void(0)"><i class="fas fa-star"></i></a>
                                            <a href="javascript:void(0)"><i class="fas fa-star"></i></a>
                                            <a href="javascript:void(0)"><i class="fas fa-star"></i></a>
                                            <a href="javascript:void(0)"><i class="fas fa-star"></i></a>
                                            <a href="javascript:void(0)"><i class="fas fa-star blank"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-illu">
                    <img class="right-1 wow fadeInUp" src={ban_right} alt="image"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default LandingPageBody;