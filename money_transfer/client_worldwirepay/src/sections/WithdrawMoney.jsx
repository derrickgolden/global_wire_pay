import axios from 'axios';

import { useEffect, useRef, useState } from "react";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";
import FeedbackPopup from "../components/cardPopups/FeedbackPopup";
import { support_icon } from '../assets/images';
import { useSelector } from 'react-redux';
import { server_baseurl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';
import { swalFeedbackPopup } from '../components/cardPopups/swalPopup';
import Swal from 'sweetalert2';

const WithdrawMoney = () =>{
    const [disableBtn, setDisableBtn] = useState(false)

    const { user_id, balance } = useSelector(state => state.userDetails);

    const navigate = useNavigate()
    
    const [option, setOption] = useState("method")
    
    const buttonRef = useRef(null)
    const [transationDetails, setTransationDetails] = useState({ user_id, status: "inprogress",
        method: "", amount: "", currency: "USD", termsConditions: false, type: "withdraw"
    })

    useEffect(() =>{
        setTransationDetails({...transationDetails, user_id})
    }, [user_id])

    const changeOption = (e) =>{
        setOption(e.target.id)
    }

    const handleTransationDetails = (e) =>{
        const name = e.target.name
        const value = name === "termsConditions" ? !transationDetails.termsConditions : e.target.value
        setTransationDetails(obj => ({...obj, [name]: value}))
    }
   
    const handleTransateMoney =() =>{
        let data = JSON.stringify(transationDetails);

        if(Number(transationDetails.amount) > Number(balance)) return alert(
            "You do not have enough money in your account. Deposit first"
        )
        if(!transationDetails.amount) return alert("Enter amount you want to send")
        if(!transationDetails.termsConditions) return alert("Accept terms and conditions")

        setDisableBtn(true);

        const token = JSON.parse(sessionStorage.getItem("userToken"));
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/withdraw-money`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            swalFeedbackPopup(transationDetails, navigate);
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Error: withdrawal was not successful")
            }
        }).finally(() =>{
            setDisableBtn(false);
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
                                    buttonRef = {buttonRef}
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
}

export default WithdrawMoney;