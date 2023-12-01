import { Link, Outlet } from "react-router-dom";
import { bank_account_icon, paylio_account_icon, support_icon } from "../assets/images";
import { client_baseurl } from "../baseUrl";

const TransferMoney = () =>{
    return(
        <>
        <section className="dashboard-section body-collapse pay">
        <div className="overlay pt-120">
            <div className="container-fruid">
                <div className="main-content">
                    <div className="head-area d-flex align-items-center justify-content-between">
                        <h4>Make a Payment</h4>
                        <div className="icon-area">
                            <img src={support_icon} alt="icon"/>
                        </div>
                    </div>
                    <div className="row pb-120">
                        <div className="col-xxl-3 col-xl-4 col-md-5">
                            <Link to={`${client_baseurl}/user/dashboard/transfer-money/world-wire-pay`} 
                            className="single-item">
                                <div className="icon-area">
                                    <img src={paylio_account_icon} alt="icon"/>
                                </div>
                                <p className="mdr" style={{color: "#414BA3", }}>
                                    To a Recipient’s World Wire Pay Account
                                </p>
                                <span className="mdr" style={{color: "#414BA3", }}>Pay for free</span>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-5">
                            <Link to={`${client_baseurl}/user/dashboard/transfer-money/bank-account`}  
                            className="single-item">
                                <div className="icon-area">
                                    <img src={bank_account_icon} alt="icon"/>
                                </div>
                                <p className="mdr" style={{color: "#414BA3", }}>
                                    To a Recipient’s bank account
                                </p>
                                <span className="mdr" style={{color: "#414BA3", }}>
                                    Pay via bank transfer
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Outlet />
        </>
    )
}

export default TransferMoney;