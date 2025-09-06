"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ClientTestimonials() {
  const testimonials = [
    {
      text: "Sandeep and his team never fail to impress! We have pulled them in to work with us. In all my years of working in the web industry, these guys are by far the hardest working, reliable and all-round accommodating team! Looking forward to all our projects going forward.",
      name: "Duncan Colville",
      rating: 4.5,
    },
    {
      text: "I have been utilising SP Dev solutions for a few projects now. They have been very professional and friendly throughout the experience. Keep up the great work.",
      name: "Dan Daniel",
      rating: 4.5,
    },
    {
      text: "SP Dev solutions is an amazing creative team of IT developers on which you can rely and have long-term win-win cooperation.",
      name: "Kosanovic Irena",
      rating: 4.5,
    },
    {
      text: "New relationship with SP Dev solutions but in comparison to others, these people are so much more pro-active & service oriented, besides the fact that they know their job. Best wishes to the team!",
      name: "Oliver",
      rating: 4.5,
    },
    {
      text: "Recently used SP Dev solutions to update a website that was dated and needed to be brought up to speed. The team quickly answered questions and assisted with the design. Highly recommended!",
      name: "Geoffrey Oropeza",
      rating: 4.5,
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
          <span className="text-blue-600">Success Stories</span>
          <br />
          What Our Clients Say About Us
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="max-w-5xl mx-auto"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl  p-6 flex flex-col items-center text-center">
                <p className="text-gray-700 italic mb-4">"{item.text}"</p>
                <div className="flex text-yellow-500 mb-2">
                  {Array.from({ length: Math.floor(item.rating) }).map(
                    (_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    )
                  )}
                  {item.rating % 1 !== 0 && (
                    <i className="fa fa-star-half"></i>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
