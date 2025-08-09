import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Back to top */}
        <div className="fixed bottom-5 right-5">
          <a
            href="#Home"
            className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition"
          >
            <i className="fa fa-angle-up" aria-hidden="true" />
          </a>
        </div>

        {/* Footer main content */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500   ">Enterprise Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="web_desinging_services.html"
                  className="hover:text-orange-400"
                >
                  Website Designing
                </a>
              </li>
              <li>
                <a
                  href="website_development.html"
                  className="hover:text-orange-400"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="website_designing_mohali.html"
                  className="hover:text-orange-400"
                >
                  Website Designing Mohali
                </a>
              </li>
              <li>
                <a
                  href="website_development_mohali.html"
                  className="hover:text-orange-400"
                >
                  Website Development Mohali
                </a>
              </li>
              <li>
                <a
                  href="e_commerce_development.html"
                  className="hover:text-orange-400"
                >
                  E-Commerce Development
                </a>
              </li>
              <li>
                <a href="cms_solutions.html" className="hover:text-orange-400">
                  Content Management System
                </a>
              </li>
              <li>
                <a
                  href="visual_basic_programming.html"
                  className="hover:text-orange-400"
                >
                  VB Programming
                </a>
              </li>
              <li>
                <a href="portal.html" className="hover:text-orange-400">
                  Portal Development
                </a>
              </li>
              <li>
                <a
                  href="best-web-hosting-company-chandigarh-mohali-india.html"
                  className="hover:text-orange-400"
                >
                  Web Hosting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Technology Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="web_2.0_design.html" className="hover:text-orange-400">
                  Web 2.0 Design
                </a>
              </li>
              <li>
                <a
                  href="web_2.0_development.html"
                  className="hover:text-orange-400"
                >
                  Web 2.0 Development
                </a>
              </li>
              <li>
                <a href="xhtml_css3.html" className="hover:text-orange-400">
                  XHTML / CSS3
                </a>
              </li>
              <li>
                <a
                  href="asp.net_programming.html"
                  className="hover:text-orange-400"
                >
                  ASP.NET Programming
                </a>
              </li>
              <li>
                <a href="vb.net_training.html" className="hover:text-orange-400">
                  VB.NET Training
                </a>
              </li>
              <li>
                <a
                  href="core_php_programming.html"
                  className="hover:text-orange-400"
                >
                  Core PHP Programming
                </a>
              </li>
              <li>
                <a
                  href="chandigarh_php_training_companies.html"
                  className="hover:text-orange-400"
                >
                  PHP Training
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">I-Marketing</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="internet_marketing.html"
                  className="hover:text-orange-400"
                >
                  Internet Marketing
                </a>
              </li>
              <li>
                <a
                  href="search_engine_optimization.html"
                  className="hover:text-orange-400"
                >
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a
                  href="search_engine_marketing.html"
                  className="hover:text-orange-400"
                >
                  Search Engine Marketing
                </a>
              </li>
              <li>
                <a href="link_building.html" className="hover:text-orange-400">
                  Link Building
                </a>
              </li>
              <li>
                <a
                  href="social_media_marketing.html"
                  className="hover:text-orange-400"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="java_programming_companies_mohali_chandigarh_panchkula.html"
                  className="hover:text-orange-400"
                >
                  Java Programming
                </a>
              </li>
              <li>
                <a
                  href="magento_development_services_in_chandigarh_company.html"
                  className="hover:text-orange-400"
                >
                  Magento Development
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">About SP-logistics</h4>
            <ul className="space-y-2">
              <li>
                <a href="about_us.html" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="our_vision.html" className="hover:text-orange-400">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="our_team.html" className="hover:text-orange-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="corporate.html" className="hover:text-orange-400">
                  Corporate
                </a>
              </li>
              <li>
                <a href="career.html" className="hover:text-orange-400">
                  Career with HTL
                </a>
              </li>
              <li>
                <a href="contact_us.html" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="software_testing_company_chandigarh.html"
                  className="hover:text-orange-400"
                >
                  Software Testing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-gray-800 mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <i className="fa-regular fa-envelope text-xl mb-2"></i>
              <h2 className="text-sm">
                <a
                  href="mailto:sanjeev@htlogics.com"
                  className="hover:text-orange-400"
                >
                  sanjeev@htlogics.com
                </a>
                <br />
                <a
                  href="mailto:sandeep@htlogics.com"
                  className="hover:text-orange-400"
                >
                  sandeep@htlogics.com
                </a>
              </h2>
            </div>
            <div>
              <i className="fa-solid fa-phone-volume text-xl mb-2"></i>
              <h2 className="text-sm">
                <a href="tel:+917018160097" className="hover:text-orange-400">
                  +91 7018160097
                </a>
                <br />
                <a href="tel:+919646594291" className="hover:text-orange-400">
                  +91 9646594291
                </a>
              </h2>
            </div>
            <div>
              <i className="fa-solid fa-map-location-dot text-xl mb-2"></i>
              <h2 className="text-sm">
                SCO 88-D, City Heart, Sector 125, Mohali, Punjab, India 140301
              </h2>
            </div>
            <div>
              <i className="fa-solid fa-map-location-dot text-xl mb-2"></i>
              <h2 className="text-sm">
                27 Horton Hill Epsom Surrey, United Kingdom KT19 8SS
              </h2>
              <p>
                <a
                  href="tel:+44 (0)7799 136 136"
                  className="hover:text-orange-400"
                >
                  +44 (0)7799 136 136
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-950 py-4">
          <p className="text-center text-gray-400 text-sm">
            Copyrights © 2024 All Rights Reserved with SP logistics PVT. LTD.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
