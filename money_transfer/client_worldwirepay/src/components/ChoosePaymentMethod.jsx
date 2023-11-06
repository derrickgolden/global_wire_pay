import { Link } from "react-router-dom";
import { mpesa_card, visa_card } from "../assets/images";

const ChoosePaymentMethod = ({onChangeOption, onHandleTransationDetails, transationDetails}) =>{
    return(
        <div class="col-xl-9 col-lg-8 col-md-7">
                            <div class="table-area">
                                <div class="head-area">
                                    <h4>Linked Payment system</h4>
                                </div>
                                <div onChange={onHandleTransationDetails}
                                class="card-area d-flex flex-wrap">
                                    <div class="single-card">
                                        <input 
                                        type="radio" checked = {transationDetails.method === "mpesa"} 
                                        name="method" id="mpesa" value="Mpesa"
                                        />
                                        <label htmlFor="mpesa">
                                            <span class="wrapper"></span>
                                            <img src={mpesa_card} alt="image"/>
                                        </label>
                                    </div>
                                    <div class="single-card">
                                        <input checked = {transationDetails.method === "visa"} 
                                        type="radio" name="method" id="visa" value="Visa" />
                                        <label htmlFor="visa">
                                            <span class="wrapper"></span>
                                            <img src={visa_card} alt="image"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-area mt-40">
                                {/* <Link onClick={onChangeOption} id="method">Previous Step</Link> */}
                                <Link onClick={onChangeOption} id="amount" to="#"  class="active">Next</Link>
                            </div>
                        </div>
    )
}

export default ChoosePaymentMethod