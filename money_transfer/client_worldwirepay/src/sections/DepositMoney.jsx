import axios from "axios"

import { Link, useNavigate } from "react-router-dom";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import { useEffect, useRef, useState } from "react";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/cardPopups/FeedbackPopup";
import { support_icon } from "../assets/images";
import { useSelector } from "react-redux";
import { server_baseurl } from "../baseUrl";
import { swalFeedbackPopup } from "../components/cardPopups/swalPopup";

const DepositMoney = () =>{
    const navigate = useNavigate();
    const { user_id, email} = useSelector(state => state.userDetails);

    const [option, setOption] = useState("method");
    const [disableBtn, setDisableBtn] = useState(false)
    const buttonRef = useRef(null);
    
    const [transationDetails, setTransationDetails] = useState({ user_id, email, status: "inprogress",
        method: "", amount: "", currency: "USD", termsConditions: false, ref_code: "", type: "deposit"
    })

    useEffect(() =>{
        setTransationDetails({...transationDetails, user_id, email})
    }, [user_id])

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
        console.log(transationDetails);
        let data = JSON.stringify(transationDetails);
        if(!transationDetails.amount) return alert("Enter amount you want to send")
        if(!transationDetails.termsConditions) return alert("Accept terms and conditions")
        if(!transationDetails.ref_code) return alert("Enter reference of the message you received after sending money.")

        setDisableBtn(true);
        const token = JSON.parse(sessionStorage.getItem("userToken"));
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/deposit-money`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            swalFeedbackPopup(transationDetails, navigate);
            // handleClick();
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Sorry, server error. Try again")
            }
        })
        .finally(() =>{
            setDisableBtn(false);
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
                            <img src={support_icon} alt="icon"/>
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
                                        deposit={true}
                                    /> : 
                                option === "confirm"? 
                                    <ConfirmOrder 
                                        onChangeOption = {changeOption}
                                        onHandleTransationDetails = {handleTransationDetails}
                                        transationDetails = {transationDetails}
                                        onHandleTransateMoney= {handleTransateMoney}
                                        onHandleClick = {handleClick}
                                        buttonRef = {buttonRef}
                                        deposit = {true}
                                        disableBtn ={disableBtn}
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
