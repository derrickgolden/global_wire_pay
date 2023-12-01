import { Link } from "react-router-dom";
import { add_new, advcash, banktransfer, payoneer, revoult, webmoney, } from "../assets/images";
import { useSelector } from "react-redux";
import axios from "axios";
import { worldWirePaymentDetails } from "../assets/details/paymentDetails";
import { useEffect, useState } from "react";
import userDetails from "../redux/userDetails";
import { server_baseurl } from "../baseUrl";

const ChoosePaymentMethod = ({onChangeOption, onHandleTransationDetails, transationDetails, withdraw}) =>{
    const {user_id} = useSelector(state => state.userDetails)
    const userCards = useSelector(state => state.userCardDetails)
    console.log("ChoosePaymentMethod", userCards)
    // const [userCards, setUserCards] = useState([])
    if(withdraw){
        // useEffect(()=>{
        //     let config = {
        //         method: 'get',
        //         maxBodyLength: Infinity,
                // url: `${server_baseurl}/user/dashboard/get-card/${user_id}`,
        //         headers: { 
        //             'Content-Type': 'application/json'
        //         },
        //     };
    
        //     axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //        setUserCards(response.data.details)
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //         alert("Error:", error.response.data)
        //     });
        // },[])
    }
    return(
        <div class="col-xl-9 col-lg-8 col-md-7">
                            <div class="table-area" >
                                <div class="head-area">
                                    <h4>Linked Payment system</h4>
                                </div>
                                
                                <div onChange={onHandleTransationDetails}
                                class="card-area d-flex flex-wrap">
                                    { withdraw ? !userCards.length? <p>No linked cards at moment. 
                                        Link a card in the dashboard before proceding.
                                    </p> :
                                    (
                                        userCards.map((userCard, i) =>{
                                            const paymentmethod = worldWirePaymentDetails[userCard.card_name]
                                        return(
                                            <div key={i} class="single-card">
                                                <input checked = {transationDetails.method === paymentmethod.method} 
                                                    type="radio" name="method" id={paymentmethod.id} 
                                                    value={paymentmethod.value} />
                                                <label htmlFor={paymentmethod.id}>
                                                    <span class="wrapper"></span>
                                                    <img src={paymentmethod.img} alt="image"/>
                                                </label>
                                            </div>
                                            )
                                        })
                                    ) :
                                    (
                                        Object.values(worldWirePaymentDetails).map((paymentmethod, i) =>(
                                            <div key={i} class="single-card">
                                                <input onChange={() =>{}}
                                                checked = {transationDetails.method === paymentmethod.method} 
                                                    type="radio" name="method" id={paymentmethod.id} 
                                                    value={paymentmethod.value} />
                                                <label htmlFor={paymentmethod.id}>
                                                    <span class="wrapper"></span>
                                                    <img src={paymentmethod.img} alt="image"/>
                                                </label>
                                            </div>
                                        ))
                                    )
                                    }
                                    
                                    
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