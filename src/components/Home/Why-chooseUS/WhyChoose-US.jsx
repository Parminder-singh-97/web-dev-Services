"use client"; // ✅ add this if you’re using Next.js App Router (app/ directory)

import React from "react";
import { motion } from "framer-motion";

const WhyChooseUS = () => {
  const features = [
    {
      img: "https://erginous.com/assets/images/w-choose1.png",
      text: "We serve with a smile",
    },
    {
      img: "https://erginous.com/assets/images/w-choose2.png",
      text: "Transparency at Every Stage of Project",
    },
    {
      img: "https://erginous.com/assets/images/w-choose3.png",
      text: "On Time Delivery",
    },
    {
      img: "https://erginous.com/assets/images/w-choose4.png",
      text: "Focused on Results",
    },
    {
      img: "https://erginous.com/assets/images/w-choose5.png",
      text: "Exceptional & cost effective solutions",
    },
    {
      img: "https://erginous.com/assets/images/w-choose6.png",
      text: "12 Month Free Technical Support",
    },
    {
      img: "https://erginous.com/assets/images/w-choose7.png",
      text: "Affordable Services",
    },
    {
      img: "https://erginous.com/assets/images/w-choose8.png",
      text: "Security and Privacy",
    },
  ];

  return (
    <section className="bg-gray-900 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h3
          className="text-center text-2xl md:text-3xl font-semibold text-white pb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className="text-blue-400">SP Dev solutions?</span>
        </motion.h3>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition flex flex-col items-center w-40 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={item.img}
                alt={item.text}
                className="h-14 w-14 object-contain mb-3"
                loading="lazy"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h6 className="text-white text-sm md:text-base text-center">
                {item.text}
              </h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;

 {/* Ratings Section */}
  {/* <div className="flex flex-wrap justify-center gap-6">
    {ratings.map((rating, i) => (
      <a
        key={i}
        href={rating.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-lg transition w-64"
      >
        <img
          src={rating.img}
          alt="Rating Logo"
          className="h-12 mb-3 object-contain"
          loading="lazy"
        />
        <p className="text-green-400 flex items-center gap-1">
          {Array.from({ length: Math.floor(rating.stars) }).map((_, idx) => (
            <i key={idx} className="fa fa-star text-yellow-400" />
          ))}
          <FaStar className="text-yellow-400" /> {rating.stars}
        </p>
      </a>
    ))}

    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center shadow-md w-64">
      <h4 className="text-yellow-400 text-2xl font-bold">5</h4>
      <p className="text-green-400">Total Projects</p>
    </div>
  </div> */}