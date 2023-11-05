import { Link } from "react-router-dom"

const FeedbackPopup = () =>{
    return(
        <div class="congratulations-popup purchased-popup modal-open">
        <div class="container-fruid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="modal fade" id="congratulationsMod" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <div class="main-content text-center pt-120 pb-120">
                                    <img class="mb-60" src="assets/images/icon/success.png" alt="icon"/>
                                    <h4 class="mb-30">Congratulations</h4>
                                    <p>You have successfully add fund your account for $400.00 USD</p>
                                    <Link to='http://localhost:5173/user/dashboard' class="mt-40">Back to Dashboard</Link>
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