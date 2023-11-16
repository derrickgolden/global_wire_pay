import { Link } from "react-router-dom";
import { option } from "../assets/images";
import { useSelector } from 'react-redux'

const AccDetails = () =>{
    const {
        balance, first_name, last_name, last_received, payouts, user_id, total_deposit, total_withdraw
    } = useSelector(state => state.userDetails)
    return(
        <div class="acc-details">
                                <div class="top-area">
                                    <div class="left-side">
                                        <h5>Hi, {first_name} {last_name}!</h5>
                                        <h2>$ {balance}</h2>
                                        <h5 class="receive">Total Deposit: &nbsp;
                                            <span> $ {total_deposit}</span>
                                        </h5>
                                    </div>
                                    <div class="right-side">
                                        <div class="right-top">
                                            <select>
                                                <option value="1">US Dollar</option>
                                            </select>
                                            {/* <div class="dropdown-area">
                                                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={option} alt="icon"/>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#">Fiat Currency</a></li>
                                                    <li><a class="dropdown-item" href="#">crypto Currency</a></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div class="right-bottom">
                                            <h4>$ {total_withdraw} </h4>
                                            <h5>Withdraws</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <div class="left-side">
                                        <Link to="http://localhost:5173/user/dashboard/transfer-money" class="cmn-btn">Send Money</Link>
                                        <Link to='http://localhost:5173/user/dashboard/deposit-money' class="cmn-btn">Deposit</Link>
                                        <Link to='http://localhost:5173/user/dashboard/withdraw-money' class="cmn-btn">Withdraw</Link>
                                    </div>
                                    <div class="right-side">
                                        <div class="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" to='http://localhost:5173/user/dashboard/transfer-money'>Send Money</Link></li>
                                                <li><Link class="dropdown-item" to='http://localhost:5173/user/dashboard/deposit-money'>Deposit Money</Link></li>
                                                <li><Link class="dropdown-item" to='http://localhost:5173/user/dashboard/withdraw-money'>Withdraw Money</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default AccDetails;