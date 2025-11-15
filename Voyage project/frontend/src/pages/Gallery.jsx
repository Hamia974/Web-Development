import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
const Gallery = () => {
  const images = [
    { name: "dubai", file: "dubai.jpg" },
    { name: "paris", file: "paris.jpg" },
    { name: "maldives", file: "maldives.jpg" },
    { name: "turkey", file: "turkey.jpg" },
    { name: "egypt", file: "egypt.jpg" },
    { name: "bali", file: "bali.jpg" },
    { name: "london", file: "london.jpg" },
    { name: "switzerland", file: "switzerland.jpg" },
    { name: "newyork", file: "newyork.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <div className="m-10">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center italic text-[#474769] mb-5">
          Voyage Gallery
        </h1>
        <p className="text-center text-[#474769] max-w-2xl mx-auto mb-10">
          Explore breathtaking views and magical destinations from across the
          globe. Get inspired for your next adventure with Voyage.
        </p>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {images.map((item, index) => (
            <Link to={`/gallery/${item.name}`} key={index}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={item.file}
                  alt={item.name}
                  className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                  <p className="text-white text-lg font-semibold">
                    {item.name.toUpperCase()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
