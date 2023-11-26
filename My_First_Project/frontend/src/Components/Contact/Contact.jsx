// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import Button from "../Button/Button";
const Contact = () => {
  return (
    <>
      <section className="w-[1440px] h-[585px] py-16 px-36 flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <h1 className="font-[allura] text-6xl text-[#0C6967] font-bold">Our Contact</h1>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-2xl uppercase text-center text-slate-500 tracking-widest">
            get in touch
          </h3>
          <h1 className="text-3xl font-bold capitalize">
            <span className="text-orange-600">Our Friendly Team</span> would
            love to hear from you
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-[233px] w-[360px] shadow-md shadow-slate-500 flex gap-10 p-10 flex-col rounded-lg">
            <div className="flex items-start text-orange-600 relative text-2xl gap-3">
              <FaLocationDot />
              <h1 className="text-slate-900 uppercase absolute -top-1 left-12">
                location
              </h1>
            </div>
            <div>
              <h1 className="text-lg italic">
                New Baneshwor -41201, Kathmandu, Bagmati, Nepal
              </h1>
            </div>
          </div>
          <div className="h-[233px] w-[360px] shadow-md shadow-slate-500 flex gap-10 p-10 flex-col rounded-lg">
            <div className="flex items-start text-orange-600 relative text-2xl gap-3">
              <FaPhone />
              <h1 className="text-slate-900 uppercase absolute -top-1 left-12">
                Phone
              </h1>
            </div>
            <div className="flex justify-between gap-4 flex-col">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#0C6967] font-bold">Mobile:</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="italic">(+977) 980 5689789</h1>
                  <h1 className="italic">(+977) 9841 275897</h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[#0C6967] font-bold">Tel:</h1>
                <h1>01-4783972</h1>
              </div>
            </div>
          </div>
          <div className="h-[233px] w-[360px] shadow-md shadow-slate-500 flex gap-10 p-10 flex-col rounded-lg">
            <div className="flex items-start text-orange-600 relative text-2xl gap-3">
              <FaClock />
              <h1 className="text-slate-900 uppercase absolute -top-1 left-12">
                Service Time
              </h1>
            </div>
            <div className="flex justify-between gap-4 flex-col">
              <div className="flex items-center justify-between">
                <h1 className="text-[#0C6967] font-bold">MON - FRI</h1>
                <h1 className="italic">8 am - 8 pm</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[#0C6967] font-bold">SAT - SUN</h1>
                <h1 className="italic">Closed</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1440px] h-[1062px] flex">
        <div className="h-[1062px] w-[611px]"><iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d89720.73725515563!2d85.32816804200885!3d27.700832260020054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzI0LjciTiA4NcKwMjAnMDYuNyJF!5e0!3m2!1sen!2snp!4v1700793686236!5m2!1sen!2snp"
            width="611px"
            height="1062px"
            loading="lazy"
          ></iframe></div>
          <div className="w-[828px] bg-slate-50 h-[1062px] py-12 px-36">
            <div className="w-[608px] h-[966px] bg-white">
              <form action="" className="w-full h-full flex flex-col gap-12 px-10 py-5">
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-bold">Contact <span className="text-orange-600">Us</span></h1>
                  <p className="text-slate-600 capitalize">if you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 w-[256px]">
                      <label htmlFor="">Firstname</label>
                      <input type="text" name="" id="" className="border-2 rounded-md py-4" />
                    </div>
                    <div className="flex flex-col gap-2 w-[256px]">
                      <label htmlFor="">Lastname</label>
                      <input type="text" name="" id="" className="border-2 rounded-md py-4" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="">What Can We Serve For You</label>
                    <select name="" id="" className="py-4 px-2 rounded-md border-2 bg-white">
                      <option value="" className="bg-white">Choose</option>
                      <option value="" className="bg-white">Choose</option>
                      <option value="" className="bg-white">Choose</option>
                      <option value="" className="bg-white">Choose</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="border-2 rounded-md py-4" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="">Phone Number</label>
                    <div className="flex border-2 rounded-md">
                      <select name="" id="" className="py-4 px-3 rounded-md bg-white">
                        <option value="">+977</option>
                        <option value="">+977</option>
                        <option value="">+977</option>
                        <option value="">+977</option>
                      </select>
                      <input type="text" name="" id="" className="w-full border-l-2 px-2"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="60" rows="6" className="rounded-md border-2"></textarea>
                  </div>
                </div>
                <div>
                  <Button text='Send Message' className='px-10 py-4 bg-[#0C6967] text-white rounded-md' />
                </div>
              </form>
            </div>
          </div>
      </section>
    </>
  );
};

export default Contact;
