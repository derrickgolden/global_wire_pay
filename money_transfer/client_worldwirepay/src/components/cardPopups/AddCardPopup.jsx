import { useEffect, useRef, useState } from "react";
import { collectUserDetails } from "../../assets/details/paymentDetails";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCallApi } from "../../redux/callApi";
import { server_baseurl } from "../../baseUrl";

const AddCardPopup = ({ cardType}) =>{
    const navigate = useNavigate()

    const ref = useRef(null)
    const {user_id} = useSelector(state => state.userDetails)
    const dispath = useDispatch()
    const card = collectUserDetails[cardType];
    
    const [newCard, setNewCard] = useState({user_id, card_name: cardType, email_or_id:"",
    full_names: "", acc_no: "", bank_name:"", routing_no: "", swift_code: ""
    })

    useEffect(() =>{
        if (cardType) {
            setNewCard(prevState => ({
            ...prevState,
            card_name: cardType // Update the user_id in newCard state
            }));
        }
    },[cardType])
    
    useEffect(() => {
        if (user_id) {
          setNewCard(prevState => ({
            ...prevState,
            user_id: user_id // Update the user_id in newCard state
          }));
        }
    }, [user_id]);

    const handleInputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setNewCard((obj) =>({...obj, [name]: value}))
    }

    const handleNewCardSubmit = (e) =>{
        e.preventDefault()

        const token = JSON.parse(sessionStorage.getItem("userToken"));
        const data = JSON.stringify(newCard);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/dashboard/add-card`,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            if(response.data.msg === "Card Registered"){
                if(response.data.success){
                    alert("Card added successfully")
                    ref.current.click()
                    dispath(setCallApi())
                }else{
                    alert(response.data.msg)
                    ref.current.click()
                }
            }else{
                alert(response.data.msg)
            }
        })
        .catch((error) => {
            console.log(error);
            if(error.response.data.reLogin){
                alert("Could not parse your authentication token. Please try to Login again.")
                navigate("/user/login");
            }else{
                alert("Sorry, an error occurred while fetching cards")
            }
        });
    }
    return(
        <div className="add-card">
        <div className="container-fruid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="addcardMod" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header justify-content-between">
                                    <h6>Add Card</h6>
                                    <button ref={ref} type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                </div>
                                <form action="#" onSubmit={handleNewCardSubmit} >
                                    <div className="row justify-content-center">
                                        {card.map((detail, i) =>(
                                            <div key={i} className="col-md-12">
                                                <div className="single-input">
                                                    <label htmlFor={detail.id}>{detail.label}</label>
                                                    <input required onChange={handleInputChange}
                                                        value = {newCard[detail.id]} name={detail.id}
                                                        type={detail.type} id={detail.id}
                                                        placeholder={detail.placeholder}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-12">
                                            <div className="btn-border w-100">
                                                <button type="submit" className="cmn-btn w-100">Add Card</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddCardPopup;