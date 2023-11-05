import { Link } from "react-router-dom";
import { option } from "../assets/images";

const AccDetails = () =>{
    return(
        <div class="acc-details">
                                <div class="top-area">
                                    <div class="left-side">
                                        <h5>Hi, Kevin Martin!</h5>
                                        <h2>$30,700.00</h2>
                                        <h5 class="receive">Last Received <span>$25,700.00</span></h5>
                                    </div>
                                    <div class="right-side">
                                        <div class="right-top">
                                            <select>
                                                <option value="1">US Dollar</option>
                                                <option value="2">US Dollar</option>
                                                <option value="3">US Dollar</option>
                                            </select>
                                            <div class="dropdown-area">
                                                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={option} alt="icon"/>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#">Fiat Currency</a></li>
                                                    <li><a class="dropdown-item" href="#">crypto Currency</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="right-bottom">
                                            <h4>$30,700.00</h4>
                                            <h5>Payouts</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <div class="left-side">
                                        {/* <a href="pay.html" class="cmn-btn">Transfer Money</a> */}
                                        <Link to='http://localhost:5173/user/dashboard/deposit-money' class="cmn-btn">Deposit</Link>
                                        <Link to='http://localhost:5173/user/dashboard/withdraw-money' class="cmn-btn">Withdraw</Link>
                                    </div>
                                    <div class="right-side">
                                        <div class="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="recipients.html">Recipients</a></li>
                                                <li><a class="dropdown-item" href="receive-step-1.html">Request Money</a></li>
                                                <li><a class="dropdown-item" href="pay-step-1.html">Send Money</a></li>
                                                <li><a class="dropdown-item" href="pay-step-1.html">Bill Pay</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default AccDetails;