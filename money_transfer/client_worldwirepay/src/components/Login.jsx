import axios from 'axios';
import { useState } from "react";
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";
import { left_arrow, logo, show_hide } from "../assets/images";

import { setUserDetails } from '../redux/userDetails'; // Adjust the path as needed

const Login = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({
        email:"", password: ""
    })
    const handleInputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setLoginDetails((obj) =>({...obj, [name]: value}))
    }
    const handleLoginDetailsSubmit = (e) =>{
        e.preventDefault()
        
        console.log(loginDetails);
        let data = JSON.stringify(loginDetails);
        
        fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
        })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            if(data.success){
                sessionStorage.setItem("user", JSON.stringify(data?.details[0]));
                dispatch(setUserDetails(data?.details[0]));
                navigate('/user/dashboard', {replace: true});
            }else{
                return alert("Error: ",data.msg)
            }
        })
        .catch(error => {
            console.log(error);
            setLoginDetails(obj => ({ ...obj, password: '' }));
            alert("Sorry, something went wrong")
        });
    }
    return(
        <section className="log-reg">
        <div className="overlay pb-120">
            <div className="container">
                <div className="top-head-area">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-5 col">
                            <Link className="back-home" to="/">
                                <img src={left_arrow} alt="image"/>
                                Back To Paylio
                            </Link>
                        </div>
                        <div className="col-sm-5 col">
                            <Link to='http://localhost:5173/'>
                                <img src={logo} alt="image"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="form-box">
                            <h4>Log in to Paylio</h4>
                            <p className="dont-acc">Don't have an account? <Link to='http://localhost:5173/user/signup'>Register</Link></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="personal-tab" data-bs-toggle="tab"
                                        data-bs-target="#personal" type="button" role="tab" aria-controls="personal"
                                        aria-selected="true">Personal</button>
                                </li>
                                {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="business-tab" data-bs-toggle="tab" data-bs-target="#business"
                                        type="button" role="tab" aria-controls="business"
                                        aria-selected="false">Business</button>
                                </li> */}
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">                                
                                    <form onSubmit={handleLoginDetailsSubmit} action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-input d-flex align-items-center">
                                                    <input onChange={handleInputChange} name='email'
                                                    type="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="single-input d-flex align-items-center">
                                                    <input onChange={handleInputChange} name='password'
                                                    type="password" className="passInput" placeholder="Password"/>
                                                    <img className="showPass" src={show_hide} alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <button type='submit' className="cmn-btn">Log in</button>
                                        </div>
                                    </form>
                                    <div className="form-bottom">
                                        {/* <div className="continue"><p>Or continue with</p></div>
                                        <div className="login-with d-flex align-items-center">
                                            <a href="javascript:void(0)"><img src="assets/img/google.png" alt="image"/></a>
                                            <a href="javascript:void(0)"><img src="assets/img/fb.png" alt="image"/></a>
                                        </div> */}
                                        <div className="forget-pw">
                                            <Link to='http://localhost:5173/user/forgot-password'>Forgot your password?</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-input d-flex align-items-center">
                                                    <input type="email" placeholder="Business email"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="single-input d-flex align-items-center">
                                                    <input type="password" className="passInput" placeholder="Password"/>
                                                    <img className="showPass" src={show_hide} alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <button className="cmn-btn">Log in</button>
                                        </div>
                                    </form>
                                    <div className="form-bottom">
                                        {/* <div className="continue"><p>Or continue with</p></div>
                                        <div className="login-with d-flex align-items-center">
                                            <a href="javascript:void(0)"><img src="assets/img/google.png" alt="image"/></a>
                                            <a href="javascript:void(0)"><img src="assets/img/fb.png" alt="image"/></a>
                                        </div> */}
                                        <div className="forget-pw">
                                            <Link to='http://localhost:5173/user/forgot-password'>Forgot your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;