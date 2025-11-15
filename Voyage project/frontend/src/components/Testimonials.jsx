import React from "react";
import { CiStar } from "react-icons/ci";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sophia Johnson",
            location: "USA",
            img: "t1.jpeg",
            review: "Voyage made my trip to Paris unforgettable! The booking process was smooth and the guided tours were amazing.",
            rating: 5,
        },
        {
            name: "Ali Khan",
            location: "Pakistan",
            img: "/t2.jpg",
            review:
                "I booked my honeymoon to Maldives with Voyage and everything was perfect — hotels, flights, and adventures!",
            rating: 5,
        },
        {
            name: "Emma Williams",
            location: "UK",
            img: "t3.jpg",
            review:
                "The customer support was fantastic. They helped me rebook my flight within minutes. Highly recommended!",
            rating: 4,
        },
    ];

    return (
        <div className=" py-20 px-6 text-white">
            {/* Heading */}
            <h1 className="text-center text-5xl font-bold italic mb-6">
                What Our <span className="text-[#474769]">Travelers Say</span>
            </h1>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-200">
                Hear from our happy customers who trusted Voyage for their dream
                vacations.
            </p>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 px-10">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white/10 rounded-2xl p-6 shadow-lg text-center flex flex-col justify-center items-center transform hover:scale-105 transition duration-500"
                    >
                        {/* Profile Image */}
                        <img
                            src={t.img}
                            alt={t.name}
                            className="w-20 h-20 rounded-full mb-4 border-4 border-[#474769] "
                        />
                        {/* Name & Location */}
                        <h2 className="text-xl font-semibold">{t.name}</h2>
                        <p className="text-gray-300 text-sm mb-2">{t.location}</p>

                        {/* Review */}
                        <p className="text-gray-200 italic mb-4">"{t.review}"</p>

                        {/* Rating */}
                        <div className="flex justify-center">
                            <CiStar className="w-5 h-5 text-yellow-400" />
                            <CiStar className="w-5 h-5 text-yellow-400" />
                            <CiStar className="w-5 h-5 text-yellow-400" />
                            <CiStar className="w-5 h-5 text-yellow-400" />
                            <CiStar className="w-5 h-5 text-yellow-400" />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
