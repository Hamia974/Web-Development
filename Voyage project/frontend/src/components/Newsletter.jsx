import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter your email!");
    } else {
      setMessage("🎉 Thank you for subscribing!");
      setEmail("");
    }
  };
  return (
    <div className=" py-20 px-6 text-white">

      <div className="flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold italic mb-4">
          Stay Connected with <span className="text-[#474769]">Voyage</span>
        </h1>
        <p className="text-gray-200 mb-8 text-lg text-center">
          Subscribe to our newsletter and never miss exclusive travel deals, <br />
          destination guides, and special offers.
        </p>

        {/* Newsletter Form */}
        <div className="flex sm:flex-row flex-col gap-2" >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[500px] px-5 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#474769]"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <button
           onClick={handleSubscribe}
            className="bg-[#474769] text-white font-bold px-8 py-3 rounded-xl transform hover:scale-105 duration-500 hover:bg-[#47476986] "
        >
            Subscribe
          </button>
</div>
                {message && <p className="mt-3 text-white text-bold italic text-xl">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
