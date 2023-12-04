// import jwt from "jsonwebtoken"

import { Link, Outlet, useNavigate } from "react-router-dom";
import { logo, avator, bell, search, menu, dashboard} from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/userDetails";
import { useEffect, useState } from "react";
import { setCallApi } from "../redux/callApi";
import axios from "axios";
import { sideBarDetails } from "../assets/details/sideBarDetails";
import { client_baseurl, server_baseurl } from "../baseUrl";

const Header = (props) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggleUserArea, setToggleUserArea] =useState(false);
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");

    const { first_name, last_name, user_id} = useSelector(state => state.userDetails)
    useEffect(() =>{
        if(!user_id){
            const user = JSON.parse(sessionStorage.getItem("user"));
            console.log("stored user")
            if(!user){
                navigate("/user/login");
            }else{
                const token = JSON.parse(sessionStorage.getItem("userToken"));
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `${server_baseurl}/user/dashboard/user-details/${user?.user_id}`,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    }
                };
        
                axios.request(config)
                .then((response) => {
                    // console.log(JSON.stringify(response.data));
                    dispatch(setUserDetails(response.data.details[0]));
                })
                .catch((error) => {
                    console.log(error.response);
                    if(error.response.data.reLogin){
                        alert("Could not parse your authentication token. Please try to Login again.")
                        navigate("/user/login");
                    }else{
                        alert("Sorry, an error occurred while fetching user details")
                    }
                });
            }
        }
    })

    const handleToggleUserArea = () =>{
        setToggleUserArea(!toggleUserArea);
    }
    const handleNavLink = (e) =>{
        setActiveLink(e.target.id)
        if(toggleSideBar){
            setTimeout(()=>{
                setToggleSideBar(!toggleSideBar)
            },500)  
        }
    }
    const handleLogout = () =>{
        setToggleUserArea(!toggleUserArea);
        sessionStorage.clear("user");
        navigate("/");
    }

    return(
        <>
        <header className={`${toggleSideBar? "body-collapse" : "" } user-header-section `}>
        <div className="overlay w-full">
            <div className="container-fruid">
                <div className="row d-flex header-area">
                    <div className="navbar-area d-flex align-items-center justify-content-between">
                        <div onClick={()=>setToggleSideBar(!toggleSideBar)}
                        className="sidebar-icon">
                            <img src={menu} alt="icon" />
                        </div>
                        <form action="#" className="flex-fill">
                            <div className="form-group d-flex align-items-center">
                                <img src={search} alt="icon"/>
                                <input type="text" placeholder="Type to search..."/>
                            </div>
                        </form>
                        <div className="dashboard-nav">
                            <div className="single-item notifications-area">
                                {/* <div className="notifications-btn">
                                    <img src={bell} className="bell-icon" alt="icon"/>
                                </div> */}
                                <div className="main-area notifications-content">
                                    <div className="head-area d-flex justify-content-between">
                                        <h5>Notifications</h5>
                                        <span className="mdr">4</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href="#" className="d-flex">
                                                <div className="img-area">
                                                    <img src="../assets/images/user-1.png" className="max-un" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <p className="mdr">You received a payment of <b>$134.00</b> from <b>Anna
                                                            Green</b></p>
                                                    <p className="mdr time-area">09.39AM</p>
                                                </div>
                                            </Link>
                                            <i className="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
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
                                            <a href="#" className="d-flex">
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
                                            <a href="#" className="d-flex">
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
                                            <a href="#">
                                                <h5>{first_name} {last_name}</h5>
                                            </a>
                                            <p style={{color: "#414BA3"}}
                                            className="wallet-id">Wallet ID: {user_id}</p>
                                        </div>
                                    </div>
                                    <ul style={{color: "#0c266c"}}>
                                        {/* <li className="border-area">
                                            <a style={{color: "#0c266c"}}
                                            href="#"><i className="fas fa-cog"></i>Settings</a>
                                        </li> */}
                                        <li>
                                            <Link style={{color: "#0c266c"}} onClick={handleLogout}
                                            to={`${client_baseurl}`}><i className="fas fa-sign-out"></i>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${toggleSideBar? " " : "active " } sidebar-wrapper`}>
                        <div onClick={()=>setToggleSideBar(!toggleSideBar)}
                        className="close-btn">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="sidebar-logo">
                            <Link to={`${client_baseurl}/user/dashboard`}><img src={logo} alt="logo"/></Link>
                        </div>
                        <ul style={{color: "blue"}}>
                            {sideBarDetails.map((detail, i) =>(
                                <li key={i} 
                                className={`${activeLink === detail.alt? "active ": " "}`}>
                                    <Link onClick={handleNavLink}
                                    to={detail.to} id={detail.alt}>
                                        <img src={detail.img} alt={detail.alt} id={detail.alt}/> 
                                        <span style={{color: "#414BA3"}}>{detail.text}</span>
                                    </Link>
                                </li>
                            ))}
                            
                        </ul>
                        {/* <ul className="bottom-item">
                            <li>
                                <Link href="account.html">
                                    <img src="assets/images/icon/account.png" alt="Account"/> <span>Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <img src="assets/images/icon/support.png" alt="Support"/> <span>Support</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <img src="assets/images/icon/quit.png" alt="Quit"/> <span>Quit</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="pt-120">
                            <div className="invite-now">
                                <div className="img-area">
                                    <img src="assets/images/invite-now-illus.png" alt="Image"/>
                                </div>
                                <p>Invite your friend and get $25</p>
                                <Link href="#" className="cmn-btn">Invite Now</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </header>
    <Outlet/>
    </>
    )
}

export default Header;