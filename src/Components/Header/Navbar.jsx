import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";
import useAuth from "../../Firebase/Hooks/useAuth";

const Navbar = () => {
  const { user,logOut } = useAuth();

  const handleLogOut=()=>{
    logOut()
    .then(resust=>{
      console.log(resust)
    })
    .catch(erre=>{
      console.log(erre)
    })
  }

  const links = (
    <>
      <li>
        <NavLink
          to="/services"
          className={
            ({ isActive }) =>
              isActive
                ? "bg-primary font-bold" // Active link style
                : "" // Normal style
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sendParsel"
          className={
            ({ isActive }) =>
              isActive
                ? "bg-primary font-bold" // Active link style
                : "" // Normal style
          }
        >
          Send Parsel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboute"
          className={
            ({ isActive }) =>
              isActive
                ? "bg-primary font-bold" // Active link style
                : "" // Normal style
          }
        >
         Aboute
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={
            ({ isActive }) =>
              isActive
                ? "bg-primary font-bold" // Active link style
                : "" // Normal style
          }
        >
          Coverage
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl">
      <div class="navbar  bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to={'/'} class="text-xl">
            <Logo />
          </NavLink>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-6 px-1">{links}</ul>
        </div>
        <div class="navbar-end flex gap-4">
          {user ? (
            <button onClick={handleLogOut} class="btn">Log Out</button>
          ) : (
            <NavLink className={'btn'} to={"/login"} class="btn">
              Login
            </NavLink>
          )}
          <NavLink className={'btn bg-primary '} to={'/rider'}>Be a Rider </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
