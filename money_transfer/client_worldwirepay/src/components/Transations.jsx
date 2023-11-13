
import { useEffect, useState } from "react";
import { right_arrow } from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import formatDateAndTime from "../utils/dateTimeFormat";
import { useLocation } from "react-router-dom";
import { setTransactions } from "../redux/transactions";

const Transations = () =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const [viewAll, setViewAll] = useState(false)
    const [transactions, setTransationDetails] = useState([])
    const {user_id} = useSelector(state => state.userDetails)
    const { callApi} = useSelector(state => state.callApi);
    console.log(transactions);
    
    useEffect(()=>{
        let data = JSON.stringify({user_id});
        console.log("useEffect", user_id);
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/dashboard/transactions',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setTransationDetails(response.data.details)
            
        })
        .catch((error) => {
            console.log(error.response);
            // setSignupDetails((obj) =>({...obj, password: ""}))
        });
    }, [user_id]);
    const handleViewAll = (e) =>{
        // if(e.target.id === "latest-tab"){
        //     setTransationDetails(useSelector(state => state.transactionDetails).slice(0,5))
        // }
        // else setTransationDetails(useSelector(state => state.transactionDetails))
    }
    return(
        <div class="transactions-area mt-40">
                                <div class="section-text">
                                    <h5>Transactions</h5>
                                    <p>Updated every several minutes</p>
                                </div>
                                <div class="top-area d-flex align-items-center justify-content-between">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button onClick={handleViewAll}
                                            class="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                                data-bs-target="#latest" type="button" role="tab" aria-controls="latest"
                                                aria-selected="true">Latest</button>
                                        </li>
                                        {/* <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="upcoming-tab" data-bs-toggle="tab"
                                                data-bs-target="#upcoming" type="button" role="tab"
                                                aria-controls="upcoming" aria-selected="false">Upcoming</button>
                                        </li> */}
                                    </ul>
                                    <div class="view-all d-flex align-items-center">
                                        <a onClick={handleViewAll}
                                        href="javascript:void(0)" style={{color:"blue"}}>View All</a>
                                        <img src={right_arrow} alt="icon"/>
                                    </div>
                                </div>
                                <div class="tab-content mt-40">
                                    <div class="tab-pane fade show active" id="latest" role="tabpanel"
                                        aria-labelledby="latest-tab">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Deposit/ Withdraw</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    !transactions.length ? (
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                        <p class="inprogress">No trasactions to show at the moment</p> 

                                                        </th>
                                                    </tr>) : (
                                                    transactions?.slice(0,5)?.map(({method, type, time_stamp, status, amount, currency}) =>(
                                                        <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                            <th scope="row">
                                                                <p>{method}</p>
                                                                <p class="mdr" style={{font: "capitalize"}}>{type}</p>
                                                            </th>
                                                            <td>
                                                                <p>{formatDateAndTime(time_stamp)?.time}</p>
                                                                <p class="mdr">{formatDateAndTime(time_stamp)?.date}</p>
                                                            </td>
                                                            <td>
                                                                <p class="inprogress">{status}</p>
                                                            </td>
                                                            <td>
                                                                <p>{type === 'deposit'? "+":"-"}{currency} {amount}</p>
                                                                <p class="mdr">No fees</p>
                                                            </td>
                                                        </tr>
                                                        ))
                                                    )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="upcoming" role="tabpanel"
                                        aria-labelledby="upcoming-tab">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name/ Business</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Envato Pty Ltd</p>
                                                            <p class="mdr">Marketplace Payment Received</p>
                                                        </th>
                                                        <td>
                                                            <p>04:30 PM</p>
                                                            <p class="mdr">01 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>+$450</p>
                                                            <p class="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default Transations;