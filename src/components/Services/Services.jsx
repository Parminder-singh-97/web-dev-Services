"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaHome } from "react-icons/fa";

const services = [
  {
    title: "Website Designing",
    link: "/services/web-designing-services",
    description:
      "We create visually stunning, user-friendly, and responsive website designs that help businesses stand out online. From brand identity to immersive UI/UX, our designs build trust and engagement.",
    points: [
      "Web Graphic Design",
      "UI/UX & Logo Design",
      "Brochures & Catalogs",
      "Responsive Interfaces",
      "Creative Branding Solutions",
    ],
    icon: "🎨",
  },
  {
    title: "Website Development",
    link: "/services/web-development-services",
    description:
      "Our team builds robust, secure, and scalable websites using modern technologies. Whether it’s custom portals, CMS, or full-stack solutions, we make sure your website is future-proof.",
    points: [
      "MERN Stack Development",
      "Next.js Development",
      "React Development",
      "Headless CMS Integration",
      "Custom API Development",
    ],
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    link: "/services/mobile-app-development-services",
    description:
      "We design and develop high-performing mobile apps for iOS & Android that provide seamless user experiences. Our apps are scalable, secure, and optimized for performance.",
    points: [
      "Native iOS & Android Apps",
      "Progressive Web Apps (PWAs)",
      "Cross-Platform Apps",
      "App Maintenance & Support",
      "UI/UX Optimized Experiences",
    ],
    icon: "📱",
  },
  // {
  //   title: "E-Commerce Solutions",
  //   link: "/services/ecommerce-development",
  //   description:
  //     "Launch your online store with powerful features, secure transactions, and engaging shopping experiences. We help you sell smarter with scalable e-commerce platforms.",
  //   points: [
  //     "Shopify & WooCommerce",
  //     "Custom MERN Stack Stores",
  //     "Payment Gateway Integration",
  //     "Product Management Dashboards",
  //     "Conversion Rate Optimization",
  //   ],
  //   icon: "🛒",
  // },
  // {
  //   title: "Digital Marketing",
  //   link: "/services/digital-marketing",
  //   description:
  //     "Grow your online presence with data-driven strategies. From SEO to paid ads, we create marketing campaigns that attract, convert, and retain customers.",
  //   points: [
  //     "Search Engine Optimization (SEO)",
  //     "Pay-Per-Click Advertising (PPC)",
  //     "Social Media Marketing",
  //     "Content Marketing",
  //     "Email Marketing Automation",
  //   ],
  //   icon: "📢",
  // },
  {
    title: "Business Intelligence & Power BI",
    link: "/services/power-bi-dashboard",
    description:
      "Turn raw data into actionable insights with visually interactive dashboards. We build BI solutions that simplify decision-making and boost efficiency.",
    points: [
      "Custom Power BI Dashboards",
      "Data Visualization",
      "Data Modeling & Reports",
      "KPI Tracking",
      "Predictive Analytics",
    ],
    icon: "📊",
  },
];

export default function ServicesShowcase() {
  const pathname = usePathname();
      const pathnames = pathname.split("/").filter((x) => x);
    
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="services">
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
            Our <span className="text-blue-600">Services</span>
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
                      <span className="capitalize text-blue-400 font-semibold">
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      
        <motion.p
          className=" my-20 text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We deliver a wide range of IT solutions tailored for your business growth —
          from <span className="text-blue-600">website design & development to mobile apps, e-commerce, BI dashboards,</span> and more.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow flex flex-col cursor-pointer border border-transparent hover:border-blue-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            >
              <motion.div
                className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="text-left text-sm space-y-2 text-gray-700 flex-1">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span> {point}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-blue-600 text-white py-12 px-6 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Let’s bring your ideas to life with our expert team. From concept to launch, we’ll guide you every step of the way.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
