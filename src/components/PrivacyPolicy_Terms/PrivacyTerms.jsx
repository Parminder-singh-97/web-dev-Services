"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText } from "lucide-react";

const PrivacyTerms = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-600"
        >
          Privacy Policy & Terms & Conditions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          We value your privacy and want you to understand how we handle your
          data. Please read our Privacy Policy and Terms & Conditions carefully.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-500 hover:shadow-xl hover:scale-[1.02] transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-blue-500" size={32} />
            <h3 className="text-xl font-semibold text-gray-800">
              Privacy Policy
            </h3>
          </div>
          <ul className="text-gray-600 text-sm space-y-3 text-left">
            <li>
              ✅ We collect only necessary information to provide better
              services.
            </li>
            <li>✅ Your data is stored securely with encryption.</li>
            <li>
              ✅ We do not sell, trade, or share your personal information.
            </li>
            <li>
              ✅ Cookies may be used to improve your browsing experience.
            </li>
            <li>
              ✅ You can request deletion of your personal data anytime.
            </li>
          </ul>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-500 hover:shadow-xl hover:scale-[1.02] transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-500" size={32} />
            <h3 className="text-xl font-semibold text-gray-800">
              Terms & Conditions
            </h3>
          </div>
          <ul className="text-gray-600 text-sm space-y-3 text-left">
            <li>
              📌 By using our website, you agree to follow all policies listed.
            </li>
            <li>
              📌 Content provided is for informational purposes only and may
              change anytime.
            </li>
            <li>
              📌 Unauthorized use of our content or trademarks is prohibited.
            </li>
            <li>
              📌 Payments, if applicable, are non-refundable unless stated.
            </li>
            <li>
              📌 We reserve the right to suspend accounts for misuse or fraud.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mt-14"
      >
        <p className="text-gray-700">
          Have questions?{" "}
          <a
            href="/contact-us"
            className="text-blue-600 font-medium hover:underline"
          >
            Contact us
          </a>{" "}
          for more details.
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyTerms;
