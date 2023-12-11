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
    const handleSendClick = async () => {
        try {
          if (!isChecked) return alert("Confirm that you have counter checked the details");
      
          setSendDisabled(true);
      
          await handleSubmitTransferDetails();
      
        } catch (error) {
          console.error("Error during handleSubmitTransferDetails:", error);
        } finally {
          setSendDisabled(false);
        }
      };
      
    return(
        <>
        <div className="choose-recipient">
                        <div className="step-area">
                            <span className="mdr">Step 3 of 3</span>
                            <h5>Confirm Your Transfer</h5>
                        </div>
                        <div className="user-select">
                            <div className="single-user">
                                <div className="left d-flex align-items-center">
                                    <div className="img-area">
                                        <img src={avator} alt="image"/>
                                    </div>
                                    <div className="text-area">
                                        <p>{company_name || first_name} {last_name}</p>
                                        <span className="mdr">{email}</span>
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
                    <div className="payment-details m-2">
                        <div className="top-area flex flex-row my-3"
                        style={{display: "flex", justifyContent: 'space-between'}}>
                            <h6>Payment Details</h6>
                            <div className="right" >
                                <Link to="#" style={{color: "#414BA3"}}>
                                    <FaRegEdit />
                                    Edit
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="details-list flex flex-column gap-4">
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
                        <div className="checkbox">
                            <input type="checkbox" checked={isChecked}
                                onChange={handleCheckboxChange} id="confirm"/>
                            <label htmlFor="confirm">I confirm the payment details above</label>
                        </div>
                        <div className="footer-area mt-40">
                            <Link to="#" onClick={() =>setSteps("2")} style={{color: "#414BA3"}}>
                                Previous Step
                            </Link>
                            <Link href="#" onClick={handleSendClick} aria-disabled
                            style={{pointerEvents: `${sendDisabled? "none" : ""}`, color: `${sendDisabled? "gray" : ""}`}} 
                            className="transferMod active" data-bs-toggle="modal" data-bs-target="#transferMod">Send</Link>
                        </div>
                    </form>
        </>
    )
}

export default ConfirmTransfer;