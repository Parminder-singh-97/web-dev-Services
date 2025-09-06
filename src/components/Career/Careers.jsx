"use client";
import React from "react";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <section className="relative bg-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Careers at <span className="text-blue-600">SP Dev solutions</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At SP Dev solutions, we foster a collaborative culture where growth,
              innovation, and creativity thrive. Our team is expanding, and we
              are looking for passionate individuals to join us in shaping the
              future of SP Dev solutions and technology solutions.
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
              SP Dev solutions is an{" "}
              <span className="text-blue-600 font-semibold">
                equal-opportunity employer
              </span>
              , celebrating diversity and inclusivity in the workplace.
            </p>

            <div className="mt-8 p-6 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">
                Interested in joining us?
              </h4>
              <p className="text-gray-700 mt-2">
                Please send your CV to{" "}
                <a
                  href="mailto:s.pammi.22g@gmail.com"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  s.pammi.22g@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-700">Call Us</h5>
                <p>
                  <a
                    href="tel:+916280256184"
                    className="text-blue-600 hover:underline"
                  >
                    +91 6280256184
                  </a>
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Email Us</h5>
                <p>
                  <a
                    href="mailto:s.pammi.22g@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    s.pammi.22g@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Head Office</h5>
                <p className="text-gray-600">
                  Nai Abadi Road, Nai Abadi, Anandpur Sahib, Punjab 140118
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700">Follow Us</h5>
                <div className="flex space-x-4 mt-2">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    target="_blank"
                    className="text-blue-600"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    target="_blank"
                    className="text-blue-600"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    target="_blank"
                    className="text-blue-600"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements with motion */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};

export default Careers;
