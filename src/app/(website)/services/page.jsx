"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Website Designing",
    link: "/services/web-designing-services",
    description:
      "Crafting visually stunning, user-friendly, and responsive website designs that engage your audience and build trust.",
    points: [
      "Web Graphic Design",
      "Interface & Logo Design",
      "Brochures & Catalogs",
      "User Experience Design",
    ],
    icon: "🎨",
  },
  {
    title: "Website Development",
    link: "/services/web-development-services",
    description:
      "Developing fast, secure, and scalable websites using the latest web technologies for your business growth.",
    points: [
      "PHP Development",
      ".NET Stack Development",
      "Angular JS Development",
      "React Development",
    ],
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    link: "/services/mobile-app-development-services",
    description:
      "Building custom native and hybrid mobile apps to provide seamless digital experiences across devices.",
    points: [
      "Custom Native App Development",
      "Progressive Web Apps",
      "App Maintenance & Support",
    ],
    icon: "📱",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-orange-600">Services</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We provide end-to-end digital solutions to help your business grow
          online with cutting-edge technologies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-left text-sm space-y-2 text-gray-700 flex-1">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-orange-600">✔</span> {point}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="mt-6 inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
