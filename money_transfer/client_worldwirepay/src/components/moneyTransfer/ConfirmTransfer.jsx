import { Link } from "react-router-dom";
import { avator } from "../../assets/images"

import { FaCheckDouble,  } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const ConfirmTransfer = ({setSteps, handleSubmitTransferDetails, transferDetails}) =>{
    const {last_name, first_name, company_name, email} = transferDetails.recipient
    const [isChecked, setChecked] = useState(false);
    const [sendDisabled, setSendDisabled] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!isChecked); // Toggle the state (checked to unchecked or vice versa)
    };
    const handleSendClick = () =>{
        if(!isChecked) return alert("Confirm that you have counter checked the details")
        setSendDisabled(true);
        handleSubmitTransferDetails()

        setSendDisabled(false);
    }
    return(
        <>
        <div class="choose-recipient">
                        <div class="step-area">
                            <span class="mdr">Step 3 of 3</span>
                            <h5>Confirm Your Transfer</h5>
                        </div>
                        <div class="user-select">
                            <div class="single-user">
                                <div class="left d-flex align-items-center">
                                    <div class="img-area">
                                        <img src={avator} alt="image"/>
                                    </div>
                                    <div class="text-area">
                                        <p>{company_name || first_name} {last_name}</p>
                                        <span class="mdr">{email}</span>
                                    </div>
                                </div>
                                <div  className="right flex flex-row no-wrap"
                                style={{display: "flex", gap: "8px"}}>
                                    <Link 
                                    style={{color: "#414BA3", }}
                                     to="#">
                                        <FaCheckDouble />
                                        Choose
                                    </Link>
                                    <Link onClick={() =>setSteps("1")} style={{color: "#414BA3", }}
                                     to="#">
                                        <FaRegEdit />
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="payment-details m-2">
                        <div class="top-area flex flex-row my-3"
                        style={{display: "flex", justifyContent: 'space-between'}}>
                            <h6>Payment Details</h6>
                            <div class="right" >
                                <Link to="#" style={{color: "#414BA3"}}>
                                    <FaRegEdit />
                                    Edit
                                </Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6">
                                <ul class="details-list flex flex-column gap-4">
                                    <li style={{display: "flex", justifyContent: 'space-between'}}>
                                        <span>You Send</span>
                                        <b style={{color: "#0c266c"}}>{transferDetails.amount} USD</b>
                                    </li>
                                    <li className="my-2"
                                    style={{display: "flex", justifyContent: 'space-between'}}>
                                        <span>Recipient gets</span>
                                        <b style={{color: "#0c266c"}}>{transferDetails.amount} USD</b>
                                    </li>
                                    <li style={{display: "flex", justifyContent: 'space-between'}}>
                                        <span>E-mail of receiver</span>
                                        <b style={{color: "#0c266c"}}>{transferDetails.recipient.email} </b>
                                    </li>
                                    <li className="my-2"
                                    style={{display: "flex", justifyContent: 'space-between'}}>
                                        <span>Fee</span>
                                        <b style={{color: "#0c266c"}}>Free</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="checkbox">
                            <input type="checkbox" checked={isChecked}
                                onChange={handleCheckboxChange} id="confirm"/>
                            <label for="confirm">I confirm the payment details above</label>
                        </div>
                        <div class="footer-area mt-40">
                            <Link to="#" onClick={() =>setSteps("2")} style={{color: "#414BA3"}}>
                                Previous Step
                            </Link>
                            <Link href="#" onClick={handleSendClick} aria-disabled
                            style={sendDisabled? { pointerEvents: 'none', color: 'gray' } : null} 
                            class="transferMod active" data-bs-toggle="modal" data-bs-target="#transferMod">Send</Link>
                        </div>
                    </form>
        </>
    )
}

export default ConfirmTransfer;