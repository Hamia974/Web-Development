import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaGlobe, FaHandshake, FaSmile, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Navbar/>

 {/* Heading */}
      <h1 className="text-center text-5xl font-bold italic my-6">
        About <span className="text-[#474769]">Voyage</span>
      </h1>
      <p className="text-center text-lg text- w-[700px] mx-auto mb-12 text-[#474769]">
        At Voyage, we believe travel is not just about visiting places — it's
        about creating lifelong memories. Our mission is to make traveling
        simple, affordable, and inspiring for everyone.
      </p>

      {/* Mission & Vision */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/10 p-8 rounded-2xl shadow-lg  border border-[#474769]/10 hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-semibold mb-4 text-[#474769]">
            Our Mission
          </h2>
          <p className="text-[#474769]">
            To make traveling accessible and stress-free by offering affordable
            packages, seamless bookings, and exceptional service that travelers
            can trust.
          </p>
        </div>
        <div className="bg-white/10 p-8 rounded-2xl shadow-lg  border border-[#474769]/10 hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-semibold mb-4 text-[#474769]">
            Our Vision
          </h2>
          <p className="text-[#474769]">
            To become the world's most trusted travel companion, inspiring
            people to explore, connect, and experience the beauty of our planet.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h2 className="text-center text-3xl font-bold italic my-10">
        Our <span className="text-[#474769]">Core Values</span>
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
        <div className="bg-white/10 p-6 border border-[#474769]/10 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-500 text-[#474769]">
          <FaGlobe className="w-10 h-10 mx-auto mb-4 text-blue-400" />
          <h3 className="font-semibold text-xl mb-2 ">Global Reach</h3>
          <p>  Explore worldwide destinations with ease.  </p>
        </div>
        <div className="bg-white/10 p-6 border border-[#474769]/10 rounded-2xl text-[#474769] shadow-lg text-center hover:scale-105 transition duration-500">
          <FaHandshake className="w-10 h-10 mx-auto mb-4 text-green-400" />
          <h3 className="font-semibold text-xl mb-2">Trust & Care</h3>
          <p >
            We put our travelers first, always.
          </p>
        </div>
        <div className="bg-white/10 p-6 border border-[#474769]/10 rounded-2xl shadow-lg text-[#474769] text-center hover:scale-105 transition duration-500">
          <FaSmile className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
          <h3 className="font-semibold text-xl mb-2">Memorable Trips</h3>
          <p >
            Creating experiences you'll cherish forever.
          </p>
        </div>
        <div className="bg-white/10 p-6 border border-[#474769]/10 rounded-2xl text-[#474769] shadow-lg text-center hover:scale-105 transition duration-500">
          <FaLeaf className="w-10 h-10 mx-auto mb-4 text-pink-400" />
          <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
          <p>
            Promoting eco-friendly and responsible travel.
          </p>
        </div>
</div>
      <Footer/>
    </div>
  )
}

export default About
