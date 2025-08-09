"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function LogoSlider() {
  const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
  ];

  return (
    <div className="w-full py-6 bg-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5} // Number of logos visible
        loop={true}
        speed={3000} // transition speed in ms
        autoplay={{
          delay: 0, // no pause
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // disable manual swiping
        className="flex items-center"
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="h-12 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
