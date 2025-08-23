"use client";

import { motion } from "framer-motion";
import { Paintbrush, Layout, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function WebsiteDesigning() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  const services = [
    {
      icon: <Paintbrush className="w-8 h-8 text-orange-500" />,
      title: "Web Graphic Design",
      desc: "Beautiful, custom-designed web graphics tailored to your brand identity.",
    },
    {
      icon: <Layout className="w-8 h-8 text-orange-500" />,
      title: "Interface Logo Design",
      desc: "Modern, responsive logos and icons that scale across platforms.",
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "Brochures & Catalogs",
      desc: "Professional digital brochures and catalogs to showcase your services.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
      title: "User Experience Design",
      desc: "Seamless, user-friendly UI/UX experiences for web & mobile.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-white">
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
            <h1 className="text-5xl font-bold capitalize ">
              Website Designing Services
            </h1>
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
      <div className="max-w-6xl mt-4 mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Website Designing Services
        </motion.h2>
        <p className="text-gray-600 mb-12">
          We create visually stunning and user-friendly designs that capture
          your brand essence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h4 className="font-semibold text-lg text-gray-800">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
