import axios from 'axios';
import { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { left_arrow, logo } from "../assets/images"

const ResetPassword = () =>{
    const navigate = useNavigate()
    const {token} = useParams()
    console.log(token)

    const [signupDetails, setSignupDetails] = useState({
        email:"", password: "", confirm_password: ""
    })
    const handleInputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setSignupDetails((obj) =>({...obj, [name]: value}))
    }
    const handleResetPassDetailsSubmit = (e) =>{
        e.preventDefault()
        
        const {password, confirm_password} = signupDetails;
        if(password !== confirm_password){
            alert("password does not match");
            return
        }

        let data = JSON.stringify(signupDetails);
        let config = {
            method: 'PATCH',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/reset-password',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setSignupDetails((obj) =>({...obj, password: ""}))
            navigate('/user/login', {replace: true});
        })
        .catch((error) => {
            console.log(error.response.data);
            setSignupDetails((obj) =>({...obj, password: ""}))
        });
    }
    return(
        <section class="log-reg forgot-pws reset-pws two">
        <div class="overlay pb-120">
            <div class="container">
                <div class="top-head-area">
                    <div class="row d-flex align-items-center">
                        <div class="col-sm-5 col">
                            <a class="back-home" href="index.html">
                                <img src={left_arrow} alt="image"/>
                                Back To Paylio
                            </a>
                        </div>
                        <div class="col-sm-5 col">
                            <a href="index.html">
                                <img src={logo} alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5 d-flex align-items-end">
                        <div class="img-area">
                            <img src="assets/img/forgot-pwd-2-Illus.png" alt="image"/>
                        </div>
                    </div>
                    <div class="col-lg-6 z-1 text-center d-flex align-items-center">
                        <div class="form-box">
                            <div class="icon-area">
                                <img src="assets/img/forgot-password-Illus.png" alt="image"/>
                            </div>
                            <h4>Reset Your Password</h4>
                            <p>You can reset password using this form</p>
                            <form onSubmit={handleResetPassDetailsSubmit} action="#">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="single-input d-flex align-items-center">
                                            <input onChange={handleInputChange} required
                                            name="email" type="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="single-input d-flex align-items-center">
                                            <input onChange={handleInputChange} required
                                            name='password' type="password" class="passInput" placeholder="Password"/>
                                            <img class="showPass" src="assets/img/show-hide.png" alt="image"/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="single-input d-flex align-items-center">
                                            <input onChange={handleInputChange} required name='confirm_password'
                                            type="password" class="passInput" placeholder="Confirm Password"/>
                                            <img class="showPass" src="assets/img/show-hide.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <button type="submit" class="cmn-btn">Reset Password</button>
                                </div>
                            </form>
                            <p class="back-login dont-acc">Go back to <Link to='http://localhost:5173/user/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ResetPassword