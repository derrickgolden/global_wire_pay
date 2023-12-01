import { Link } from "react-router-dom";
import { avator, search } from "../../assets/images";

import { FaCheckDouble } from "react-icons/fa6";
import { client_baseurl } from "../../baseUrl";

const ChooseRecipient = ({connectedUsers, setSteps, chooseRecipient, setChooseRecipient}) =>{
    const handleNext = () =>{
        if(!chooseRecipient) return alert("You have not choosen any recipient. If the recipient is not included in my recipient, add them first")
        setSteps("2");
    }
    return(
        <>
        <div className="choose-recipient">
                        <div className="step-area">
                            <span className="mdr">Step 1 of 3</span>
                            <h5>Choose Recipient</h5>
                        </div>
                        <div className="recipient-list">
                            <button className="my-recipients active">
                                <span className="icon-area">
                                    <i className="icon-f-user"></i>
                                </span>
                                <span>My Recipients</span>
                            </button>
                            <button data-bs-toggle="modal" data-bs-target="#recipientsMod">
                                <span className="icon-area">
                                    <i className="icon-e-plus"></i>
                                </span>
                                <span>New Recipients</span>
                            </button>
                            {/* <button>
                                <span className="icon-area">
                                    <i className="icon-f-user"></i>
                                </span>
                                <span>Send to myself</span>
                            </button> */}
                        </div>
                        <p className="recipients-item">{connectedUsers?.length} Recipients</p>
                    </div>
                    <form action="#" className="flex-fill">
                        <div className="form-group d-flex align-items-center">
                            <img src={search} alt="icon"/>
                            <input type="text" placeholder="Enter email, name or company"/>
                        </div>
                    </form>
                    <div className="user-select">
                        {connectedUsers.map((user, i) =>(
                            <div key={i}
                            className="single-user">
                                <div className="left d-flex align-items-center">
                                    <div className="img-area">
                                        <img src={avator} alt="image"/>
                                    </div>
                                    <div className="text-area">
                                        <p>{user.first_name || user.company_name} {user.last_name}</p>
                                        <span className="mdr">{user.email}</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <a onClick={() =>setChooseRecipient(user.email)} value={user.email}
                                    href="#" style={{color: "#414BA3", ':hover': { color: "#fff" }}}>
                                        {chooseRecipient === user.email? <FaCheckDouble /> : null}
                                        Choose
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="footer-area mt-40" >
                        <Link to={`${client_baseurl}/user/dashboard/transfer-money`}
                            style={{ color: "#414BA3" }}>
                            Previous Step
                        </Link>
                        <Link onClick={handleNext}
                        to="#" className="active">Next</Link>
                    </div>
        </>
    )
}

export default ChooseRecipient;