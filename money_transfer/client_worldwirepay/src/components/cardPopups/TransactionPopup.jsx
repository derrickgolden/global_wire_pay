import { user_profile } from "../../assets/images";

const TransactionPopup = ({selectedRow, user_id}) =>{
    const {
        recipient_email, timestamp, amount, status, sender_id, sender_fees, receiver_fees, transfer_id,
        receiver_email, sender_email, receiver_first_name, receiver_last_name, sender_first_name,
        sender_last_name,
    } = selectedRow
    return(
        <div className="transactions-popup">
        <div className="container-fruid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="transactionsMod" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header justify-content-between">
                                    <h5>Transfer Details</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="main-content">
                                    <div className="row">
                                        <div className="col-sm-5 text-center">
                                            <div className="icon-area">
                                                <img src={user_profile} alt="icon"/>
                                                {/* <img src="assets/images/icon/transaction-details-icon.png" alt="icon"/> */}
                                            </div>
                                            <div className="text-area">
                                                <h6>{receiver_email}||{sender_email}</h6>
                                                <p>{new Date(timestamp).toDateString()}</p>
                                                <h3>{amount} USD</h3>
                                                <p className="com">{status}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="right-area">
                                                <h6>Transfer Details</h6>
                                                <ul className="payment-details">
                                                    <li>
                                                        <span>Payment Amount</span>
                                                        <span>{amount} USD</span>
                                                    </li>
                                                    <li>
                                                        <span>Fee</span>
                                                        <span>{sender_id === user_id ? 
                                                            sender_fees || 0 : 
                                                            receiver_fees || 0} USD
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Total Amount</span>
                                                        <span>{amount} USD</span>
                                                    </li>
                                                </ul>
                                                <ul className="payment-info">
                                                    <li>
                                                        <p>Payment {sender_id === user_id? "To":"From"}</p>
                                                        <span className="mdr">{
                                                            sender_id === user_id?`
                                                            ${receiver_first_name} ${receiver_last_name}
                                                            `: `
                                                            ${sender_first_name} ${sender_last_name}
                                                            `
                                                        }
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <p>Payment Description</p>
                                                        <span className="mdr">No description</span>
                                                    </li>
                                                    <li>
                                                        <p>Transaction  ID:</p>
                                                        <span className="mdr">{transfer_id}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TransactionPopup;