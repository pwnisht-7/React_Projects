// import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
const Footer = () => {
  return (
    <div className="py-14 px-40 flex gap-36">
      <div className="w-96 flex flex-col gap-4">
        <div>
          <img className="h-10 w-40" src={Logo} />
        </div>
        <div>
          <p className="leading-12 text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-[#0C6967] font-bold text-2xl">momos</h1>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="menu">Our Menu</Link>
              </li>
              <li>
                <Link to="service">Our Services</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-[#0C6967] font-bold text-2xl">Legals</h1>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="about">Terms & Condition</Link>
              </li>
              <li>
                <Link to="menu">Privacy Policy</Link>
              </li>
              <li>
                <Link to="service">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0C6967] font-bold text-2xl">Follow Us</h1>
        <div>
          <ul className="flex gap-4">
            <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
              <Link>
                <FaFacebookF />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
