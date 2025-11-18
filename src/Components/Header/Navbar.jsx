import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/services"}>Srvices</NavLink>
      </li>
      <li>
        <NavLink>Aboute</NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={
            ({ isActive }) =>
              isActive
                ? " underline" // Active link style
                : "block px-4 py-2 text-black rounded hover:bg-gray-200" // Normal style
          }
        >
          Coverage
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
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
          <a class="text-xl">
            <Logo />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-4 px-1">{links}</ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
