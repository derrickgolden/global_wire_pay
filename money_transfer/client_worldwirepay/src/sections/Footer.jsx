import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, twitter, send } from "../assets/images";

const Footer = () =>{
    return(
        <footer className="footer-section">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row wrapper">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-area">
                            <h5>COMPANY</h5>
                            <ul className="items">
                                {/* html for links available */}
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Management Team</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">Customer Reviews</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-area">
                            <h5>Solutions</h5>
                            <ul className="items">
                                {/* html for links available */}
                                <li><Link to="#">Transfer Money Abroad</Link></li>
                                <li><Link to="#">Receive Money</Link></li>
                                <li><Link to="#">Currency Converter</Link></li>
                                <li><Link to="#">Rate Alerts</Link></li>
                                <li><Link to="#">Payment for Shopping</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="single-area">
                            <h5>Support</h5>
                            <ul className="items">
                                {/* html for links available */}
                                <li><Link to="#">Help centre</Link></li>
                                <li><Link to="#">Our fees</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="/user/login">Your account</Link></li>
                                <li><Link to="#">How it works</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-area">
                            <h5>Subscribe to our news</h5>
                            <p>Get the latest happenings and tips from World Pay Wire</p>
                            <form action="#">
                                <div className="subscribe d-flex">
                                    <input type="email" placeholder="Your Email Address"/>
                                    <button><img src={send} alt="icon"/></button>
                                </div>
                            </form>
                            <div className="social">
                                <ul className="d-flex">
                                    <li><a href="#"><img src={facebook} alt="icon"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="icon"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="icon"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="icon"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="main-content">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-8 cus-order d-flex justify-content-md-start justify-content-center">
                            <div className="left-area">
                                <p className="mdr">WORLDWIREPAY © 2022. ALL RIGHTS RESERVED. <span>|</span> Designed by
                                    <a href="https://themeforest.net/user/pixelaxis">Derrick</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                            <div className="right-area">
                                <select name="lang">
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}

export default Footer;