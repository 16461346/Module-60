import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import image from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex items-center justify-between">
        <div>
          <Outlet />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
