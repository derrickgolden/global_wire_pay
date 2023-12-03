import { Link } from "react-router-dom"
import { success } from "../../assets/images"
import { client_baseurl } from "../../baseUrl"

const FeedbackPopup = ({transationDetails}) =>{
    const handleLinkClick = () => {
        window.location.reload();
    };
    
    return(
        <div className="congratulations-popup purchased-popup modal-open">
        <div className="container-fruid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="congratulationsMod" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="main-content text-center pt-120 pb-120">
                                    <img className="mb-60" src={success} alt="icon"/>
                                    <h4 className="mb-30">Congratulations</h4>
                                    <p>You have successfully transacted: <br/>
                                        {transationDetails.amount} {transationDetails.currency} 
                                    </p>
                                    <Link to={`${client_baseurl}/#/user/dashboard`} className="mt-40"
                                        reloadDocument
                                        onClick={handleLinkClick}
                                    >Back to Dashboard</Link>
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

export default FeedbackPopup