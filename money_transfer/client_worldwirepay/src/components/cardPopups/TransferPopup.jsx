
const TransferPopup = () =>{
    return(
        <div className="transfer-popup">
        <div className="container-fruid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="transferMod" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <ul className="nav nav-tabs d-none" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="transfer-tab" data-bs-toggle="tab"
                                        data-bs-target="#transfer" type="button" role="tab" aria-controls="transfer"
                                        aria-selected="true">transfer</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="success-tab" data-bs-toggle="tab"
                                        data-bs-target="#success" type="button" role="tab" aria-controls="success"
                                        aria-selected="false">Confirm</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="transfer" role="tabpanel" aria-labelledby="transfer-tab">
                                    <div className="modal-content">
                                        <div className="modal-header mb-60 justify-content-between">
                                            <a href="javascript:void(0)">
                                                <i className="icon-a-left-arrow"></i>
                                                Back
                                            </a>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div className="main-content">
                                            <h4>Confirm Transfer!</h4>
                                            <p>We have sent a verification code on your phone + Number  +44831***932. Please enter verification code below</p>
                                            <form action="javascript:void(0)">
                                                <div className="userInput">
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                </div>
                                                <a href="javascript:void(0)">Don’t receive a code?</a>
                                                <button className="mt-60 confirm">Confirm</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="success" role="tabpanel" aria-labelledby="success-tab">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close d-md-none d-block" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div className="main-content text-center pt-120 pb-120">
                                            <img src="assets/images/icon/success.png" alt="icon"/>
                                            <h3>Success</h3>
                                            <p>Transfer was completed.</p>
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

export default TransferPopup;