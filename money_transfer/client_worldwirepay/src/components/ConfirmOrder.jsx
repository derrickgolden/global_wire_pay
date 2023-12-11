import { useRef } from "react";
import { Link } from "react-router-dom";
import { worldWirePaymentDetails } from "../assets/details/paymentDetails";
import { useSelector } from "react-redux";

const ConfirmOrder = ({onChangeOption, onHandleTransationDetails, transationDetails,
                        onHandleTransateMoney, buttonRef, deposit, disableBtn }) =>{
    const userCards = useSelector(state => state.userCardDetails)
    const placeholder = new Date().toLocaleString()

    return(
        <div className="col-xl-8 col-lg-8">
                            <form action="#">
                                <div className="payment-details">
                                    <div className="top-area">
                                        <h6>Confirm  account & amount</h6>
                                        <div className="right">
                                            <a onClick={onChangeOption} id="method"
                                            href="#">
                                                <i className="icon-h-edit"></i>
                                                Edit
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-9 col-lg-12">
                                            <ul className="details-list">
                                                <li>
                                                    <span>Payment System: &nbsp;</span>
                                                    <b> {transationDetails.method}</b>
                                                </li>
                                                <li>
                                                    <span>{deposit ? "Deposit": "Withdraw"} {transationDetails.method} money to: &nbsp;</span>
                                                    {deposit? <b>{worldWirePaymentDetails[transationDetails.method]?.send_to}</b> :
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
                                                (<li className="input-area flex flex-column">
                                                    <p>Enter message code below if applicable or Date and time you have done transaction then confirm.</p> <br />
                                                    <input onChange={onHandleTransationDetails} required 
                                                    className="xxlr" placeholder={placeholder} type="text" name="ref_code"/>
                                                </li>) : null
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkbox-area mt-40 d-flex align-items-center justify-content-center">
                                    <input onChange={onHandleTransationDetails} value={transationDetails.termsConditions}
                                    type="checkbox" id="accept" name="termsConditions"/>
                                    <label htmlFor="accept">I accept <a href="#">terms of use</a></label>
                                </div>
                                <div className="footer-area mt-40">
                                    <Link onClick={onChangeOption} id="amount" to="#"  className="active">Previous Step</Link>
                                    <Link onClick={onHandleTransateMoney} 
                                        style={{pointerEvents: `${disableBtn? "none": ""}`}}
                                        className="active" id="amount" to="#" >Confirm</Link>
                                    
                                    <a ref={buttonRef} style={{display:"none"}} href="#" className="active" 
                                        data-bs-toggle="modal" data-bs-target="#congratulationsMod">Next</a>
                                </div>
                            </form>
        </div>
    )
}

export default ConfirmOrder;