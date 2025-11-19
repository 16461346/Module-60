import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout=()=>{

    return(
        <div className="max-w-7xl  mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer position="center"/>
        </div>
    )
}

export default MainLayout;