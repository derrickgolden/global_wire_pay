
const TransferPopup = () =>{
    return(
        <div class="transfer-popup">
        <div class="container-fruid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="modal fade" id="transferMod" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <ul class="nav nav-tabs d-none" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="transfer-tab" data-bs-toggle="tab"
                                        data-bs-target="#transfer" type="button" role="tab" aria-controls="transfer"
                                        aria-selected="true">transfer</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="success-tab" data-bs-toggle="tab"
                                        data-bs-target="#success" type="button" role="tab" aria-controls="success"
                                        aria-selected="false">Confirm</button>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="transfer" role="tabpanel" aria-labelledby="transfer-tab">
                                    <div class="modal-content">
                                        <div class="modal-header mb-60 justify-content-between">
                                            <a href="javascript:void(0)">
                                                <i class="icon-a-left-arrow"></i>
                                                Back
                                            </a>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div class="main-content">
                                            <h4>Confirm Transfer!</h4>
                                            <p>We have sent a verification code on your phone + Number  +44831***932. Please enter verification code below</p>
                                            <form action="javascript:void(0)">
                                                <div class="userInput">
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                    <input type="text"/>
                                                </div>
                                                <a href="javascript:void(0)">Don’t receive a code?</a>
                                                <button class="mt-60 confirm">Confirm</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="success" role="tabpanel" aria-labelledby="success-tab">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close d-md-none d-block" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div class="main-content text-center pt-120 pb-120">
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