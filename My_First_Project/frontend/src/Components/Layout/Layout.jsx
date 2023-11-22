import { Outlet } from "react-router-dom";
// import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar
      className="w-full bg-slate-300" 
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
