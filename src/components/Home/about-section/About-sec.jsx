import React from 'react'

const AboutSection = () => {
  return (
    <>
    <section className="py-16 bg-gray-50" id="about">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Content */}
      <div 
        className="md:w-1/2 flex justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <figure className="relative">
          <img
            src="/images/about-img.webp"
            alt="About HTLogics"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 border-4 border-orange-600 rounded-lg opacity-20"></div>
        </figure>
      </div>
    

      {/* Right Image */}


        <div 
        className="md:w-1/2 space-y-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-orange-600 block">About HTLogics</span>
            Transforming Business with Technology
          </h2>
          <h4 className="text-lg text-gray-700 font-medium mt-2">
            Searching for an affordable web design company in India?
          </h4>
        </div>

        <p className="text-gray-600 leading-relaxed">
          HTLogics is a software product and custom solutions development company,
          headquartered in Mohali. For over 18 years, we’ve been delivering
          value-driven IT services to small, medium, and large-scale clients
          across India. Beyond custom development, our deep research into
          emerging technologies has enabled us to create a diverse product
          portfolio that serves a wide range of industries.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our approach is built on extensive international business experience
          and a customer-focused quality policy. We are committed to delivering
          high-quality solutions through efficient processes, innovative
          technologies, a dedicated team, and a constant drive to maximize
          client benefits.
        </p>

        <a
          href="about_us.html"
          className="inline-flex items-center gap-2 bg-orabge-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
        >
          More About Us <i className="fa-solid fa-arrow-right" />
        </a>
      </div>

    </div>
  </div>
</section>

      
    </>
  )
}

export default AboutSection
