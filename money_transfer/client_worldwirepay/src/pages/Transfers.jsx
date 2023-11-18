import axios from "axios";
import { search } from "../assets/images";
import TransactionPopup from "../components/cardPopups/TransactionPopup";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Transfers = () =>{
    const {user_id} = useSelector(state => state.userDetails);
    const [transfers, setTransfers] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});

    useEffect(() =>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:5000/user/dashboard/transfers/${user_id}`,
            headers: { 
                'Content-Type': 'application/json'
            }
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setTransfers(response.data.details);
            // dispatch(setUserDetails(response.data.details[0]));
        })
        .catch((error) => {
            console.log(error.response);
            alert("Sorry, an error occurred while fetching Transfers")
            // setSignupDetails((obj) =>({...obj, password: ""}))
        });
    },[])
    return(
        <>
        <section class="dashboard-section body-collapse transactions">
        <div class="overlay pt-120">
            <div class="container-fruid">
                <div class="head-area">
                    <div class="row">
                        <div class="col-lg-5 col-md-4">
                            <h4>Transfers</h4>
                        </div>
                        <div class="col-lg-7 col-md-8">
                            <div class="transactions-right d-flex align-items-center">
                                <form action="#" class="flex-fill">
                                    <div class="form-group d-flex align-items-center">
                                        <img src={search} alt="icon"/>
                                        <input type="text" placeholder="Type to search..."/>
                                    </div>
                                </form>
                                <a href="javascript:void(0)">Monthly Statement</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="transactions-main">
                            <div class="top-items">
                                <h6>All Transactions</h6>
                                <div class="export-area">
                                    <ul class="d-flex align-items-center">
                                        <li><a href="javascript:void(0)"><img src="assets/images/icon/printer.png" alt="icon"/>Print</a></li>
                                        <li><a href="javascript:void(0)"><img src="assets/images/icon/excel.png" alt="icon"/>Excel</a></li>
                                        <li><a href="javascript:void(0)"><img src="assets/images/icon/pdf.png" alt="icon"/>PDF</a></li>
                                        <li><a href="javascript:void(0)"><img src="assets/images/icon/csv.png" alt="icon"/>CSV</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="filters-item">
                                <div class="single-item">
                                    <select>
                                        <option value="1">23 Nov 2021- 21 Feb 2022</option>
                                        <option value="2">23 Feb 2021- 21 Mar 2022</option>
                                        <option value="3">23 Mar 2021- 21 Apr 2022</option>
                                    </select>
                                </div>
                                <div class="single-item">
                                    <select>
                                        <option value="1">Balance</option>
                                        <option value="2">Balance</option>
                                        <option value="3">Balance</option>
                                    </select>
                                </div>
                                <div class="single-item">
                                    <select>
                                        <option>All Filters</option>
                                        <option value="1">Filters 1</option>
                                        <option value="2">Filters 2</option>
                                        <option value="3">Filters 3</option>
                                    </select>
                                </div>
                                <div class="single-item">
                                    <button>Clear Filters</button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name/ Business Email</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transfers.map((transfer, i) =>(
                                        <tr key={i}
                                        onClick={() => setSelectedRow(transfer)}
                                        data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                            <th scope="row">
                                                <p>{transfer?.recipient_email || transfer.first_name}</p>
                                                <p class="mdr">
                                                    {transfer?.sender_id === user_id ? "Sent" : "Received"}
                                                </p>
                                            </th>
                                            <td>
                                                <p>{new Date(transfer.timestamp).toLocaleTimeString()}</p>
                                                <p class="mdr">{new Date(transfer.timestamp).toDateString()}</p>
                                            </td>
                                            <td>
                                                <p class="inprogress">{transfer.status}</p>
                                            </td>
                                            <td>
                                                <p>{transfer?.sender_id === user_id ? "-" : "+"}
                                                    ${transfer.amount}</p>
                                                <p class="mdr">No fees</p>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation" class="d-flex justify-content-center mt-40">
                                <ul class="pagination justify-content-center align-items-center mb-40">
                                    <li class="page-item">
                                        <a class="page-link previous" href="javascript:void(0)" aria-label="Previous">
                                            <i class="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link previous" href="javascript:void(0)" aria-label="Previous">
                                            <i class="fa-solid fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item"><a class="page-link active" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">...</a></li>
                                    <li class="page-item">
                                        <a class="page-link next" href="javascript:void(0)" aria-label="Next">
                                            <i class="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link next" href="javascript:void(0)" aria-label="Next">
                                            <i class="fa-solid fa-angles-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <TransactionPopup 
            selectedRow = {selectedRow}
        />
        </>
    )
}

export default Transfers;