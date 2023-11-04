import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import LandingPageHeader from "../components/landingPageHeader";
import LandingPageBody from "../sections/LandingPageBody"
import Signup from "../components/Signup";

const LandingPage = () =>{

    // const 
    return(
        <>
        <LandingPageHeader />
        <LandingPageBody/>
        </>
    )
}

export default LandingPage;