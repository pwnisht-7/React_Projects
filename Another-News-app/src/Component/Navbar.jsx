// import React from 'react'
import logo from "/logo.png"
import Form from './Form'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 bg-white'>
      <img src={logo} alt="logo" className='h-20' />
      <h1 className='text-4xl'>Pwnisht News Forecast</h1>
      <Form />
    </div>
  )
}

export default Navbar
