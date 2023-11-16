import { Link } from "react-router-dom";
import { avator, search } from "../../assets/images";

import { FaCheckDouble } from "react-icons/fa6";

const ChooseRecipient = ({connectedUsers, setSteps, chooseRecipient, setChooseRecipient}) =>{
    const handleNext = () =>{
        if(!chooseRecipient) return alert("You have not choosen any recipient. If the recipient is not included in my recipient, add them first")
        setSteps("2");
    }
    return(
        <>
        <div class="choose-recipient">
                        <div class="step-area">
                            <span class="mdr">Step 1 of 3</span>
                            <h5>Choose Recipient</h5>
                        </div>
                        <div class="recipient-list">
                            <button class="my-recipients active">
                                <span class="icon-area">
                                    <i class="icon-f-user"></i>
                                </span>
                                <span>My Recipients</span>
                            </button>
                            <button data-bs-toggle="modal" data-bs-target="#recipientsMod">
                                <span class="icon-area">
                                    <i class="icon-e-plus"></i>
                                </span>
                                <span>New Recipients</span>
                            </button>
                            {/* <button>
                                <span class="icon-area">
                                    <i class="icon-f-user"></i>
                                </span>
                                <span>Send to myself</span>
                            </button> */}
                        </div>
                        <p class="recipients-item">3 Recipients</p>
                    </div>
                    <form action="#" class="flex-fill">
                        <div class="form-group d-flex align-items-center">
                            <img src={search} alt="icon"/>
                            <input type="text" placeholder="Enter email, name or company"/>
                        </div>
                    </form>
                    <div class="user-select">
                        {connectedUsers.map((user, i) =>(
                            <div key={i}
                            class="single-user">
                                <div class="left d-flex align-items-center">
                                    <div class="img-area">
                                        <img src={avator} alt="image"/>
                                    </div>
                                    <div class="text-area">
                                        <p>{user.first_name || user.company_name} {user.last_name}</p>
                                        <span class="mdr">{user.email}</span>
                                    </div>
                                </div>
                                <div class="right">
                                    <a onClick={() =>setChooseRecipient(user.email)} value={user.email}
                                    href="#" style={{color: "#414BA3", ':hover': { color: "#fff" }}}>
                                        {chooseRecipient === user.email? <FaCheckDouble /> : null}
                                        Choose
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="footer-area mt-40" >
                        <Link to="http://localhost:5173/user/dashboard/transfer-money" 
                            style={{ color: "#414BA3" }}>
                            Previous Step
                        </Link>
                        <Link onClick={handleNext}
                        to="#" class="active">Next</Link>
                    </div>
        </>
    )
}

export default ChooseRecipient;