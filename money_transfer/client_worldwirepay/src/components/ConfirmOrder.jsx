import { useRef } from "react";
import { Link } from "react-router-dom";
import { worldWirePaymentDetails } from "../assets/details/paymentDetails";
import { useSelector } from "react-redux";

const ConfirmOrder = ({onChangeOption, onHandleTransationDetails, transationDetails,
                        onHandleTransateMoney, buttonRef, deposit }) =>{
    const userCards = useSelector(state => state.userCardDetails)
    return(
        <div class="col-xl-8 col-lg-8">
                            <form action="#">
                                <div class="payment-details">
                                    <div class="top-area">
                                        <h6>Confirm  account & amount</h6>
                                        <div class="right">
                                            <a onClick={onChangeOption} id="method"
                                            href="javascript:void(0)">
                                                <i class="icon-h-edit"></i>
                                                Edit
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-9 col-lg-12">
                                            <ul class="details-list">
                                                <li>
                                                    <span>Payment System: &nbsp;</span>
                                                    <b> {transationDetails.method}</b>
                                                </li>
                                                <li>
                                                    <span>{deposit ? "Deposit": "Withdraw"} {transationDetails.method} money to: &nbsp;</span>
                                                    {deposit? <b>{worldWirePaymentDetails[transationDetails.method].send_to}</b> :
                                                    <b>{userCards.map((userCard, i)=> {
                                                        if(userCard.email_or_id && userCard.card_name === transationDetails.method ){
                                                            return userCard.email_or_id;
                                                        }
                                                        if(userCard.acc_no && userCard.card_name === transationDetails.method ){
                                                            return userCard.acc_no;
                                                        }
                                                    })}</b>
                                                    }
                                                </li>
                                                {
                                                    deposit? 
                                                (<li>
                                                    <span>Name of the account: &nbsp;</span>
                                                    <b> {worldWirePaymentDetails[transationDetails.method].name} </b>
                                                </li>) : null
                                                }
                                                <li>
                                                    <span>Amount to {deposit? "Deposit": "Withdraw"}: &nbsp;</span>
                                                    <b> {transationDetails.amount} {transationDetails.currency}</b>
                                                </li>
                                                {
                                                    deposit? 
                                                (<li class="input-area">
                                                    <p>Enter message code then confirm.</p> <br />
                                                    <input onChange={onHandleTransationDetails} required 
                                                    class="xxlr" placeholder="Enter ref code" type="text" name="ref_code"/>
                                                </li>) : null
                                                }
                                                {/* <li>
                                                    <span>E-mail</span>
                                                    <b><a href="https://pixner.net/cdn-cgi/l/email-protection" 
                                                    class="__cf_email__" data-cfemail="7711121b1e141e165905121e1337120f161a071b125914181a">
                                                        [email&#160;protected]</a>
                                                    </b>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkbox-area mt-40 d-flex align-items-center justify-content-center">
                                    <input onChange={onHandleTransationDetails} value={transationDetails.termsConditions}
                                    type="checkbox" id="accept" name="termsConditions"/>
                                    <label htmlFor="accept">I accept <a href="javascript:void(0)">terms of use</a></label>
                                </div>
                                <div class="footer-area mt-40">
                                    <Link onClick={onChangeOption} id="amount" to="javascript:void(0)"  class="active">Previous Step</Link>
                                    <Link onClick={onHandleTransateMoney} class="active" id="amount" to="javascript:void(0)" >Confirm</Link>
                                    
                                    <a ref={buttonRef} style={{display:"none"}} href="javascript:void(0)" class="active" data-bs-toggle="modal" data-bs-target="#congratulationsMod">Next</a>
                                </div>
                            </form>
        </div>
    )
}

export default ConfirmOrder;