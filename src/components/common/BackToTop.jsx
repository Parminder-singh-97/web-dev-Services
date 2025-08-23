"use client";

import { useState, useEffect } from "react";
    import { FaLongArrowAltUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={scrollToTop}
        className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaLongArrowAltUp className="w-5 h-5" />
      </button>
    </div>
  );
}
