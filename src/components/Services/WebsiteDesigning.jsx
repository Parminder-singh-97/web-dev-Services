"use client";

import { motion } from "framer-motion";
import { Paintbrush, Layout, FileText, Sparkles, CheckCircle } from "lucide-react";
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

  const process = [
    { step: "Research & Planning", desc: "Understanding your brand and audience to craft meaningful designs." },
    { step: "Wireframing", desc: "Structuring the design flow with easy-to-navigate layouts." },
    { step: "Visual Design", desc: "Creating eye-catching interfaces with modern styles & patterns." },
    { step: "Testing & Delivery", desc: "Ensuring usability, responsiveness, and smooth performance." },
  ];

  const benefits = [
    "Creative & modern design approach",
    "100% mobile responsive",
    "SEO-friendly structure",
    "Fast-loading pages",
    "Dedicated support & revisions",
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-white">
      {/* Banner + Breadcrumb (KEEP AS IS) */}
      <div
        className="banner-inner py-20 text-white bg-black relative opacity-90 bg-cover bg-center"
        id="Home"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550622824-c11e494a4b65?q=80&w=1173&auto=format&fit=crop')`,
        }}
      >
        <div className="textblock text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold capitalize ">
              Website Designing Services
            </h1>
          </div>
        </div>

        <div className="breadcrumb-wrap py-3 shadow-lg mt-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-black gap-1 hover:text-red-400 transition"
                >
                  <FaHome />
                  Home
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
                      <Link
                        href={routeTo}
                        className="capitalize text-black hover:text-blue-400 transition"
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

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">Crafting Stunning Web Designs</h2>
          <p className="text-gray-600">
            Our website designing services focus on blending creativity with usability.
            We ensure that every design reflects your brand’s essence while offering
            a seamless user experience. From pixel-perfect layouts to engaging
            interfaces, we make sure your online presence leaves a lasting impression.
          </p>
          <p className="text-gray-600">
            With a customer-first approach, we provide designs that are not just
            visually appealing but also strategically planned for growth, performance,
            and engagement.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="/images/web-design.jpg"
            alt="Web Design"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Core Designing Services
        </motion.h2>
        <p className="text-gray-600 mb-12">
          We offer a wide range of creative design solutions for web & mobile.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-xl transition group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-4 group-hover:scale-125 transition">
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

      {/* Process Section */}
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Design Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <motion.div
              key={i}
              className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-orange-600">{step.step}</h4>
              <p className="text-gray-600 mt-3">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 mb-12">We go beyond design — we build experiences.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="text-orange-500 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition"
          >
            Get a Free Quote
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
