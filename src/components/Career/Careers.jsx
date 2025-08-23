import React from "react";

const Careers = () => {
  return (
    <section className="relative bg-orange-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <div
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Careers at <span className="text-orange-600">SP Logistics</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At SP Logistics, we foster a collaborative culture where growth,
              innovation, and creativity thrive. Our team is expanding, and we
              are looking for passionate individuals to join us in shaping the
              future of logistics and technology solutions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We’re hiring for <strong>Web Designers</strong>,{" "}
              <strong>Front-End Developers</strong>,{" "}
              <strong>Back-End Developers</strong>, and{" "}
              <strong>Project Managers</strong>. We offer flexible work
              arrangements, career growth opportunities, and competitive
              compensation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SP Logistics is an{" "}
              <span className="text-orange-600 font-semibold">
                equal-opportunity employer
              </span>
              , celebrating diversity and inclusivity in the workplace.
            </p>

            <div className="mt-8 p-6 bg-orange-100 border-l-4 border-orange-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">
                Interested in joining us?
              </h4>
              <p className="text-gray-700 mt-2">
                Please send your CV to{" "}
                <a
                  href="mailto:careers@splogistics.com"
                  className="text-orange-600 font-semibold hover:underline"
                >
                  careers@splogistics.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-700">Call Us</h5>
                <p>
                  <a
                    href="tel:+91 7018160097"
                    className="text-orange-600 hover:underline"
                  >
                    +91 7018160097
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+91 9646594291"
                    className="text-orange-600 hover:underline"
                  >
                    +91 9646594291
                  </a>
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Email Us</h5>
                <p>
                  <a
                    href="mailto:info@splogistics.com"
                    className="text-orange-600 hover:underline"
                  >
                    info@splogistics.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:support@splogistics.com"
                    className="text-orange-600 hover:underline"
                  >
                    support@splogistics.com
                  </a>
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Head Office</h5>
                <p className="text-gray-600">
                  SCO 88-D, City Heart, Sector 125, Mohali, Punjab, India
                  140301
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Follow Us</h5>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="#"
                    target="_blank"
                    className="text-orange-600 hover:scale-110 transition-transform"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-orange-600 hover:scale-110 transition-transform"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-orange-600 hover:scale-110 transition-transform"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-20 animate-ping"></div>
    </section>
  );
};

export default Careers;
