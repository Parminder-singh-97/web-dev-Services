import React from "react";

const OurCommitment = () => {
  return (
    <section className="single-info py-16   relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-12"
          data-aos="zoom-in"
        >
          {/* Left Column */}
            <div className="md:w-1/2 flex justify-center">
            <figure className="relative overflow-hidden rounded-lg shadow-2xl max-w-md w-full cursor-pointer transition-transform duration-500 hover:scale-105">
              <img
                src="https://plus.unsplash.com/premium_photo-1722945652527-d8d7ba9fd0d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVldGluZ3xlbnwwfDJ8MHx8fDA%3D"
                alt="Our Commitment"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          {/* Right Column */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold drop-shadow-md">Our Commitment</h2>
            <p className="text-lg leading-relaxed font-semibold drop-shadow-sm">
              We are dedicated to attracting, motivating, empowering, and retaining
              an exceptionally committed workforce. Our goal is to deliver world-class
              service that exceeds client expectations, enabling their business success.
            </p>
            <p className="text-lg leading-relaxed font-semibold drop-shadow-sm">
              We invest in state-of-the-art technologies to develop, deliver, and
              support our services. Continuously upgrading our knowledge and technology
              ensures our clients receive maximum value.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
