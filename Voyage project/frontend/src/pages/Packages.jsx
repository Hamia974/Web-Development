import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Packages = () => {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    activities: [],
    date: "",
    budget: "",
    hotel: "",
    payment: {
      name: "",
      email: "",
      card: "",
    },
  });

  const activitiesList = ["City Tour", "Beach Party", "Hiking", "Museum Visit", "Food Tour"];

  const hotels = [
    { name: "Sunrise Resort", price: 200, rating: 4.5, img: "hotel1.jpg" },
    { name: "Ocean View Hotel", price: 350, rating: 4.8, img: "hotel2.jpg" },
    { name: "Mountain Lodge", price: 150, rating: 4.2, img: "hotel3.jpg" },
  ];

  const handleActivityChange = (activity) => {
    setFormData((prev) => {
      const newActivities = prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity];
      return { ...prev, activities: newActivities };
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-6" style={{ color: "#474769" }}>
        Travel Packages
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Customize your dream trip with Voyage – step by step!
      </p>

      {/* Card Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Step 1: Select Activities */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#474769" }}>
              Select Your Activities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {activitiesList.map((activity) => (
                <button
                  key={activity}
                  onClick={() => handleActivityChange(activity)}
                  className={`p-4 rounded-xl border ${
                    formData.activities.includes(activity)
                      ? "bg-[#474769] text-white"
                      : "bg-gray-100 text-gray-700"
                  } transition`}
                >
                  {activity}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#474769] text-white hover:bg-[#3a3a58] transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#474769" }}>
              Choose Your Travel Date
            </h2>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#474769]"
            />
            <div className="mt-6 flex justify-between">
              <button onClick={handleBack} className="px-6 py-2 rounded-lg border text-[#474769]">
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#474769] text-white hover:bg-[#3a3a58] transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#474769" }}>
              Set Your Budget ($)
            </h2>
            <input
              type="number"
              placeholder="Enter your budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#474769]"
            />
            <div className="mt-6 flex justify-between">
              <button onClick={handleBack} className="px-6 py-2 rounded-lg border text-[#474769]">
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#474769] text-white hover:bg-[#3a3a58] transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Hotels */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#474769" }}>
              Choose a Hotel
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hotels
                .filter((hotel) => !formData.budget || hotel.price <= formData.budget)
                .map((hotel) => (
                  <div
                    key={hotel.name}
                    onClick={() => setFormData({ ...formData, hotel: hotel.name })}
                    className={`cursor-pointer border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition ${
                      formData.hotel === hotel.name ? "ring-4 ring-[#474769]" : ""
                    }`}
                  >
                    <img src={hotel.img} alt={hotel.name} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-bold" style={{ color: "#474769" }}>
                        {hotel.name}
                      </h3>
                      <p className="text-gray-600">${hotel.price} / night</p>
                      <div className="flex items-center mt-1 text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar key={i} className={i < Math.round(hotel.rating) ? "" : "opacity-30"} />
                        ))}
                        <span className="ml-2 text-gray-500 text-sm">{hotel.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={handleBack} className="px-6 py-2 rounded-lg border text-[#474769]">
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#474769] text-white hover:bg-[#3a3a58] transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Payment */}
        {step === 5 && !confirmed && (
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#474769" }}>
              Payment Details
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.payment.name}
                onChange={(e) =>
                  setFormData({ ...formData, payment: { ...formData.payment, name: e.target.value } })
                }
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.payment.email}
                onChange={(e) =>
                  setFormData({ ...formData, payment: { ...formData.payment, email: e.target.value } })
                }
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Card Number (xxxx-xxxx-xxxx-xxxx)"
                value={formData.payment.card}
                onChange={(e) =>
                  setFormData({ ...formData, payment: { ...formData.payment, card: e.target.value } })
                }
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="button"
                className="w-full py-3 bg-[#474769] text-white font-semibold rounded-lg hover:bg-[#3a3a58] transition"
              >
                Pay with PayPal
              </button>
            </form>
            <div className="mt-6 flex justify-between">
              <button onClick={handleBack} className="px-6 py-2 rounded-lg border text-[#474769]">
                Back
              </button>
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Message */}
        {step === 5 && confirmed && (
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎉 Booking Confirmed!</h2>
            <p className="text-gray-700 mb-6">
              Thank you, <span className="font-semibold">{formData.payment.name}</span>! <br />
              Your booking at <span className="font-semibold">{formData.hotel}</span> has been confirmed.
            </p>
            <button
              onClick={() => {
                setStep(1);
                setConfirmed(false);
                setFormData({
                  activities: [],
                  date: "",
                  budget: "",
                  hotel: "",
                  payment: { name: "", email: "", card: "" },
                });
              }}
              className="px-6 py-2 rounded-lg bg-[#474769] text-white hover:bg-[#3a3a58] transition"
            >
              Book Another Trip
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Packages;
