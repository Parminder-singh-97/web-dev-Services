"use client"; // Needed in Next.js 13+ (App Router)

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaShopify, FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";


const Hero = () => {

  const orbitLogos = [
  { Icon: FaShopify, alt: "Shopify" },
  { Icon: FaReact, alt: "React" },
  { Icon: FaNodeJs, alt: "Node.js" },
  { Icon: FaWordpress, alt: "WordPress" },
];

  return (
    <section
      id="home"
      className="bg-white py-20 w-full flex items-center justify-between min-h-screen"
    >
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl drop-shadow-sm  font-bold leading-tight">
            <span className="text-orange-600 block drop-shadow-sm ">
              Digital Strategy & Consulting
            </span>
            Modern IT & Tech Solutions
          </h1>
          <p className="text-gray-700 max-w-lg drop-shadow-sm ">
            Built by a passionate team of social entrepreneurs who believe in
            the transformative power of education and technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="/services"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition flex items-center gap-2"
            >
              Discover More <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="tel:+917018160097"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <i className="fa-regular fa-comment-dots text-2xl" />
              <span className="flex flex-col text-sm leading-tight">
                <span className="font-medium">Need help?</span>
                <span className="text-orange-600 font-semibold">
                  +91 701 816 0097
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex items-center overflow-hidden justify-center">
          <div className="relative flex items-center justify-center w-[400px] h-[400px] rounded-full">
            {/* Center Logo */}
            <div className="absolute w-24 h-24 flex items-center justify-center z-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="Node.js"
                className="w-20 h-20"
              />
            
            </div>

            {/* Rotating Orbit with evenly spaced logos */}
            <motion.div
              className="absolute w-full h-full rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {orbitLogos.map((logo, index) => {
                const angle = (index / orbitLogos.length) * 2 * Math.PI;
                const radius = 160; // distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <logo.Icon className="w-12 h-12 text-gray-700 hover:text-blue-600 transition" title={logo.alt} />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
