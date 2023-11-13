import { useEffect, useRef, useState } from "react";
import { collectUserDetails } from "../../assets/details/paymentDetails";
import { useSelector } from "react-redux";
import axios from "axios";

const AddCardPopup = ({ cardType}) =>{
    const ref = useRef(null)
    const {user_id} = useSelector(state => state.userDetails)
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
        console.log(newCard)
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
        setNewCard((obj) =>({...obj, [name]: value}))
    }
    const handleNewCardSubmit = (e) =>{
        e.preventDefault()

        const data = JSON.stringify(newCard);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/dashboard/add-card',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(response.data);
            if(response.data.msg === "Card Registered"){
                if(response.data.success){
                    alert("Card added successfully")
                    ref.current.click()
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
            alert("Server side error")
            // setSignupDetails((obj) =>({...obj, password: ""}))
        });
    }
    return(
        <div class="add-card">
        <div class="container-fruid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="modal fade" id="addcardMod" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header justify-content-between">
                                    <h6>Add Card</h6>
                                    <button ref={ref} type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <form action="#" onSubmit={handleNewCardSubmit} >
                                    <div class="row justify-content-center">
                                        {card.map((detail,i) =>(
                                            <div class="col-md-12">
                                                <div class="single-input">
                                                    <label for={detail.id}>{detail.label}</label>
                                                    <input required onChange={handleInputChange}
                                                        value = {newCard[detail.id]} name={detail.id}
                                                        type={detail.type} id={detail.id}
                                                        placeholder={detail.placeholder}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div class="col-12">
                                            <div class="btn-border w-100">
                                                <button type="submit" class="cmn-btn w-100">Add Card</button>
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