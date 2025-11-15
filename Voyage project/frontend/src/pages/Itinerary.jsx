import React from "react";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaPlaneDeparture, FaHotel, FaUmbrellaBeach, FaHiking, FaUtensils } from "react-icons/fa";

const Itinerary = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Hotel Check-in",
      description: "Arrive at the destination, airport pickup, and check into your hotel. Evening at leisure.",
      icon: <FaPlaneDeparture />,
    },
    {
      day: "Day 2",
      title: "City Tour & Sightseeing",
      description: "Explore iconic landmarks, cultural sites, and take a guided city tour.",
      icon: <FaHotel />,
    },
    {
      day: "Day 3",
      title: "Beach & Relaxation",
      description: "Spend the day at the beach with optional water sports and sunset views.",
      icon: <FaUmbrellaBeach />,
    },
    {
      day: "Day 4",
      title: "Adventure Activities",
      description: "Enjoy hiking, trekking, or other adventure activities with local guides.",
      icon: <FaHiking />,
    },
    {
      day: "Day 5",
      title: "Local Cuisine & Departure",
      description: "Taste traditional dishes, shop souvenirs, and prepare for departure.",
      icon: <FaUtensils />,
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className=" py-16 px-6 text-[#474769]">
      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center  mb-6">
        Travel Itinerary
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        Your journey, perfectly planned! Explore the day-by-day itinerary for an unforgettable trip with Voyage.
      </p>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        <div className="border-l-4 border-[#474769]">
          {itinerary.map((item, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Icon */}
              <div className="absolute -left-9 flex items-center justify-center w-12 h-12 rounded-full bg-[#474769] text-white text-2xl shadow-lg">
                {item.icon}
              </div>
              {/* Content */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h2 className="text-xl font-bold  mb-2">
                  {item.day}: {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Itinerary;
