import React from "react";
import BackToTop from "./BackToTop";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Back to top */}
        <BackToTop />

        {/* Footer main content */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Web Designing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Power BI Dashboard Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  CMS Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Custom Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Web Hosting & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Technology Expertise */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">
              Technology Expertise
            </h4>
            <ul className="space-y-2">
              <li>React.js & Next.js</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB & MySQL</li>
              <li>Power BI & Data Analytics</li>
              <li>Cloud Hosting (AWS / Hostinger / Vercel)</li>
              <li>UI/UX Design with Tailwind CSS</li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-blue-400">
                  Admin
                </Link>
              </li>
              <li>
                <Link href="/PrivacyTerms" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Column 4 - About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">
              About SP Dev solutions
            </h4>
            <p className="text-sm text-gray-300 leading-6">
              At SP Dev solutions, we specialize in providing cutting-edge
              <span className="text-blue-400"> web solutions</span>, 
              <span className="text-blue-400"> digital transformation</span>, 
              and <span className="text-blue-400"> business intelligence</span>.  
              From website design & development to advanced Power BI dashboards,  
              we help businesses grow with technology.
            </p>
          </div>
        </div>

        {/* Address Section */}
        {/* <div className="bg-gray-800 mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <i className="fa-regular fa-envelope text-xl mb-2"></i>
              <h2 className="text-sm">
                <Link
                  href="mailto:info@splogistics.com"
                  className="hover:text-blue-400"
                >
                  info@splogistics.com
                </Link>
              </h2>
            </div>
            <div>
              <i className="fa-solid fa-phone-volume text-xl mb-2"></i>
              <h2 className="text-sm">
                <Link href="tel:+917018160097" className="hover:text-blue-400">
                  +91 7018160097
                </Link>
                <br />
                <Link href="tel:+919646594291" className="hover:text-blue-400">
                  +91 9646594291
                </Link>
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
                27 Horton Hill, Epsom Surrey, United Kingdom KT19 8SS
              </h2>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="bg-gray-950 py-4">
          <p className="text-center text-gray-400 text-sm">
            Copyrights © {new Date().getFullYear()} All Rights Reserved |
            SP Dev solutions Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
