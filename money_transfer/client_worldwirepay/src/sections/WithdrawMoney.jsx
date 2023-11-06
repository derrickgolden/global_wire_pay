import axios from 'axios';

import { useRef, useState } from "react";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/FeedbackPopup";

const WithdrawMoney = () =>{
    const [option, setOption] = useState("method")

    console.log(option)
    
    const changeOption = (e) =>{
        console.log(transationDetails);
        setOption(e.target.id)
    }
    const buttonRef = useRef(null)
    const [transationDetails, setTransationDetails] = useState({ user_id: 1, status: "inprogress",
        method: "Mpesa", amount: "", currency: "KSH", termsConditions: false
    })

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
        <section class="dashboard-section body-collapse pay step deposit-money withdraw-money">
        <div class="overlay pt-120">
            <div class="container-fruid">
                <div class="main-content">
                    <div class="head-area d-flex align-items-center justify-content-between">
                        <h4>Withdraw Funds</h4>
                        <div class="icon-area">
                            <img src="assets/images/icon/support-icon.png" alt="icon"/>
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