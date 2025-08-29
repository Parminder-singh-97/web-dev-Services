import React from "react";
import { FaStar } from "react-icons/fa";

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

  const ratings = [
    {
      img: "https://erginous.com/assets/images/logo.png",
      link: "",
      stars: 5.0,
    },
    {
      img: "https://erginous.com/assets/images/upwork-logo.png",
      link: "https://www.upwork.com/agencies/~0144647f4c289747d8",
      stars: 5.0,
    },
    {
      img: "https://erginous.com/assets/images/good-firm-logo.png",
      link: "https://www.goodfirms.co/company/erginous-technologies",
      stars: 5.0,
    },
    {
      img: "https://erginous.com/assets/images/clutch-co-logo.png",
      link: "",
      stars: 4.8,
    },
  ];
  return (
    <>
      <section className="bg-gray-900 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-white pb-6">
            Why Choose SP logistics?
          </h3>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Features */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    className="h-16 w-auto object-contain mb-3"
                    loading="lazy"
                  />
                  <h6 className="text-white text-sm md:text-base">
                    {item.text}
                  </h6>
                </div>
              ))}
            </div>

            {/* Right - Ratings */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
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
                    {Array.from({ length: Math.floor(rating.stars) }).map(
                      (_, idx) => (
                        <i key={idx} className="fa fa-star text-yellow-400" />
                      )
                    )}
                    <FaStar className="text-yellow-400"/> {rating.stars}
                  </p>
                </a>
              ))}

              {/* Total Projects */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center shadow-md w-64">
                <h4 className="text-yellow-400 text-2xl font-bold">5</h4>
                <p className="text-green-400">Total Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUS;
