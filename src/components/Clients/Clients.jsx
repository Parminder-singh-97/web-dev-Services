import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <>
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Clients
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are proud to work with some of the most respected brands and
            businesses worldwide. Our clients trust us to deliver innovative
            digital solutions that help them achieve their goals.
          </p>
        </div>

        {/* Client Logos */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          data-aos="zoom-in"
        >
          {[
            "/images/client1.png",
            "/images/client2.png",
            "/images/client3.png",
            "/images/client4.png",
            "/images/client5.png",
            "/images/client6.png",
          ].map((logo, i) => (
            <figure
              key={i}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={logo}
                alt={`Client ${i + 1}`}
                className="object-contain grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300 h-16"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3
            className="text-2xl font-semibold text-gray-800 text-center mb-10"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "CEO, TechVision",
                feedback:
                  "Working with this team has been a game-changer for our business. Their web development expertise exceeded our expectations.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sophia Patel",
                role: "Head of Analytics, DataCorp",
                feedback:
                  "They delivered a top-notch data analytics platform that helped us unlock new insights. Highly recommended!",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "David Lee",
                role: "Founder, StartUpX",
                feedback:
                  "Their professionalism, creativity, and timely delivery made them a perfect technology partner for our growth journey.",
                img: "https://randomuser.me/api/portraits/men/46.jpg",
              },
            ].map((client, i) => (
              <figure
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                data-aos="fade-up"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                  <figcaption>
                    <h4 className="font-semibold text-gray-800">
                      {client.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{client.role}</p>
                  </figcaption>
                </div>
                <blockquote className="text-gray-600 leading-relaxed">
                  “{client.feedback}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Clients
