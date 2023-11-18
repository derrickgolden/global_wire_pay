import { user_profile } from "../../assets/images";

const TransactionPopup = ({selectedRow}) =>{
    return(
        <div class="transactions-popup">
        <div class="container-fruid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="modal fade" id="transactionsMod" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header justify-content-between">
                                    <h5>Transaction Details</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <div class="main-content">
                                    <div class="row">
                                        <div class="col-sm-5 text-center">
                                            <div class="icon-area">
                                                <img src={user_profile} alt="icon"/>
                                                {/* <img src="assets/images/icon/transaction-details-icon.png" alt="icon"/> */}
                                            </div>
                                            <div class="text-area">
                                                <h6>{selectedRow.recipient_email}</h6>
                                                <p>{new Date(selectedRow.timestamp).toDateString()}</p>
                                                <h3>{selectedRow.amount} USD</h3>
                                                <p class="com">{selectedRow.status}</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="right-area">
                                                <h6>Transaction Details</h6>
                                                <ul class="payment-details">
                                                    <li>
                                                        <span>Payment Amount</span>
                                                        <span>{selectedRow.amount} USD</span>
                                                    </li>
                                                    <li>
                                                        <span>Fee</span>
                                                        <span>0.00 USD</span>
                                                    </li>
                                                    <li>
                                                        <span>Total Amount</span>
                                                        <span>{selectedRow.amount} USD</span>
                                                    </li>
                                                </ul>
                                                <ul class="payment-info">
                                                    <li>
                                                        <p>Payment From</p>
                                                        <span class="mdr">{selectedRow.sender_id}</span>
                                                    </li>
                                                    <li>
                                                        <p>Payment Description</p>
                                                        <span class="mdr">No description</span>
                                                    </li>
                                                    <li>
                                                        <p>Transaction  ID:</p>
                                                        <span class="mdr">{selectedRow.transfer_id}</span>
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