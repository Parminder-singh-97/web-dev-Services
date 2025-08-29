"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, PieChart, LineChart, CheckCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const PowerBIDashboard = () => {
     const pathname = usePathname();
      const pathnames = pathname.split("/").filter((x) => x);
    
  return (
    <section className="bg-orange-50 py-16 px-6 lg:px-20">
        {/* Banner Section */}
      <div
        className="banner-inner py-20 text-white bg-black relative opacity-90 bg-cover bg-center"
        id="Home"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550622824-c11e494a4b65?q=80&w=1173&auto=format&fit=crop')`,
        }}
      >
        <div className="textblock text-center">
          <div className="container mx-auto">
            <motion.h1 
              className="text-5xl font-bold capitalize"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             Power BI Dashboard
            </motion.h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb-wrap py-3 shadow-lg mt-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="flex items-center gap-1 text-black hover:text-red-500 transition">
                  <FaHome /> Home
                </Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={name} className="flex items-center gap-2">
                    <span className="text-black">/</span>
                    {isLast ? (
                      <span className="capitalize text-orange-400 font-semibold">
                        {name.replace(/-/g, " ")}
                      </span>
                    ) : (
                      <Link href={routeTo} className="text-black capitalize hover:text-blue-400 transition">
                        {name.replace(/-/g, " ")}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center my-16"
      >
        <h2 className="text-4xl font-extrabold text-orange-600 mb-4">
          Power BI Dashboard Solutions
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Unlock the power of your business data with interactive and
          easy-to-understand Power BI dashboards. Gain real-time insights,
          visualize KPIs, and make data-driven decisions.
        </p>
      </motion.div>

      {/* Dashboard Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          "/images/powerBI/BI-image-1.webp",
          "/images/powerBI/BI-image-2.webp",
          "/images/powerBI/BI-image-3.webp",
          
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={src}
              alt={`Power BI Dashboard ${i + 1}`}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {[
          {
            icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
            title: "Interactive Visuals",
            desc: "Engage with dynamic dashboards that allow filtering, drilling down, and real-time exploration of your data.",
          },
          {
            icon: <PieChart className="w-10 h-10 text-orange-600" />,
            title: "Custom KPIs",
            desc: "Track your business goals with customized KPIs and performance metrics tailored to your needs.",
          },
          {
            icon: <LineChart className="w-10 h-10 text-orange-600" />,
            title: "Data Integration",
            desc: "Seamlessly connect Power BI with multiple data sources like Excel, SQL, and cloud apps.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-orange-100 rounded-2xl p-10 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">
          Why Choose Our Power BI Services?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {[
            "Tailored dashboards for your business requirements.",
            "End-to-end integration with your existing systems.",
            "Advanced analytics & predictive insights.",
            "Expert support & regular maintenance.",
          ].map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="text-orange-600 w-6 h-6" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Transform Your Data?
        </h3>
        <p className="text-gray-600 mb-6">
          Let us build a customized Power BI dashboard that helps you make
          better decisions and grow your business.
        </p>
        <Link href="/contact-us">
        <button className=" cursor-pointer px-6 py-3 bg-orange-600 text-white rounded-full font-semibold shadow-md hover:bg-orange-700 transition">
          Get a Free Consultation
        </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default PowerBIDashboard;
