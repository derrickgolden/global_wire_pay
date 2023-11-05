import { useState } from "react";
import { mpesa_card, visa_card } from "../assets/images";
import ChoosePaymentMethod from "../components/ChoosePaymentMethod";
import LinkedPayments from "../components/LickedPayments";
import EnterAmount from "../components/EnterAmount";
import ConfirmOrder from "../components/ConfirmOrder";

const WithdrawMoney = () =>{
    const [option, setOption] = useState("method")
    
    const changeOption = (e) =>{
        setOption(e.target.id)
    }
    return(
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
                            <span class="mdr">Step {option === "method"? 1 : option === "amount"? 2 : option === "confirm"? 3: null } of 3</span>
                        </div>
                    </div>
                    <div class="row pb-120">
                        {   option === "method"? <ChoosePaymentMethod onChangeOption = {changeOption}/> : 
                            option === "amount"? <EnterAmount onChangeOption = {changeOption}/> : 
                            option === "confirm"? <ConfirmOrder onChangeOption = {changeOption}/> : null 
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WithdrawMoney;