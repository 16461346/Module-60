import React from "react";
import Logo from "../Components/Logo/Logo";
import { NavLink, Outlet } from "react-router";
import image from "../assets/authImage.png";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavLink to={'/'}>
        <Logo></Logo>
      </NavLink>
      <div className="md:flex min-h-screen justify-center gap-15 items-center">
        <div>
          <Outlet />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AuthLayout;
