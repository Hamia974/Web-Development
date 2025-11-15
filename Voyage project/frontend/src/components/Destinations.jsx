import React from "react";

const Destinations = () => {
  const places = [
    {
      title: "Dubai, UAE",
      video: "/dubai.mp4",
    },
    {
      title: "Paris, France",
      video: "/paris.mp4",
    },
    {
      title: "Tokyo, Japan",
      video: "tokyo.mp4",
    },
    {
      title: "Maldives",
      video: "maldives.mp4",
    },
    {
      title: "Cairo, Egypt",
      video: "cairo.mp4",
    },
    {
      title: "New York, USA",
      video: "newyork.mp4",
    },
  ];

  return (
    <div className=" py-16 px-6" id="packages">
      {/* Heading */}
      <h1 className="text-center text-white text-5xl italic font-bold mb-12 drop-shadow-lg">
        POPULAR DESTINATIONS
      </h1>

      {/* Grid of videos */}
      <div className="grid md:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            {/* Video */}
            <video
              src={place.video}
              autoPlay
              loop
              muted
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-white text-2xl font-bold">{place.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
