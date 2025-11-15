import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const faqs = [
  {
    question: "What makes Voyage different from other travel websites?",
    answer:
      "Voyage offers personalized travel packages, smart budgeting tools, and curated itineraries to give you a unique experience.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes! You can select activities, choose dates, set a budget, and Voyage will suggest hotels and plans that fit your style.",
  },
  {
    question: "Do I need to make full payment at the time of booking?",
    answer:
      "No, you can pay partially to confirm your booking and complete the payment before your trip begins.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, cancellations are allowed up to 48 hours before the trip start date with a partial refund.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar/>
    <div className=" py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-[#474769] mb-10">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center px-6 py-4"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold text-[#474769]">
                {faq.question}
              </h2>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-500" />
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FAQ;
