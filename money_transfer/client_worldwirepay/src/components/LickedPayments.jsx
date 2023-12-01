import { useDispatch, useSelector } from "react-redux";
import { advcash, banktransfer, option, payoneer, revoult, webmoney } from "../assets/images";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUserCardDetails } from "../redux/userCardDetails";
import { useNavigate } from "react-router-dom";
import { server_baseurl } from "../baseUrl";

const LinkedPayments = ({handleAddCardPopup}) =>{
    const dispath = useDispatch()
    const navigate = useNavigate()

    const {user_id} = useSelector(state => state.userDetails);
    const callApi = useSelector(state => state.callApi);

    useEffect(()=>{
        if(!user_id) return

        const token = JSON.parse(sessionStorage.getItem("userToken"));

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/get-card/${user_id}`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
        };

        axios.request(config)
        .then((response) => {
            console.log("Fecthed linked payments succesfully");
            dispath(setUserCardDetails((response.data.details)))
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Sorry, an error occurred while fetching linked payments details")
            }
        });
    },[user_id, callApi])

    return(
        <div className="single-item">
            <div className="section-text d-flex align-items-center justify-content-between">
                                    <h6>Link Payment system</h6>
                                    {/* <div className="right-side">
                                        <div className="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="account.html">Update</a></li>
                                                <li><a className="dropdown-item" href="#">Virtual card</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="single-card">
                                            <button onClick = {handleAddCardPopup}
                                                type="button" className="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={payoneer} alt="image" className="w-100" id="payoneer"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-card">
                                            <button onClick = {handleAddCardPopup} 
                                            type="button" className="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={revoult} alt="image" className="w-100" id ="revolut"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" className="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={banktransfer} alt="image" className="w-100" id="banktransfer"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" className="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={advcash} alt="image" className="w-100" id="advcash"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" className="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={webmoney} alt="image" className="w-100" id="webmoney"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}

export default LinkedPayments;