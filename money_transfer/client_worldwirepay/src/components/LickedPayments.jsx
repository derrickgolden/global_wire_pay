import { useDispatch, useSelector } from "react-redux";
import { advcash, banktransfer, option, payoneer, revoult, webmoney } from "../assets/images";
import { useEffect } from "react";
import axios from "axios";
import { setUserCardDetails } from "../redux/userCardDetails";

const LinkedPayments = ({handleAddCardPopup}) =>{
    const dispath = useDispatch()

    const {user_id} = useSelector(state => state.userDetails)

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:5000/user/dashboard/get-card/${user_id}`,
            headers: { 
                'Content-Type': 'application/json'
            },
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
           dispath(setUserCardDetails((response.data.details)))
        })
        .catch((error) => {
            console.log(error.response);
            // alert("Error:", error.response.data)
        });
    },[user_id])

    return(
        <div class="single-item">
            <div class="section-text d-flex align-items-center justify-content-between">
                                    <h6>Link Payment system</h6>
                                    {/* <div class="right-side">
                                        <div class="dropdown-area">
                                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={option} alt="icon"/>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="account.html">Update</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0)">Virtual card</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                                type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={payoneer} alt="image" class="w-100" id="payoneer"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup} 
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={revoult} alt="image" class="w-100" id ="revolut"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={banktransfer} alt="image" class="w-100" id="banktransfer"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={advcash} alt="image" class="w-100" id="advcash"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-card">
                                            <button onClick = {handleAddCardPopup}
                                            type="button" class="reg w-100" data-bs-toggle="modal"
                                                data-bs-target="#addcardMod">
                                                <img src={webmoney} alt="image" class="w-100" id="webmoney"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}

export default LinkedPayments;