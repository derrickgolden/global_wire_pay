import AccDetails from "../components/AccDetails";
import LinkedPayments from "../components/LickedPayments";
import Transations from "../components/Transations";

const DashboardBody = () =>{
    return(
        <section class="dashboard-section body-collapse">
        <div class="overlay pt-120">
            <div class="container-fruid">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="section-content">
                            <AccDetails />
                            <Transations />
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="side-items">
                            <LinkedPayments />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default DashboardBody;