"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // render orbit only after client mount
  }, []);

  const orbitLogos = [
    { Icon: FaReact, alt: "React" },
    { Icon: FaNodeJs, alt: "Node.js"},
    { Icon: FaGithub, alt: "GitHub",  },
    { Icon: RiNextjsFill, alt: "Next.js"},
    { Icon: RiTailwindCssFill, alt: "Tailwind CSS" },
    { Icon: SiMongodb, alt: "MongoDB" },
  ];

  return (
    <section className="bg-white py-20 w-full flex items-center justify-between min-h-screen">
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center md:items-start">
        
        {/* Left side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-600 block">
              Digital Strategy & Consulting
            </span>
            Modern IT & Tech Solutions
          </h1>
          <p className="text-gray-700 max-w-lg">
            Built by a passionate team of social entrepreneurs who believe in
            the transformative power of education and technology.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[400px] h-[400px] rounded-full">
            
            {/* Center Logo */}
            <div className="absolute w-24 h-24 flex items-center justify-center z-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="Node.js"
                className="w-20 h-20"
              />
            </div>

            {/* Orbit logos (client only) */}
            {mounted && (
              <motion.div
                className="absolute w-full h-full rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {orbitLogos.map((logo, index) => {
                  const angle = (index / orbitLogos.length) * 2 * Math.PI;
                  const radius = 160;
                  const x = Math.round(Math.cos(angle) * radius * 1000) / 1000;
                  const y = Math.round(Math.sin(angle) * radius * 1000) / 1000;

                  return (
                    <div
                      key={index}
                      className={`absolute `}
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <logo.Icon
                        className="w-12 h-12 text-gray-700 hover:text-blue-600 transition"
                        title={logo.alt}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

