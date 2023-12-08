import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { worldWirePaymentDetails } from "../assets/details/paymentDetails";

const ChoosePaymentMethod = ({onChangeOption, onHandleTransationDetails, transationDetails, withdraw}) =>{
    const userCards = useSelector(state => state.userCardDetails)

    const navigate = useNavigate()

    const checkMethod = (e) =>{
        if(transationDetails?.method){
            onChangeOption(e)
        }else{
            alert(`Please choose ${withdraw? "deposit" : "withdraw"} method`)
        }
    }
    
    return(
        <div className="col-xl-9 col-lg-8 col-md-7">
                            <div className="table-area" >
                                <div className="head-area">
                                    <h4>Linked Payment system</h4>
                                </div>
                                
                                <div onChange={onHandleTransationDetails}
                                className="card-area d-flex flex-wrap">
                                    { withdraw ? !userCards.length? <p>No linked cards at moment. 
                                        Link a card in the dashboard before proceding.
                                    </p> :
                                    (
                                        userCards.map((userCard, i) =>{
                                            const paymentmethod = worldWirePaymentDetails[userCard.card_name]
                                        return(
                                            <div key={i} className="single-card">
                                                <input checked = {transationDetails?.method === paymentmethod?.method} 
                                                    type="radio" name="method" id={paymentmethod?.id} 
                                                    value={paymentmethod?.value} />
                                                <label htmlFor={paymentmethod?.id}>
                                                    <span className="wrapper"></span>
                                                    <img src={paymentmethod?.img} alt="image"/>
                                                </label>
                                            </div>
                                            )
                                        })
                                    ) :
                                    (
                                        Object.values(worldWirePaymentDetails).map((paymentmethod, i) =>{
                                            if(  paymentmethod?.method === "wechat") return
                                            return(
                                            <div key={i} className="single-card">
                                                <input onChange={() =>{}}
                                                checked = {transationDetails.method === paymentmethod.method} 
                                                    type="radio" name="method" id={paymentmethod.id} 
                                                    value={paymentmethod.value} />
                                                <label htmlFor={paymentmethod.id}>
                                                    <span className="wrapper"></span>
                                                    <img src={paymentmethod.img} alt="image"/>
                                                </label>
                                            </div>
                                        )})
                                    )
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className="footer-area mt-40">
                                <Link onClick={() => navigate(-1)} id="method" className="active">Previous Step</Link>
                                {!withdraw ?
                                    ( <Link onClick={checkMethod} id="amount" to="#"  className="active">Next</Link>) :
                                !userCards.length? null : 
                                   ( <Link onClick={checkMethod} id="amount" to="#"  className="active">Next</Link>)
                                }
                            </div>
        </div>
    )
}

export default ChoosePaymentMethod