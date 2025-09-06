"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Import icons from react-icons
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaHtml5, FaCss3, FaAngular, FaVuejs, FaSass, FaWordpress } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function LogoSlider() {
  // List of icons
  const logos = [
    { icon: <FaReact className="text-sky-500" />, name: "React" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3 className="text-blue-600" />, name: "CSS3" },
    // { icon: <FaPython className="text-blue-500" />, name: "Python" },
    { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
    { icon: <FaGithub className="text-black" />, name: "GitHub" },
    { icon: <RiNextjsFill  className="text-black" />, name: "Nextjs" },
    { icon: <RiTailwindCssFill  className="text-blue-500" />, name: "Tailwind CSS" },
    
    // { icon: <FaAngular className="text-red-600" />, name: "Angular" },
    // { icon: <FaVuejs className="text-green-500" />, name: "Vue.js" },
    // { icon: <FaSass className="text-pink-500" />, name: "Sass" },
    // { icon: <FaWordpress className="text-sky-600" />, name: "WordPress" },
    // { icon: <FaFirebase className="text-yellow-500" />, name: "Firebase" },
  ];

  return (
    <div className="w-full py-6 bg-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={6}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="flex items-center"
      >
        {logos.map((logo, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col justify-center items-center"
          >
            <div className="text-5xl">{logo.icon}</div>
            <p className="text-xs mt-2 text-gray-600">{logo.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
