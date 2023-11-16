import { Link } from "react-router-dom";
import { avator, support_icon } from "../../assets/images";
import { useSelector } from "react-redux";
import { FaCheckDouble,  } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const SendAmount = ({setSteps, selectedUser, setTransferDetails, transferDetails}) =>{
    const { balance} = useSelector(state => state.userDetails)
    const handleNextClick = () =>{
        console.log(Number(transferDetails.amount) > Number(balance))
        Number(transferDetails.amount) > Number(balance) ?
         alert(`You do not have enough balance to send ${transferDetails.amount} USD. Deposit First`):
        Number(transferDetails.amount) < Number(5) ? alert("You can only send 5 USD and above") :
        setSteps("3");
    }
    return(
        <>
                    <div className="choose-recipient">
                        <div className="step-area">
                            <span className="mdr">Step 2 of 3</span>
                            <h5>Set Amount of transfer</h5>
                        </div>
                        <div className="user-select">
                            <div className="single-user">
                                <div className="left d-flex align-items-center">
                                    <div className="img-area">
                                        <img src={avator} alt="image"/>
                                    </div>
                                    <div className="text-area">
                                        <h6>{selectedUser?.company_name || selectedUser?.first_name} {selectedUser?.last_name}</h6>
                                        <span className="mdr">{selectedUser?.email}</span>
                                    </div>
                                </div>
                                <div  className="right flex flex-row no-wrap"
                                style={{display: "flex", gap: "8px"}}>
                                    <Link style={{color: "#414BA3", }} to="#">
                                        <FaCheckDouble />
                                        Choose
                                    </Link>
                                    <Link onClick={() =>setSteps("1")}
                                    style={{color: "#414BA3", }} to="#">
                                        <FaRegEdit />
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="send-banance py-5 px-4 rounded" style={{backgroundColor: "#F8F8FF"}}>
                            <span className="mdr">You Send</span>
                            <div style={{display: "flex"}}
                            className="input-area my-4 gap-4">
                                <input onChange={(e) => setTransferDetails(obj =>({...obj, amount: e.target.value}))}
                                name="amount" value={transferDetails.amount}
                                className="xxlr" placeholder="400.00" type="number"/>
                                <select>
                                    <option value="1">USD</option>
                                </select>
                            </div>
                            <p>Available Balance <b>${balance}</b></p>
                        </div>
                        <ul className="total-fees flex p-5 justify-between"
                        style={{display: "flex", justifyContent: 'space-between'}}>
                            <li>Total Fees</li>
                            <li>Free</li>
                        </ul>
                        <ul className="total-fees pay px-4"
                        style={{display: "flex", justifyContent: 'space-between'}}>
                            <li><h5>Total To Pay</h5></li>
                            <li><h5>{transferDetails.amount} USD</h5></li>
                        </ul>
                        <div className="footer-area mt-40">
                            <Link onClick={() =>setSteps("1")}
                                style={{ color: "#414BA3" }}
                                href="#">Previous Step</Link>
                            <Link onClick={handleNextClick}
                                href="#" className="active">Next</Link>
                        </div>
                    </form>
        </>
    )
}

export default SendAmount;