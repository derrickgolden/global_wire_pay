import axios from 'axios';

import { useRef, useState } from "react";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/cardPopups/FeedbackPopup";
import { support_icon } from '../assets/images';
import { useSelector } from 'react-redux';

const WithdrawMoney = () =>{
    const { user_id, balance } = useSelector(state => state.userDetails);
    
    const [option, setOption] = useState("method")

    console.log(option)
    
    const changeOption = (e) =>{
        console.log(transationDetails);
        setOption(e.target.id)
    }
    const buttonRef = useRef(null)
    const [transationDetails, setTransationDetails] = useState({ user_id, status: "inprogress",
        method: "Mpesa", amount: "", currency: "KSH", termsConditions: false, type: "withdraw"
    })

    const handleTransationDetails = (e) =>{
        console.log(e);
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
        console.log(transationDetails);

        if(transationDetails.amount > balance) return alert(
            "You do not have enough money in your account. Deposit first"
        )
        if(!transationDetails.amount) return alert("Enter amount you want to send")
        if(!transationDetails.termsConditions) return alert("Accept terms and conditions")

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/dashboard/withdraw-money',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            handleClick();
        })
        .catch((error) => {
            console.log(error.response);
            alert("Error: withdrawal was not successful")
            // setSignupDetails((obj) =>({...obj, password: ""}))
        });
    }
    return(
        <>
        <section class="dashboard-section body-collapse pay step deposit-money withdraw-money">
        <div class="overlay pt-120">
            <div class="container-fruid">
                <div class="main-content">
                    <div class="head-area d-flex align-items-center justify-content-between">
                        <h4>Withdraw Funds</h4>
                        <div class="icon-area">
                            <img src={support_icon} alt="icon"/>
                        </div>
                    </div>
                    <div class="choose-recipient">
                        <div class="step-area">
                            {/* <span class="mdr">Step {option === "method"? 1 : option === "amount"? 2 : option === "confirm"? 3: null } of 3</span> */}
                        </div>
                    </div>
                    <div class="row pb-120">
                        {   option === "method"? 
                                <ChoosePaymentMethod 
                                    onChangeOption = {changeOption}
                                    onHandleTransationDetails = {handleTransationDetails}
                                    transationDetails = {transationDetails}
                                    withdraw = {true}
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
}

export default WithdrawMoney;