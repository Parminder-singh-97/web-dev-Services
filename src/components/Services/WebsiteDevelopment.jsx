"use client";

import { motion } from "framer-motion";
import { 
  Code, Database, Boxes, Rocket, Smartphone, Globe, 
  ShieldCheck, Cloud, ShoppingCart, Settings 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function WebsiteDevelopment() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "PHP Development",
      desc: "Robust, scalable, and secure PHP-based applications tailored to your needs."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: ".Net Stack Development",
      desc: "Enterprise-level .NET applications with smooth integration and performance."
    },
    {
      icon: <Boxes className="w-8 h-8 text-green-500" />,
      title: "Angular JS Development",
      desc: "Dynamic web apps with Angular ensuring fast and responsive performance."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "React Development",
      desc: "Modern, high-performance React applications with reusable components."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: "Mobile App Development",
      desc: "Cross-platform and native mobile apps that deliver excellent user experience."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: "Custom Web Solutions",
      desc: "Tailored web platforms with unique features that align with your business needs."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-500" />,
      title: "E-Commerce Development",
      desc: "Powerful, secure, and conversion-focused online stores with integrated payments."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Cybersecurity Services",
      desc: "Protect your applications with enterprise-grade security and encryption solutions."
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      title: "Cloud Solutions",
      desc: "Scalable cloud-based applications for performance, reliability, and growth."
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-500" />,
      title: "Maintenance & Support",
      desc: "Ongoing maintenance, updates, and technical support for seamless operations."
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-white">
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
              Website Designing & Development Services
            </motion.h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb-wrap py-3 shadow-lg mt-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="flex items-center gap-1 hover:text-red-500 transition">
                  <FaHome /> Home
                </Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={name} className="flex items-center gap-2">
                    <span className="text-gray-400">/</span>
                    {isLast ? (
                      <span className="capitalize text-blue-400 font-semibold">
                        {name.replace(/-/g, " ")}
                      </span>
                    ) : (
                      <Link href={routeTo} className="capitalize hover:text-blue-400 transition">
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

      {/* Services Section */}
      <div className="max-w-7xl mx-auto text-center mt-12">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Website Development Services
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide end-to-end web development solutions that empower businesses with
          cutting-edge technology, seamless design, and robust functionality.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-xl transition group border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800">{service.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call To Action Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl text-white p-10 shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Build Your Digital Presence?</h3>
        <p className="text-white/90 mb-6">
          From startups to enterprises, we craft websites that boost business growth and provide seamless user experiences.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </Link>
      </motion.div>
    </section>
  );
}
