import { Link } from "react-router-dom";
import { option } from "../assets/images";
import { useSelector } from 'react-redux'

const AccDetails = () =>{
    const {
        balance, first_name, last_name, last_received, payouts, user_id, total_deposit, total_withdraw
    } = useSelector(state => state.userDetails)
    return(
        <div className="acc-details">
                                <div className="top-area">
                                    <div className="left-side">
                                        <h5>Hi, {first_name} {last_name}!</h5>
                                        <h2>$ {balance}</h2>
                                        <h5 className="receive">Total Deposit: &nbsp;
                                            <span> $ {total_deposit}</span>
                                        </h5>
                                    </div>
                                    <div className="right-side">
                                        <div className="right-top">
                                            <select>
                                                <option value="1">US Dollar</option>
                                            </select>
                                            {/* <div className="dropdown-area">
                                                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={option} alt="icon"/>
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Fiat Currency</a></li>
                                                    <li><a className="dropdown-item" href="#">crypto Currency</a></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div className="right-bottom">
                                            <h4>$ {total_withdraw} </h4>
                                            <h5>Withdraws</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-area">
                                    <div className="left-side">
                                        <Link to="http://localhost:5173/user/dashboard/transfer-money" className="cmn-btn">Send Money</Link>
                                        <Link to='http://localhost:5173/user/dashboard/deposit-money' className="cmn-btn">Deposit</Link>
                                        <Link to='http://localhost:5173/user/dashboard/withdraw-money' className="cmn-btn">Withdraw</Link>
                                    </div>
                                    <div className="right-side">
                                        <div className="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item" to='http://localhost:5173/user/dashboard/transfer-money'>Send Money</Link></li>
                                                <li><Link className="dropdown-item" to='http://localhost:5173/user/dashboard/deposit-money'>Deposit Money</Link></li>
                                                <li><Link className="dropdown-item" to='http://localhost:5173/user/dashboard/withdraw-money'>Withdraw Money</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default AccDetails;