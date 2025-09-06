import React from "react";
import Link from "next/link";

const We_offer_section = () => {
  return (
    <section className="single-info-grid py-16 bg-gradient-to-r from-blue-100 to-voilet-100 text-black relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-12"
          data-aos="zoom-in"
        >
          {/* Left Column */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold drop-shadow-md">We Offer</h2>
            <p className="text-lg leading-relaxed font-semibold drop-shadow-sm">
              Recently, we are offering a wide spectrum of services across
              various sectors. Our goal is to be a unified service provider,
              offering the complete value chain ranging from data punching to
              database management, integration, and maintenance.
            </p>
            <p className="text-lg leading-relaxed font-semibold drop-shadow-sm">
              We strive to become an offshore data processing unit for large
              overseas clients. Our approach focuses on consistent, long-term
              revenue growth powered by interactive and responsive planning
              procedures that adapt to different perspectives.
            </p>
            <p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-blue-300 text-blue-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-400 transition"
              >
                Get Started Now
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center">
            <figure className="relative overflow-hidden rounded-lg shadow-2xl max-w-md w-full cursor-pointer transition-transform duration-500 hover:scale-105">
              <img
                src="https://plus.unsplash.com/premium_photo-1723809767666-fb1cd419561f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="We Offer Services"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default We_offer_section;
