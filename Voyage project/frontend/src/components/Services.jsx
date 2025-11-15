import React from "react";
import { FaPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { CiCompass1 } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";


const Services = () => {
  const services = [
    {
      icon: <FaPlane className="w-12 h-12 text-blue-400" />,
      title: "Flight Bookings",
      desc: "Book affordable domestic and international flights with ease.",
    },
    {
      icon: <FaHotel className="w-12 h-12 text-green-400" />,
      title: "Hotel Reservations",
      desc: "Stay in top-rated hotels with exclusive Voyage deals.",
    },
    {
      icon: <CiCompass1 className="w-12 h-12 text-yellow-400" />,
      title: "Guided Tours",
      desc: "Enjoy personalized guided tours to discover hidden gems worldwide.",
    },
    {
      icon: <FaCamera className="w-12 h-12 text-pink-400" />,
      title: "Adventure Packages",
      desc: "From safaris to scuba diving, we craft unforgettable adventures.",
    },
  ];

  return (
    <div className="py-20 px-6">
      {/* Heading */}
      <h1 className="text-center text-6xl text-white font-bold italic mb-6">
        Our <span className="text-[#474769]">Services</span>
      </h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-white">
        Voyage is more than just a travel booking site. We provide end-to-end
        travel solutions that ensure your journey is smooth, safe, and exciting.
      </p>

      {/* Service Cards */}
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 text-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 duration-500 transition hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
