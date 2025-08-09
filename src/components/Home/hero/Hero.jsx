import React from 'react'

const Hero = () => {
  return (
    <>
    <section id="home" className="bg-white py-12 md:py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-orange-600 block">Digital Strategy & Consulting</span>
          Modern IT & Tech Solutions
        </h1>
        <p className="text-gray-600 max-w-lg">
          Built by a passionate team of social entrepreneurs who believe in the
          transformative power of education and technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="services.html"
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
              <span className="text-orange-600 font-semibold">+91 701 816 0097</span>
            </span>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <figure className="relative">
          <img
            src="/images/slider-01.webp"
            alt="Modern IT & Tech Services"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src="/images/banner-shape.png"
            alt="Decorative Shape"
            className="absolute -bottom-6 -right-6 w-32 opacity-80"
          />
        </figure>
      </div>

    </div>
  </div>
</section>

      
    </>
  )
}

export default Hero
