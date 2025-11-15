import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      
 {/* Heading */}
      <h1 className="text-center text-5xl font-bold italic text-[#474769] my-10"> CONTACT US  </h1>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Form */}
        <form className="bg-white/10 border border-[#474769]/20 p-8 rounded-2xl shadow-lg">
          <div className="mb-6 flex flex-col gap-3">
            <label className=" text-[#474769]">*Name</label> 
            <input type="text"   placeholder="Enter Your Name"
              className="w-full p-3 rounded-lg border border-[#474769]/50  focus:outline-none focus:ring-2 focus:ring-[#474769]"
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label className=" text-[#474769]">*Email</label> 
            <input
              type="email"   placeholder="Enter Your Email"
              className="w-full p-3 rounded-lg border border-[#474769]/50 focus:outline-none focus:ring-2 focus:ring-[#474769]"
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label className=" text-[#474769]">*Message</label> 
            <textarea   rows="5"  placeholder="Enter Your Message"
              className="w-full p-3 rounded-lg border border-[#474769]/50 focus:outline-none focus:ring-2 focus:ring-[#474769]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#474769] text-white  p-3 rounded-lg shadow-lg hover:bg-[#474769]/80 hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-white/10 border border-[#474769]/20  p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#474769] mb-6">Contact Information</h2>
          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="w-6 h-6 text-blue-400" />
            <p>voyage@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaPhone className="w-6 h-6 text-green-400" />
            <p>0302-0448628</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="w-6 h-6 text-pink-400" />
            <p>123 Sabzazar, Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact
