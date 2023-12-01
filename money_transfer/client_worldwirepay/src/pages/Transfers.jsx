import axios from "axios";
import { search } from "../assets/images";
import TransactionPopup from "../components/cardPopups/TransactionPopup";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server_baseurl } from "../baseUrl";

const Transfers = () =>{
    const navigate = useNavigate()

    const {user_id} = useSelector(state => state.userDetails);
    const [transfers, setTransfers] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});

    useEffect(() =>{
        if(!user_id) return;
        const token = JSON.parse(sessionStorage.getItem("userToken"));

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/transfers/${user_id}`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        };

        axios.request(config)
        .then((response) => {
            console.log(response);
            setTransfers(response.data.details);
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Sorry, an error occurred while fetching Transfers")
            }
        });
    },[user_id])
    return(
        <>
        <section className="dashboard-section body-collapse transactions">
        <div className="overlay pt-120">
            <div className="container-fruid">
                <div className="head-area">
                    <div className="row">
                        <div className="col-lg-5 col-md-4">
                            <h4>Transfers</h4>
                        </div>
                        <div className="col-lg-7 col-md-8">
                            <div className="transactions-right d-flex align-items-center">
                                <form action="#" className="flex-fill">
                                    <div className="form-group d-flex align-items-center">
                                        <img src={search} alt="icon"/>
                                        <input type="text" placeholder="Type to search..."/>
                                    </div>
                                </form>
                                <a href="#">Monthly Statement</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="transactions-main">
                            <div className="top-items">
                                <h6>All Transfers</h6>
                                {/* <div className="export-area">
                                    <ul className="d-flex align-items-center">
                                        <li><a href="#"><img src="assets/images/icon/printer.png" alt="icon"/>Print</a></li>
                                        <li><a href="#"><img src="assets/images/icon/excel.png" alt="icon"/>Excel</a></li>
                                        <li><a href="#"><img src="assets/images/icon/pdf.png" alt="icon"/>PDF</a></li>
                                        <li><a href="#"><img src="assets/images/icon/csv.png" alt="icon"/>CSV</a></li>
                                    </ul>
                                </div> */}
                            </div>
                            {/* <div className="filters-item">
                                <div className="single-item">
                                    <select>
                                        <option value="1">23 Nov 2021- 21 Feb 2022</option>
                                        <option value="2">23 Feb 2021- 21 Mar 2022</option>
                                        <option value="3">23 Mar 2021- 21 Apr 2022</option>
                                    </select>
                                </div>
                                <div className="single-item">
                                    <select>
                                        <option value="1">Balance</option>
                                        <option value="2">Balance</option>
                                        <option value="3">Balance</option>
                                    </select>
                                </div>
                                <div className="single-item">
                                    <select>
                                        <option>All Filters</option>
                                        <option value="1">Filters 1</option>
                                        <option value="2">Filters 2</option>
                                        <option value="3">Filters 3</option>
                                    </select>
                                </div>
                                <div className="single-item">
                                    <button>Clear Filters</button>
                                </div>
                            </div> */}
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name/ Business Email</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    {transfers?.length ? (
                                        <tbody>
                                            {transfers.map((transfer, i) =>(
                                            <tr key={i}
                                            onClick={() => setSelectedRow(transfer)}
                                            data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                <th scope="row">
                                                    <p className="mdr">
                                                        {transfer?.sender_id === user_id ? "Sent to" : "Received"}
                                                    </p>
                                                    <p>{transfer?.receiver_email || transfer.sender_email}</p>
                                                </th>
                                                <td>
                                                    <p>{new Date(transfer.timestamp).toLocaleTimeString()}</p>
                                                    <p className="mdr">{new Date(transfer.timestamp).toDateString()}</p>
                                                </td>
                                                <td>
                                                    <p className={`${transfer.status}`}>
                                                        {transfer.status}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className={`${transfer.status}`}>
                                                        {transfer?.sender_id === user_id ? "-" : "+"}
                                                        ${transfer.amount}</p>
                                                    <p className="mdr">$
                                                        {transfer?.sender_id === user_id ? 
                                                            transfer?.sender_fees || 0 : transfer?.receiver_fees || 0} fees
                                                    </p>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    ): (
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>No transfer details to show</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                            {/* <nav aria-label="Page navigation" className="d-flex justify-content-center mt-40">
                                <ul className="pagination justify-content-center align-items-center mb-40">
                                    <li className="page-item">
                                        <a className="page-link previous" href="#" aria-label="Previous">
                                            <i className="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link previous" href="#" aria-label="Previous">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link " href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item">
                                        <a className="page-link next" href="#" aria-label="Next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link next" href="#" aria-label="Next">
                                            <i className="fa-solid fa-angles-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <TransactionPopup 
            selectedRow = {selectedRow}
            user_id = {user_id}
        />
        </>
    )
}

export default Transfers;