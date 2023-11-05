import { Link } from "react-router-dom";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import { useState } from "react";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/FeedbackPopup";

const DepositMoney = () =>{
    const [option, setOption] = useState("method")
    const changeOption = (e) =>{
        setOption(e.target.id)
        console.log(option);
        console.log(option === "amount");
    }
    return(
        <>
        <section className="dashboard-section body-collapse pay step crypto deposit-money">
        <div className="overlay pt-120">
            <div className="container-fruid">
                <div className="main-content">
                    <div className="head-area d-flex align-items-center justify-content-between">
                        <h4>Deposit Money</h4>
                        <div className="icon-area">
                            <img src="assets/images/icon/support-icon.png" alt="icon"/>
                        </div>
                    </div>
                    <div className="row justify-content-between pb-120">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="left-area">
                                <ul>
                                    <li >
                                        <Link onClick={changeOption} id="method"
                                        to="#" className="single-link active">Choose Payment Method</Link>
                                    </li>
                                    <li >
                                        <Link onClick={changeOption} id="amount"
                                        to="#" 
                                        className={`${option === "amount" || "confirm" ? "active " : " "} single-link two`}>
                                            Enter amount
                                        </Link>
                                    </li>
                                    <li >
                                        <Link onClick={changeOption} id="confirm" to="#" 
                                        className={`${option === "confirm" ? "active " : " "} single-link last`}>
                                            Confirm Order
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {   option === "method"? <ChoosePaymentMethod onChangeOption = {changeOption}/> : 
                            option === "amount"? <EnterAmount onChangeOption = {changeOption}/> : 
                            option === "confirm"? <ConfirmOrder onChangeOption = {changeOption}/> : null 
                        }
                    </div>
                </div>
            </div>
        </div>
        </section>
        <FeedbackPopup />
        </>
    )
};

export default DepositMoney
