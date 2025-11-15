import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import { IoShieldCheckmark } from "react-icons/io5";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <CiGlobe className="w-12 h-12 text-blue-500" />,
      title: "Worldwide Destinations",
      desc: "Explore the most popular destinations around the world with exclusive packages.",
    },
    {
      icon: <IoShieldCheckmark className="w-12 h-12 text-green-400" />,
      title: "Trusted & Secure",
      desc: "We ensure your bookings are 100% safe and your travel experience is worry-free.",
    },
    {
      icon: <CiStar className="w-12 h-12 text-yellow-400" />,
      title: "Luxury Experience",
      desc: "Stay in premium hotels and enjoy luxury services at unbeatable prices.",
    },
    {
      icon: <FaHeadphones className="w-12 h-12 text-blue-400" />,
      title: "24/7 Support",
      desc: "Our travel experts are always available to assist you anytime, anywhere.",
    },
  ];

  return (
    <div className=" py-20 px-6 text-white">
      {/* Heading */}
      <h1 className="text-center text-6xl font-bold italic mb-6">  Why Choose <span className="text-[#474769]">Voyage?</span>    </h1>
      <p className="text-center text-lg mb-12 ">
        We make your travel experience smooth, luxurious, and unforgettable. <br />Here’s why thousands trust us.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition "
          >
            <div className="flex justify-center mb-4">{reason.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{reason.title}</h2>
            <p className="text-white">{reason.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
