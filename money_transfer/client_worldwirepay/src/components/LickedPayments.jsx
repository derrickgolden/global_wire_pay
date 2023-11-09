import { blockchain_card, mpesa_card, option, paylio_card, paypal_card, visa_card } from "../assets/images";

const LinkedPayments = ({handleAddCardPopup}) =>{

    return(
        <div class="single-item">
            <div class="section-text d-flex align-items-center justify-content-between">
                                    <h6>Link Payment system</h6>
                                    <div class="right-side">
                                        <div class="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="account.html">Update</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0)">Virtual card</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup} id="visa"
                                                type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={visa_card} alt="image" class="w-100" id="visa"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={mpesa_card} alt="image" class="w-100"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={paylio_card} alt="image" class="w-100"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={paypal_card} alt="image" class="w-100"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#cardMod">
                                                <img src={blockchain_card} alt="image" class="w-100"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}

export default LinkedPayments;