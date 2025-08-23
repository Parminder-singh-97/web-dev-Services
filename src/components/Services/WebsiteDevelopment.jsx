"use client";

import { motion } from "framer-motion";
import { Code, Database, Boxes, Rocket } from "lucide-react";
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
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: ".Net Stack Development",
      desc: "Enterprise-level .NET applications with smooth integration and performance."
    },
    {
      icon: <Boxes className="w-8 h-8 text-blue-500" />,
      title: "Angular JS Development",
      desc: "Dynamic web apps with Angular ensuring fast and responsive performance."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "React Development",
      desc: "Modern, high-performance React applications with reusable components."
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-white">
      <div
            className="banner-inner py-20 text-white bg-black relative opacity-90 bg-cover bg-center"
            id="Home"
            style={{
              backgroundImage: ` url('https://images.unsplash.com/photo-1550622824-c11e494a4b65?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            {/* Page Title */}
            <div className="textblock text-center">
              <div className="container mx-auto">
                <h1 className="text-5xl font-bold capitalize ">Website Designing Services</h1>
              </div>
            </div>
      
            {/* Breadcrumb */}
            <div className="breadcrumb-wrap  py-3 shadow-lg mt-4">
              <div className="container mx-auto px-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  {/* Home Link */}
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-1 hover:text-red-600 transition"
                    >
                      <FaHome />
                      Home
                    </Link>
                  </li>
      
                  {/* Dynamic breadcrumb */}
                  {pathnames.map((name, index) => {
                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;
                    return (
                      <li key={name} className="flex items-center gap-2">
                        <span className="text-gray-400">/</span>
                        {isLast ? (
                          <span className="capitalize text-orange-600 font-semibold">
                            {name.replace(/-/g, " ")}
                          </span>
                        ) : (
                          <Link
                            href={routeTo}
                            className="capitalize hover:text-blue-600 transition"
                          >
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
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Website Development Services
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Our developers bring your ideas to life with cutting-edge technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800">{service.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
