
import Header from "../sections/Header";
import DashboardBody from "../sections/DashboardBody";
import { Outlet } from "react-router-dom";

const Dashboard = ({}) =>{
    return(
        <>
            {/* <Header /> */}
            <DashboardBody />
            <Outlet/>
        </>
    )
}

export default Dashboard;