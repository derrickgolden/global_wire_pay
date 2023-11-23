import { useRef, useState } from "react";
import { company_icon, individual_icon, user_profile } from "../../assets/images";
import { countries } from 'countries-list'


const RecipientsPopup = ({setConnectedUsers, setChooseRecipient}) =>{
    const btnRef = useRef(null)
    const [recipientDetails, setRecipientDetails] = useState({
        user_type: "company", company_name:"",
        last_name: "", first_name:"",email:"", country: "US"
    })
    const handleInputChange = (e) =>{
        // console.log(e)
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
        setRecipientDetails((obj) =>({...obj, [name]: value}))
        console.log(recipientDetails);
    }
    const handleButtonClick = (e) =>{
        const name = e.target.name
        name === "company" ? 
            setRecipientDetails({
                user_type: "company", company_name:"",
                last_name: "", first_name:"",email:"", country: "US"
            }) :
            setRecipientDetails({
                user_type: "individual", company_name:"",
                last_name: "", first_name:"",email:"", country: "US"
            })
    }
    const handleRecipientDetailsSubmit = (e) =>{
        e.preventDefault();
        setConnectedUsers(arr => [recipientDetails, ...arr] );
        setChooseRecipient(recipientDetails.email);
        btnRef.current.click();
    }
    return(
        <div className="add-recipients">
        <div className="container-fruid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="recipientsMod" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header justify-content-between">
                                    <h6>Add Recipient</h6>
                                    <button ref={btnRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                </div>
                                <ul style={{flexWrap: "nowrap"}}
                                className="nav nav-tabs flex flex-row no-wrap" role="tablist" >
                                    <li className="nav-item" role="presentation">
                                        <button onClick={handleButtonClick} name="company"
                                        className={`${recipientDetails.user_type === "company"? "active" : " " } nav-link`}  
                                        data-bs-toggle="tab"
                                            data-bs-target="#company" type="button" role="tab" aria-controls="company"
                                            aria-selected="true">
                                            <span className="icon-area flex justify-center align-center">
                                                <img src={company_icon} alt="icon"/>
                                            </span>
                                            Company
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={handleButtonClick} name="individual"
                                        className={`${recipientDetails.user_type === "individual"? "active" : " " } nav-link`}  
                                        data-bs-toggle="tab"
                                            data-bs-target="#individual" type="button" role="tab" aria-controls="individual"
                                            aria-selected="false">
                                            <span className="icon-area flex justify-center align-center">
                                                <img src={individual_icon} alt="icon"/>
                                            </span>
                                            Individual
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="company" role="tabpanel" aria-labelledby="company-tab">
                                        <div className="image-area mt-30 text-center">
                                            <img src={user_profile} alt="icon"/>
                                        </div>
                                        <form action="#" onSubmit={handleRecipientDetailsSubmit}>
                                            <div className="row justify-content-center">
                                                {recipientDetails.user_type === "company" ? (
                                                    <div className="col-md-12">
                                                        <div className="single-input">
                                                            <label style={{color: "#212529"}}
                                                            htmlFor="companyname">Company Name</label>
                                                            <input onChange={handleInputChange} required
                                                            value={recipientDetails.company_name} name="company_name"
                                                            type="text" id="companyname" placeholder="Internatial lmtd"/>
                                                        </div>
                                                    </div> 
                                                ):(
                                                    <>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <label style={{color: "#212529"}}
                                                            htmlFor="companyfname">First Name</label>
                                                            <input onChange={handleInputChange} required
                                                            value={recipientDetails.first_name} name="first_name"
                                                            type="text" id="companyfname" placeholder="Dana"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <label style={{color: "#212529"}}
                                                            htmlFor="companylname">Last Name</label>
                                                            <input onChange={handleInputChange} required
                                                            value={recipientDetails.last_name} name="last_name"
                                                            type="text" id="companylname" placeholder="Patton"/>
                                                        </div>
                                                    </div>
                                                    </>
                                                )}
                                                <div className="col-md-12">
                                                    <div className="single-input">
                                                        <label style={{color: "#212529"}}
                                                        htmlFor="companyemail">Email</label>
                                                        <input onChange={handleInputChange} required
                                                        value={recipientDetails.email} name="email"
                                                        type="text" id="email" placeholder="danap24@gmail.com"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label style={{color: "#212529"}}
                                                        htmlFor="country">Select Country</label>
                                                        <select onChange={handleInputChange} name='country' id="country"
                                                        value={recipientDetails.country} 
                                                         className="w-3/4" style={{width: "80%"}}>
                                                            
                                                            {Object.keys(countries).map((code, i) =>(
                                                                <option key={i} value={code}
                                                                style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                                    {countries[code].name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12">
                                                    <div className="single-input">
                                                        <label htmlFor="companyphone">Phone</label>
                                                        <div className="select-area d-flex align-items-center">
                                                            <span style={{paddingRight: "5px"}}>+{countries[recipientDetails.country].phone}</span>
                                                            <input type="text" id="companyphone" placeholder="(070) 4567-8800"/>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                
                                                <div className="col-12">
                                                    <div className="btn-border w-100">
                                                        <button className="cmn-btn w-100">Add Recipient</button>
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
        </div>
    </div>
    )
}

export default RecipientsPopup;