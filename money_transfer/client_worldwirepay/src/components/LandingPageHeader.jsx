import { Link } from "react-router-dom";
import { logo, white_logo } from "../assets/images";
import { client_baseurl } from "../baseUrl";

const LandingPageHeader = () =>{
    return(
        <header className="header-section land-pg">
        <div className="overlay">
            <div className="container">
                <div className="row d-flex header-area">
                    <nav className="navbar d-flex navbar-expand-lg navbar-dark">
                        <Link className="navbar-brand" to={client_baseurl}>
                            <img src={white_logo} className="logo" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            {/* <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" href="javascript:void(0)" role="button"
                                        data-bs-toggle="dropdown">
                                        Home
                                    </a>
                                    <ul className="dropdown-menu show">
                                        <li><a className="nav-item" href="index.html">Home 1</a></li>
                                        <li><a className="nav-item" href="index-2.html">Home 2</a></li>
                                        <li><a className="nav-item" href="index-3.html">Home 3</a></li>
                                        <li><a className="nav-item" href="index-4.html">Home 4</a></li>
                                        <li><a className="nav-item" href="index-5.html">Home 5</a></li>
                                        <li><a className="nav-item" href="index-6.html">Home 6</a></li>
                                        <li><a className="nav-item" href="index-7.html">Home 7</a></li>
                                        <li><a className="nav-item" href="index-8.html">Home 8</a></li>
                                        <li><a className="nav-item" href="index-9.html">Home 9</a></li>
                                        <li><a className="nav-item" href="index-10.html">Home 10</a></li>
                                        <li><a className="nav-item" href="index-11.html">Home 11</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index-4.html">Send</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index-5.html">Receive</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button"
                                        data-bs-toggle="dropdown">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu show">
                                        <li><a className="nav-item" href="blog.html">Blog 1</a></li>
                                        <li><a className="nav-item" href="blog-2.html">Blog 2</a></li>
                                        <li><a className="nav-item" href="blog-3.html">Blog 3</a></li>
                                        <li><a className="nav-item" href="blog-4.html">Blog 4</a></li>
                                        <li><a className="nav-item" href="blog-single.html">Blog Single 1</a></li>
                                        <li><a className="nav-item" href="blog-single-2.html">Blog Single 2</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button"
                                        data-bs-toggle="dropdown">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu show mega-menu">
                                        <ul className="dropdown">
                                            <li><a className="nav-item" href="about-us.html">About Us</a></li>
                                            <li><a className="nav-item" href="careers.html">Careers</a></li>
                                            <li><a className="nav-item" href="fees.html">Fees</a></li>
                                            <li><a className="nav-item" href="open-positions.html">Open Positions</a></li>
                                            <li><a className="nav-item" href="our-team.html">Our Team</a></li>
                                            <li><a className="nav-item" href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a className="nav-item" href="countries.html">Countries</a></li>
                                            <li><a className="nav-item" href="team-details.html">Team Details</a></li>
                                            <li><a className="nav-item" href="terms-conditions.html">Terms Conditions</a></li>
                                            <li><a className="nav-item" href="reviews.html">Reviews</a></li>
                                            <li><a className="nav-item" href="how-works.html">How Works</a></li>
                                            <li><a className="nav-item" href="faqs.html">Faq</a></li>
                                            <li><a className="nav-item" href="login.html">Login 1</a></li>
                                            <li><a className="nav-item" href="login-2.html">Login 2</a></li>
                                            <li><a className="nav-item" href="register.html">Register 1</a></li>
                                            <li><a className="nav-item" href="register-2.html">Register 2</a></li>
                                            <li><a className="nav-item" href="forgot-password.html">Forgot Password 1</a></li>
                                            <li><a className="nav-item" href="forgot-password-2.html">Forgot Password 2</a></li>
                                            <li><a className="nav-item" href="reset-password.html">Reset Password</a></li>
                                            <li><a className="nav-item" href="coming-soon.html">Coming Soon</a></li>
                                            <li><a className="nav-item" href="404.html">404</a></li>
                                            <li><a className="nav-item" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button"
                                        data-bs-toggle="dropdown">
                                        Help
                                    </a>
                                    <ul className="dropdown-menu show">
                                        <li><a className="nav-item" href="help-center.html">Help Center 1</a></li>
                                        <li><a className="nav-item" href="help-center-2.html">Help Center 2</a></li>
                                        <li><a className="nav-item" href="help-center-details.html">Help Center Details</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                            <div className="right-area header-action d-flex align-items-center">
                                <Link to={`${client_baseurl}/user/login`} className="cmn-btn login">Login</Link>
                                <Link to={`${client_baseurl}/user/signup`} className="cmn-btn">Sign up</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}

export default LandingPageHeader;