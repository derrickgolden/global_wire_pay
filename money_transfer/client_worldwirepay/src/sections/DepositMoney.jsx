import axios from "axios"

import { Link } from "react-router-dom";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import { useRef, useState } from "react";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/FeedbackPopup";

const DepositMoney = () =>{
    const [option, setOption] = useState("method");
    const buttonRef = useRef(null)
    const [transationDetails, setTransationDetails] = useState({ user_id: 1, status: "inprogress",
        method: "Mpesa", amount: "", currency: "KSH", termsConditions: false
    })
    const changeOption = (e) =>{
        console.log(transationDetails);
        setOption(e.target.id)
    }
    const handleTransationDetails = (e) =>{
        const name = e.target.name
        const value = name === "termsConditions" ? !transationDetails.termsConditions : e.target.value
        console.log(name,value)
        setTransationDetails(obj => ({...obj, [name]: value}))
    }
    const handleClick = () => {
        buttonRef.current.click(); // Programmatically trigger a click event
    };
    const handleTransateMoney =() =>{
        let data = JSON.stringify(transationDetails);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/dashboard/deposit-money',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            handleClick();
            // setSignupDetails((obj) =>({...obj, password: ""}))
            // navigate('/user/login', {replace: true});
            // return redirect('user/login')
        })
        .catch((error) => {
            console.log(error.response);
            // setSignupDetails((obj) =>({...obj, password: ""}))
        });
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
                            {   
                                option === "method"? 
                                    <ChoosePaymentMethod 
                                        onChangeOption = {changeOption}
                                        onHandleTransationDetails = {handleTransationDetails}
                                        transationDetails = {transationDetails}
                                    /> : 
                                option === "amount"? 
                                    <EnterAmount 
                                        onChangeOption = {changeOption}
                                        onHandleTransationDetails = {handleTransationDetails}
                                        transationDetails = {transationDetails}
                                    /> : 
                                option === "confirm"? 
                                    <ConfirmOrder 
                                        onChangeOption = {changeOption}
                                        onHandleTransationDetails = {handleTransationDetails}
                                        transationDetails = {transationDetails}
                                        onHandleTransateMoney= {handleTransateMoney}
                                        onHandleClick = {handleClick}
                                        buttonRef = {buttonRef}
                                    /> : null 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FeedbackPopup 
            transationDetails = {transationDetails}
        />
        </>
    )
};

export default DepositMoney
