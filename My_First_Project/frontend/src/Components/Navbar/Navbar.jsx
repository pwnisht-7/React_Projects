// import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF  } from "react-icons/fa";
import { FaTiktok  } from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa6";
import Logo from "./Logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="py-4 px-28 flex items-center justify-between gap-36 w-full h-20">
        <div className="flex items-center justify-center">
          <Link to=""><img src={Logo} alt="logo" /></Link>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-7">
            <li>
              <Link to="about" className="text-md">About Us</Link>
            </li>
            <li>
              <Link to="menu" className="text-md">Our Menu</Link>
            </li>
            <li>
              <Link to="service" className="text-md">Our Services</Link>
            </li>
            <li>
              <Link to="advice" className="text-md">Allergy Advice</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
            <div>
                <ul className="flex gap-3">
                    <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                        <a href="" className="text-md text-white">
                        <FaFacebookF  />
                        </a>
                    </li>
                    <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                        <a href="" className="text-md text-white">
                        <FaTiktok  />
                        </a>
                    </li>
                    <li className="h-8 w-8 bg-slate-400 flex items-center justify-center hover:bg-orange-600 rounded-full">
                        <a href="" className="text-xl text-white">
                        <FaInstagram  />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <Link to='contact'><Button 
                className="bg-orange-600 px-6 py-2 rounded-full border-orange-600 border-2 text-white hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-600"
                text="Contact Us"
                /></Link>
            </div>
        </div>
      </div>
    </> 
  );
};

export default Navbar;
