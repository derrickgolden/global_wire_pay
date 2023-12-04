
import { useEffect, useState } from "react";
import { right_arrow } from "../assets/images";
import { useSelector } from "react-redux";
import axios from "axios";
import formatDateAndTime from "../utils/dateTimeFormat";
import {  Link, useNavigate } from "react-router-dom";
import { server_baseurl } from "../baseUrl";

const Transations = () =>{
    const navigate = useNavigate();
    const [transactions, setTransationDetails] = useState([]);
    const [transactionsLength, setTransactionsLength] = useState(transactions);
    const {user_id} = useSelector(state => state.userDetails)
    
    useEffect(()=>{
        let data = JSON.stringify({user_id});
        const token = JSON.parse(sessionStorage.getItem("userToken"));
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/transactions`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log("transaction details successful", response.data.details);
            setTransationDetails(response.data.details)
            
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
    }, [user_id]);

    useEffect(() =>{
        setTransactionsLength(transactions.slice(0,5))
    }, [transactions])

    const handleViewAll = (e) =>{
        if(e.target.id === "latest-tab"){
            setTransactionsLength(transactions.slice(0,5))
        }
        else setTransactionsLength(transactions)
    }
    return(
        <div className="transactions-area mt-40">
                                <div className="section-text">
                                    <h5>Transactions</h5>
                                    <p>Updated every several minutes</p>
                                </div>
                                <div className="top-area d-flex align-items-center justify-content-between">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button onClick={handleViewAll}
                                            className="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                                data-bs-target="#latest" type="button" role="tab" aria-controls="latest"
                                                aria-selected="true">Latest</button>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="upcoming-tab" data-bs-toggle="tab"
                                                data-bs-target="#upcoming" type="button" role="tab"
                                                aria-controls="upcoming" aria-selected="false">Upcoming</button>
                                        </li> */}
                                    </ul>
                                    <div className="view-all d-flex align-items-center">
                                        <button onClick={handleViewAll}  style={{color:"blue"}}>
                                            View All
                                        </button>
                                        <img src={right_arrow} alt="icon"/>
                                    </div>
                                </div>
                                <div className="tab-content mt-40">
                                    <div className="tab-pane fade show active" id="latest" role="tabpanel"
                                        aria-labelledby="latest-tab">
                                        <div className="table-responsive">
                                            <table className="table">
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
                                                        <p className="inprogress">No trasactions to show at the moment</p> 

                                                        </th>
                                                    </tr>) : (
                                                    transactionsLength?.map(
                                                        ({method, type, time_stamp, status, amount, currency, fees}, i) =>(
                                                        <tr key={i}
                                                        data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                            <th scope="row">
                                                                <p style={{textTransform: "capitalize"}}>{method}</p>
                                                                <p className="mdr" style={{textTransform: "capitalize"}}>{type}</p>
                                                            </th>
                                                            <td>
                                                                <p>{formatDateAndTime(time_stamp)?.time}</p>
                                                                <p className="mdr">{formatDateAndTime(time_stamp)?.date}</p>
                                                            </td>
                                                            <td>
                                                                <p className={status}>{status}</p>
                                                            </td>
                                                            <td>
                                                                <p className={status}>
                                                                    {type === 'deposit'? "+":"-"}{currency} {amount}
                                                                </p>
                                                                <p className="mdr">${fees? fees: "0.00"} fees</p>
                                                            </td>
                                                        </tr>
                                                        ))
                                                    )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="upcoming" role="tabpanel"
                                        aria-labelledby="upcoming-tab">
                                        <div className="table-responsive">
                                            <table className="table">
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
                                                            <p className="mdr">Marketplace Payment Received</p>
                                                        </th>
                                                        <td>
                                                            <p>04:30 PM</p>
                                                            <p className="mdr">01 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>+$450</p>
                                                            <p className="mdr">No Fees</p>
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