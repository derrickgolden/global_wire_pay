import { payment_illus, payment_illus_2 } from "../assets/images";

const LandingPageBody = () =>{
    return(
        <section className="banner-section payment">
            <div className="overlay">
                <div className="shape-area">
                    <img src={payment_illus_2} className="obj-1" alt="image"/>
                    <img src={payment_illus} className="obj-2" alt="image"/>
                </div>
                <div className="banner-content">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-7">
                                <div className="main-content">
                                    <div className="top-area section-text">
                                        <h5 className="sub-title">International Payments</h5>
                                        <h1 className="title">Making Global Payments Simple</h1>
                                        <p className="xlr">Start growing your business with our innovative payment solutions.</p>
                                    </div>
                                    <div className="bottom-area d-xxl-flex">
                                        <a href="sign-up.html" className="cmn-btn">Open a Free Account</a>
                                        {/* <a className="cmn-btn active mfp-iframe popupvideo" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">See How it Works</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageBody;