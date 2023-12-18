// import React from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Logo from "./Logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <div className=" w-[1440px] py-4 px-28 flex items-center justify-between gap-36 h-20 bg-white shadow-sm shadow-slate-300 z-10">
        <div className="flex items-center justify-center">
          <NavLink to="">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-7">
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#0C6967]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0C6967] lg:p-0`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#0C6967]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0C6967] lg:p-0`
                }
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="service"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#0C6967]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0C6967] lg:p-0`
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="advice"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#0C6967]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0C6967] lg:p-0`
                }
              >
                Allergy Advice
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <ul className="flex gap-3">
              <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                <a href="" className="text-md text-white">
                  <FaFacebookF />
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                <a href="" className="text-md text-white">
                  <FaTiktok />
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                <a href="" className="text-xl text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <NavLink to="contact">
              <Button
                className="bg-orange-600 px-6 py-2 rounded-full border-orange-600 border-2 text-white hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-600"
                text="Contact Us"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
