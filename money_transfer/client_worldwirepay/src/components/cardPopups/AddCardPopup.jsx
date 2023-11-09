import { userCardDetails } from "../../assets/details/paymentDetails";

const AddCardPopup = ({handleAddCardPopup, cardType}) =>{
    const card = userCardDetails[cardType];
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
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <form action="#" >
                                    <div class="row justify-content-center">
                                        {card.details.map((detail,i) =>(
                                            <div class="col-md-12">
                                                <div class="single-input">
                                                    <label for={detail.id}>{detail.label}</label>
                                                    <input required
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