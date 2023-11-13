// import jwt from "jsonwebtoken"

import { Link, Outlet, useNavigate } from "react-router-dom";
import { logo, avator, bell, search} from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/userDetails";
import { useEffect, useState } from "react";
import { setCallApi } from "../redux/callApi";
import axios from "axios";

const Header = (props) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggleUserArea, setToggleUserArea] =useState(false);

    const { first_name, last_name, user_id} = useSelector(state => state.userDetails)
    useEffect(() =>{
        if(!user_id){
            const user = JSON.parse(sessionStorage.getItem("user"));
            console.log(user)
            if(!user){
                navigate("/user/login");
            }else{
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `http://localhost:5000/user/dashboard/user-details/${user?.user_id}`,
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                };
        
                axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    dispatch(setUserDetails(response.data.details[0]));
                })
                .catch((error) => {
                    console.log(error.response);
                    alert("Sorry, an error occurred")
                    // setSignupDetails((obj) =>({...obj, password: ""}))
                });
            }
        }
    })

    const handleToggleUserArea = () =>{
        setToggleUserArea(!toggleUserArea);
    }
    const handleLogout = () =>{
        setToggleUserArea(!toggleUserArea);
        sessionStorage.clear("user");
        navigate("/");
    }

    return(
        <>
        <header className="header-section body-collapse">
        <div className="overlay w-full">
            <div className="container-fruid">
                <div className="row d-flex header-area">
                    <div className="navbar-area d-flex align-items-center justify-content-between">
                        <div className="sidebar-icon">
                            <Link to='http://localhost:5173/user/dashboard'>
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                        {/* <form action="#" className="flex-fill">
                            <div className="form-group d-flex align-items-center">
                                <img src={search} alt="icon"/>
                                <input type="text" placeholder="Type to search..."/>
                            </div>
                        </form> */}
                        <div className="dashboard-nav">
                            <div className="single-item notifications-area">
                                <div className="notifications-btn">
                                    <img src={bell} className="bell-icon" alt="icon"/>
                                </div>
                                <div className="main-area notifications-content">
                                    <div className="head-area d-flex justify-content-between">
                                        <h5>Notifications</h5>
                                        <span className="mdr">4</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="d-flex">
                                                <div className="img-area">
                                                    <img src="../assets/images/user-1.png" className="max-un" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <p className="mdr">You received a payment of <b>$134.00</b> from <b>Anna
                                                            Green</b></p>
                                                    <p className="mdr time-area">09.39AM</p>
                                                </div>
                                            </a>
                                            <i className="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="d-flex">
                                                <div className="img-area">
                                                    <img src="../assets/images/user-2.png" className="max-un" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <p className="mdr"><b>James Deed</b> requested a payment of
                                                        <b>£890.00</b>
                                                    </p>
                                                    <p className="mdr time-area">08.09AM</p>
                                                </div>
                                            </a>
                                            <i className="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="d-flex">
                                                <div className="img-area">
                                                    <img src="../assets/images/master-card.png" className="max-un" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <p className="mdr">Your new payment method has beed added successfully
                                                    </p>
                                                    <p className="mdr time-area">09.39AM</p>
                                                </div>
                                            </a>
                                            <i className="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="d-flex">
                                                <div className="img-area">
                                                    <img src="../assets/images/user-3.png" className="max-un" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <p className="mdr">You received a payment of <b>$250.00</b> from Goerge
                                                        Michael</p>
                                                    <p className="mdr time-area">Yesterday</p>
                                                </div>
                                            </a>
                                            <i className="fa-solid fa-caret-right"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-item user-area">
                                <div onClick={handleToggleUserArea}
                                className="profile-area d-flex align-items-center">
                                    <span className="user-profile">
                                        <img src={avator} alt="User"/>
                                    </span>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                                <div className={`main-area user-content ${toggleUserArea? "active": ""} `}>
                                    <div className="head-area d-flex align-items-center">
                                        <div className="profile-img">
                                            <img src={avator} alt="User"/>
                                        </div>
                                        <div className="profile-head">
                                            <a href="javascript:void(0)">
                                                <h5>{first_name} {last_name}</h5>
                                            </a>
                                            <p className="wallet-id">Wallet ID: {user_id}</p>
                                        </div>
                                    </div>
                                    <ul style={{color: "#0c266c"}}>
                                        <li className="border-area">
                                            <a style={{color: "#0c266c"}}
                                            href="#"><i className="fas fa-cog"></i>Settings</a>
                                        </li>
                                        <li>
                                            <Link style={{color: "#0c266c"}} onClick={handleLogout}
                                            to="http://localhost:5173/"><i className="fas fa-sign-out"></i>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sidebar-wrapper">
                        <div className="close-btn">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="sidebar-logo">
                            <a href="dashboard.html"><img src={logo} alt="logo"/></a>
                        </div>
                        <ul>
                            <li className="active">
                                <a href="dashboard.html">
                                    <img src="assets/images/icon/dashboard.png" alt="Dashboard"/> <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="transactions.html">
                                    <img src="assets/images/icon/transactions.png" alt="Transactions"/> <span>Transactions</span>
                                </a>
                            </li>
                            <li>
                                <a href="pay.html">
                                    <img src="assets/images/icon/pay.png" alt="Pay"/> <span>Pay</span>
                                </a>
                            </li>
                            <li>
                                <a href="receive-step-1.html">
                                    <img src="assets/images/icon/receive.png" alt="Receive"/> <span>Receive</span>
                                </a>
                            </li>
                            <li>
                                <a href="money-exchange.html">
                                    <img src="assets/images/icon/exchange.png" alt="Exchange"/> <span>Exchange</span>
                                </a>
                            </li>
                            <li>
                                <a href="recipients.html">
                                    <img src="assets/images/icon/recipients.png" alt="Recipients"/> <span>Recipients</span>
                                </a>
                            </li>
                            <li>
                                <a href="crypto.html">
                                    <img src="assets/images/icon/crypto.png" alt="Crypto"/> <span>Crypto</span>
                                </a>
                            </li>
                            <li>
                                <a href="deposit-money.html">
                                    <img src="assets/images/icon/deposit.png" alt="Deposit"/> <span>Deposit Money</span>
                                </a>
                            </li>
                            <li>
                                <a href="withdraw-money-step-1.html">
                                    <img src="assets/images/icon/withdraw.png" alt="Withdraw"/> <span>Withdraw Money</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="bottom-item">
                            <li>
                                <a href="account.html">
                                    <img src="assets/images/icon/account.png" alt="Account"/> <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/icon/support.png" alt="Support"/> <span>Support</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/icon/quit.png" alt="Quit"/> <span>Quit</span>
                                </a>
                            </li>
                        </ul>
                        <div className="pt-120">
                            <div className="invite-now">
                                <div className="img-area">
                                    <img src="assets/images/invite-now-illus.png" alt="Image"/>
                                </div>
                                <p>Invite your friend and get $25</p>
                                <a href="javascript:void(0)" className="cmn-btn">Invite Now</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </header>
    <Outlet/>
    </>
    )
}

export default Header;