import React from "react";
// If you want to add particles animation, you can use react-tsparticles or similar libs.

const About_main = () => {
  return (
    <section className="about-sec about-inner relative  text-black py-16 overflow-hidden">
      {/* Background particles container (example - you can add a particles lib or CSS animation here) */}
      <div className="absolute inset-0 -z-10">
        {/* Example: a simple CSS animated dots or stars could go here */}
        {/* You can integrate react-tsparticles here or add your custom animation */}
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap -mx-4">
          {/* Header */}
          <div className="w-full px-4 mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-4xl font-extrabold mb-2">
              <span className="text-orange-500">About PS logistics</span> — Our Story
            </h2>
            <div className="w-24 h-1 bg-orange-300 mx-auto rounded mt-2"></div>
          </div>

          {/* Image Content */}
          <div
            className="w-full md:w-1/2 px-4 flex flex-col items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <figure className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About SP Logistics 1"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About SP Logistics 2"
                className="absolute top-10 left-10 w-3/4 rounded-lg shadow-lg border-4 border-yellow-300 object-cover transition-transform duration-700 hover:rotate-3 hover:scale-110"
                loading="lazy"
              />
            </figure>
          </div>
          {/* Text Content */}
          <div
            className="w-full md:w-1/2 px-4 mb-10 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="space-y-6 text-lg leading-relaxed font-semibold drop-shadow-lg">
              <p>
                <a href="https://www.htlogics.com/" className="underline hover:text-orange-300 transition">
                  SP Logistics
                </a>{" "}
                is a leading software product and custom solutions company based in Mohali, dedicated to innovation and excellence.
              </p>
              <p>
                For over 8 years, we have proudly delivered tailored IT services to businesses of all sizes across India. Our
                dedication to cutting-edge technologies enables us to craft products and solutions that make a difference.
              </p>
              <p>
                At{" "}
                <a href="https://www.htlogics.com/" className="underline hover:text-orange-300 transition">
                   SP Logistics
                </a>
                , we believe in building lasting relationships driven by passion, integrity, and continuous growth — not just numbers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About_main;
