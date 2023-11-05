import { Link } from "react-router-dom";

const ConfirmOrder = ({onChangeOption}) =>{
    return(
        <div class="col-xl-8 col-lg-8">
                            <form action="#">
                                <div class="payment-details">
                                    <div class="top-area">
                                        <h6>Confirm  account & amount</h6>
                                        <div class="right">
                                            <a href="javascript:void(0)">
                                                <i class="icon-h-edit"></i>
                                                Edit
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-9 col-lg-12">
                                            <ul class="details-list">
                                                <li>
                                                    <span>Payment System</span>
                                                    <b>Paypal</b>
                                                </li>
                                                <li>
                                                    <span>Paypal Payment Card</span>
                                                    <b>**** **** **** 1182</b>
                                                </li>
                                                <li>
                                                    <span>You will receive</span>
                                                    <b>400.00 USD</b>
                                                </li>
                                                <li>
                                                    <span>Fee</span>
                                                    <b>1 USD</b>
                                                </li>
                                                <li>
                                                    <span>E-mail</span>
                                                    <b><a href="https://pixner.net/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7711121b1e141e165905121e1337120f161a071b125914181a">[email&#160;protected]</a></b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkbox-area mt-40 d-flex align-items-center justify-content-center">
                                    <input type="checkbox" id="accept" name="accept"/>
                                    <label for="accept">I accept <a href="javascript:void(0)">terms of use</a></label>
                                </div>
                                <div class="footer-area mt-40">
                                    <Link onClick={onChangeOption} id="amount" to="javascript:void(0)"  class="active">Previous Step</Link>
                                    <a href="javascript:void(0)" class="active" data-bs-toggle="modal" data-bs-target="#congratulationsMod">Next</a>
                                </div>
                            </form>
                        </div>
    )
}

export default ConfirmOrder;