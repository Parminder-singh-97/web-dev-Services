"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4 text-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-9xl font-extrabold text-orange-600"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-3xl font-bold text-gray-800"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-gray-600 max-w-md"
      >
        The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 text-white shadow-lg hover:bg-orange-700 transition"
        >
          <Home className="w-5 h-5" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
