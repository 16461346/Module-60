import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to={'/'}>
      <div className="flex items-end gap-0 ">
        <img src={logo} alt="" />
        <h1 className="text-2xl  font-bold -ms-3.5">SapShift</h1>
      </div>
    </NavLink>
  );
};

export default Logo;
