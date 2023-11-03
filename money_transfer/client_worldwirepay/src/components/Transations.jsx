
import { right_arrow } from "../assets/images";

const Transations = () =>{
    return(
        <div class="transactions-area mt-40">
                                <div class="section-text">
                                    <h5>Transactions</h5>
                                    <p>Updated every several minutes</p>
                                </div>
                                <div class="top-area d-flex align-items-center justify-content-between">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                                data-bs-target="#latest" type="button" role="tab" aria-controls="latest"
                                                aria-selected="true">Latest</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="upcoming-tab" data-bs-toggle="tab"
                                                data-bs-target="#upcoming" type="button" role="tab"
                                                aria-controls="upcoming" aria-selected="false">Upcoming</button>
                                        </li>
                                    </ul>
                                    <div class="view-all d-flex align-items-center">
                                        <a href="javascript:void(0)">View All</a>
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
                                                        <th scope="col">Name/ Business</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Bangkok Bank</p>
                                                            <p class="mdr">Withdraw to bank account</p>
                                                        </th>
                                                        <td>
                                                            <p>03:00 PM</p>
                                                            <p class="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="inprogress">In Progress</p>
                                                        </td>
                                                        <td>
                                                            <p>-$520</p>
                                                            <p class="mdr">$3.0</p>
                                                        </td>
                                                    </tr>
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
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Mailchimp</p>
                                                            <p class="mdr">Subscription Service Payment</p>
                                                        </th>
                                                        <td>
                                                            <p>01:15 PM</p>
                                                            <p class="mdr">25 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>-$100</p>
                                                            <p class="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Facebook Ads</p>
                                                            <p class="mdr">Ads Service</p>
                                                        </th>
                                                        <td>
                                                            <p>07:05 PM</p>
                                                            <p class="mdr">15 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="pending">Pending</p>
                                                        </td>
                                                        <td>
                                                            <p>$200</p>
                                                            <p class="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Upwork Escow Inc</p>
                                                            <p class="mdr">Payment payment</p>
                                                        </th>
                                                        <td>
                                                            <p>04:02 PM</p>
                                                            <p class="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>$450</p>
                                                            <p class="mdr">$.5</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Ron Stewart</p>
                                                            <p class="mdr">Payment Refund</p>
                                                        </th>
                                                        <td>
                                                            <p>11:00 PM</p>
                                                            <p class="mdr">21 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="cancelled">Cancelled</p>
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
                                                            <p>Bangkok Bank</p>
                                                            <p class="mdr">Withdraw to bank account</p>
                                                        </th>
                                                        <td>
                                                            <p>03:00 PM</p>
                                                            <p class="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="inprogress">In Progress</p>
                                                        </td>
                                                        <td>
                                                            <p>-$520</p>
                                                            <p class="mdr">$3.0</p>
                                                        </td>
                                                    </tr>
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
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Mailchimp</p>
                                                            <p class="mdr">Subscription Service Payment</p>
                                                        </th>
                                                        <td>
                                                            <p>01:15 PM</p>
                                                            <p class="mdr">25 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>-$100</p>
                                                            <p class="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Facebook Ads</p>
                                                            <p class="mdr">Ads Service</p>
                                                        </th>
                                                        <td>
                                                            <p>07:05 PM</p>
                                                            <p class="mdr">15 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="pending">Pending</p>
                                                        </td>
                                                        <td>
                                                            <p>$200</p>
                                                            <p class="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Upwork Escow Inc</p>
                                                            <p class="mdr">Payment payment</p>
                                                        </th>
                                                        <td>
                                                            <p>04:02 PM</p>
                                                            <p class="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>$450</p>
                                                            <p class="mdr">$.5</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Ron Stewart</p>
                                                            <p class="mdr">Payment Refund</p>
                                                        </th>
                                                        <td>
                                                            <p>11:00 PM</p>
                                                            <p class="mdr">21 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p class="cancelled">Cancelled</p>
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