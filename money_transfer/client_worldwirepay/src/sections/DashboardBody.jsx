import { Outlet } from "react-router-dom";
import AccDetails from "../components/AccDetails";
import LinkedPayments from "../components/LickedPayments";
import Transations from "../components/Transations";
import AddCardPopup from "../components/cardPopups/AddCardPopup";
import { useEffect, useState } from "react";
import CardDetailsPopup from "../components/cardPopups/cardDetailsPopup";

const DashboardBody = () =>{
    const [cardType, setCardType] = useState("payoneer");
    const onHandleAddCardPopup = (e) =>{
        setCardType(e.target.id);
    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <section className="dashboard-section body-collapse u-dash">
        <div className="overlay pt-120">
            <div className="container-fruid">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="section-content">
                            <AccDetails />
                            <Transations />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="side-items">
                            <LinkedPayments 
                                handleAddCardPopup = {onHandleAddCardPopup}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <AddCardPopup 
            handleAddCardPopup = {onHandleAddCardPopup} 
            cardType = {cardType} />

        <CardDetailsPopup />
        <Outlet />
    </>
    )
}

export default DashboardBody;