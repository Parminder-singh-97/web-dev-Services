"use client";

import { motion } from "framer-motion";
import { Smartphone, RefreshCcw, Wrench, Code, ShoppingBag, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaAndroid, FaApple, FaReact } from "react-icons/fa";
import ContactSection from "../ContactUs/ContactUs";

export default function MobileAppDevelopment() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  const services = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "Custom Native App Development",
      desc: "Tailor-made mobile apps for iOS and Android with smooth performance and robust architecture.",
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-blue-500" />,
      title: "Progressive Web Apps (PWA)",
      desc: "Cross-platform PWAs that work seamlessly across devices, offline support & push notifications.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-500" />,
      title: "App Maintenance",
      desc: "Continuous updates, bug fixes, performance optimization, and feature upgrades for your apps.",
    },
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "UI/UX & Prototyping",
      desc: "Interactive designs, wireframes, and modern UI/UX tailored for user engagement and retention.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
      title: "E-commerce Apps",
      desc: "Scalable mobile stores with payment gateways, product catalogs, and analytics integration.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Enterprise Solutions",
      desc: "Secure enterprise-grade apps with authentication, cloud sync, and advanced analytics.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      title: "AI & IoT Integration",
      desc: "Smart mobile solutions powered by AI, ML, and IoT device connectivity.",
    },
  ];

  const techLogos = [
    { icon: <FaAndroid className="text-green-500 text-3xl" />, name: "Android" },
    { icon: <FaApple className="text-gray-800 text-3xl" />, name: "iOS" },
    { icon: <FaReact className="text-blue-500 text-3xl" />, name: "React Native" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white relative">
      {/* Banner Section (keep as is) */}
      <div
        className="banner-inner py-24 text-white bg-black relative opacity-95 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550622824-c11e494a4b65?q=80&w=1173&auto=format&fit=crop')`,
        }}
      >
        <div className="textblock text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold capitalize drop-shadow-lg">
              Mobile App Development Services
            </h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb-wrap py-3 bg-white/20  mt-6">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-black hover:text-blue-400 transition"
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
                    <span className=" text-black">/</span>
                    {isLast ? (
                      <span className="capitalize text-blue-400 font-semibold">
                        {name.replace(/-/g, " ")}
                      </span>
                    ) : (
                      <Link
                        href={routeTo}
                        className="capitalize  text-black hover:text-blue-400 transition"
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

      {/* Content Section */}
      <div className="max-w-7xl mt-12 mx-auto px-6 flex gap-12">
        {/* Fixed Scrollable Sidebar */}
        <aside className="hidden lg:block w-64 sticky top-28 h-fit bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold text-blue-500 text-lg mb-4">Technologies</h3>
          <div className="space-y-4">
            {techLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                {logo.icon}
                <span className="font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </aside>

        {/* Services */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We build mobile solutions that engage users, enhance efficiency, and drive business growth. 
            From ideation to deployment, we ensure your app performs seamlessly with scalability in mind.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection/>
    </section>
  );
}
