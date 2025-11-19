import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    
      <div className="flex items-end gap-0 ">
        <img src={logo} alt="" />
        <h1 className="text-2xl  font-bold -ms-3.5">SapShift</h1>
      </div>
    
  );
};

export default Logo;
