
const CardDetailsPopup = () =>{
    return(
        <div class="card-popup">
        <div class="container-fruid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="modal fade" id="cardMod" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header justify-content-center">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <div class="main-content">
                                    <div class="top-area mb-40 mt-40 text-center">
                                        <div class="card-area mb-30">
                                            <img src="assets/images/visa-card-2.png" alt="image"/>
                                        </div>
                                        <div class="text-area">
                                            <h5>Paylio payment Card </h5>
                                            <p>Linked: 01 Jun 2021</p>
                                        </div>
                                    </div>
                                    <div class="tab-area d-flex align-items-center justify-content-between">
                                        <ul class="nav nav-tabs mb-30" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="btn-link" id="cancel-tab" data-bs-toggle="tab"
                                                    data-bs-target="#cancel" type="button" role="tab"
                                                    aria-controls="cancel" aria-selected="false">
                                                    <img src="assets/images/icon/limit.png" alt="icon"/>
                                                    Set transfer limit
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="d-none" id="limit-tab" data-bs-toggle="tab"
                                                    data-bs-target="#limit" type="button" role="tab"
                                                    aria-controls="limit" aria-selected="true"></button>
                                            </li>
                                            <li>
                                                <button>
                                                    <img src="assets/images/icon/remove.png" alt="icon"/>
                                                    Remove from Linked
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-content mt-30">
                                        <div class="tab-pane fade show active" id="limit" role="tabpanel"
                                            aria-labelledby="limit-tab">
                                            <div class="bottom-area">
                                                <p class="history">Transaction History : <span>20</span></p>
                                                <ul>
                                                    <li>
                                                        <p class="left">
                                                            <span>03:00 PM</span>
                                                            <span>17 Oct, 2020</span>
                                                        </p>
                                                        <p class="right">
                                                            <span>$160.48</span>
                                                            <span>Withdraw</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="left">
                                                            <span>01:09 PM</span>
                                                            <span>15 Oct, 2021</span>
                                                        </p>
                                                        <p class="right">
                                                            <span>$106.58</span>
                                                            <span>Withdraw</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="left">
                                                            <span>04:00 PM</span>
                                                            <span>12 Oct, 2020</span>
                                                        </p>
                                                        <p class="right">
                                                            <span>$176.58</span>
                                                            <span>Withdraw</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="left">
                                                            <span>06:00 PM</span>
                                                            <span>25 Oct, 2020</span>
                                                        </p>
                                                        <p class="right">
                                                            <span>$167.85</span>
                                                            <span>Withdraw</span>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="cancel" role="tabpanel"
                                            aria-labelledby="cancel-tab">
                                            <div class="main-area">
                                                <div class="transfer-area">
                                                    <p>Set a transfer limit for paylio payment Card</p>
                                                    <p class="mdr">Transfer Limit</p>
                                                </div>
                                                <form action="#">
                                                    <div class="input-area">
                                                        <input class="xxlr" placeholder="400.00" type="number"/>
                                                        <select>
                                                            <option value="1">USD</option>
                                                            
                                                        </select>
                                                    </div>
                                                    <div
                                                        class="bottom-area d-flex align-items-center justify-content-between">
                                                        <a href="javascript:void(0)" class="cmn-btn cancel">Cancel and
                                                            Back</a>
                                                        <a href="javascript:void(0)" class="cmn-btn">Confirm Transfer
                                                            Limit</a>
                                                    </div>
                                                </form>
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

export default CardDetailsPopup;