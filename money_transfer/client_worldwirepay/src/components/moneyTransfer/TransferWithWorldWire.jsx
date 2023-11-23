import { useEffect, useState } from "react";
import { avator, search, support_icon } from "../../assets/images";
import RecipientsPopup from "../cardPopups/RecipientsPopup";
import ChooseRecipient from "./ChooseRecipient";
import SendAmount from "./sendAmount";
import ConfirmTransfer from "./ConfirmTransfer";
import TransferPopup from "../cardPopups/TransferPopup";
import { useSelector } from "react-redux";
import FeedbackPopup from "../cardPopups/FeedbackPopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TransferWithWorldWire = () =>{
    const sender = useSelector(state => state.userDetails)
    const navigate = useNavigate()

    const [connectedUsers, setConnectedUsers] = useState([
        // {first_name: "John", last_name: "Doe", email:"example1@gmail.com"},
        // {first_name: "John", last_name: "Doe", email:"example2@gmail.com"},
        // {first_name: "John", last_name: "Doe", email:"example3@gmail.com"},
    ])
    const [steps, setSteps] = useState("1")
    const [chooseRecipient, setChooseRecipient] = useState("");
    const [transferDetails, setTransferDetails] = useState({amount:"", recipient: {}, sender})
    

    useEffect(() =>{
        setTransferDetails(obj =>({...obj, sender}));
    },[sender]);
    
    useEffect(() =>{
        setTransferDetails(obj =>({...obj, 
            recipient: connectedUsers.filter(user => user.email === chooseRecipient)[0]
        }));
    },[chooseRecipient]);

    const onHandleSubmitTransferDetails = (e) =>{
        const token = JSON.parse(sessionStorage.getItem("userToken"));

        const data = JSON.stringify(transferDetails);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/dashboard/transfer-money/world-wire-pay',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            alert(response.data.msg);
            navigate("/user/dashboard/transfers")
        })
        .catch((error) => {
            console.log(error);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Error: transfer was not successful")
            }
        });
    }
    return(
        <>
        <section class="dashboard-section body-collapse pay step">
        <div class="overlay pt-120">
            <div class="container-fruid">
                <div class="main-content">
                    <div class="head-area d-flex align-items-center justify-content-between">
                        <h4>Make a Payment</h4>
                        <div class="icon-area">
                            <img src={support_icon} alt="icon"/>
                        </div>
                    </div>
                    {
                        steps === "1"? (
                            <ChooseRecipient 
                                connectedUsers ={connectedUsers} 
                                setSteps = {setSteps}
                                setChooseRecipient={setChooseRecipient}
                                chooseRecipient = {chooseRecipient}
                            />
                        ): steps === "2" ? (
                            <SendAmount 
                                setSteps = {setSteps}
                                selectedUser = {transferDetails.recipient}
                                setTransferDetails = {setTransferDetails}
                                transferDetails = {transferDetails}
                            />
                        ): steps === "3" ? (
                            <ConfirmTransfer 
                                setSteps = {setSteps}
                                handleSubmitTransferDetails={onHandleSubmitTransferDetails}
                                transferDetails = {transferDetails}
                            />
                        ):  null
                    }
                </div>
            </div>
        </div>
        </section>
        <RecipientsPopup 
            setConnectedUsers={setConnectedUsers}
            setChooseRecipient ={setChooseRecipient}
        />
        {/* <FeedbackPopup /> */}
        {/* <TransferPopup /> */}
        </>
    )
}

export default TransferWithWorldWire;