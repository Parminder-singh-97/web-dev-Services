"use client";

import Link from "next/link";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";

export default function BestCompanySection() {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Background tech logos */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <div className="grid grid-cols-3 gap-16 text-gray-300 text-[8rem]">
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <IoLogoJavascript />
          <IoLogoReact />
          <IoLogoNodejs />
          <IoLogoHtml5 />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            <span className="block text-orange-500 drop-shadow-sm  font-semibold mb-2">
              Welcome to SP Logistics
            </span>
            Searching for an affordable web design company in India?
          </h2>

          <p className="mt-4 text-gray-700 drop-shadow-sm ">
            <span className="font-semibold">SP Logistics</span> is a leading{" "}
            <a
              href="https://www.google.com/"
              className="text-blue-600 hover:underline"
            >
              Web Design & Development Company based in shri Anandpur sahib
            </a>
            , with its registered office shri Anandpur sahib. We specialize in
            offshore web design, custom web development, dynamic web
            applications, and SEO solutions. Our team builds professional,
            customized websites with exceptional design and ongoing maintenance
            to help your brand stand out from the competition.
          </p>

          <p className="mt-4 text-gray-600">
            Our services include website designing, development, internet
            marketing, content creation, content management systems, logo
            design, web banners, flash animation, software development, and
            advanced SEO services. We proudly serve clients in Chandigarh,
            Mohali, Panchkula, Himachal Pradesh,Anandpur sahib, across India, and worldwide.
          </p>

          <div className="mt-6">
            <Link
              href="contact-us"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Contact Us
              <i className="fa-solid fa-arrow-right ml-2" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <figure className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/12200696/pexels-photo-12200696.jpeg"
              alt="Internet Marketing"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
