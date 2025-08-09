"use client";
import CountUp from "react-countup";

export default function WorkCount() {
  const counters = [
    { value: 2000, label: "Projects" },
    { value: 1800, label: "Happy Clients" },
    { value: 10, label: "Awards Won" },
    { value: 50, label: "Trusted Team" },
  ];

  return (
    <section className="relative py-12 bg-gray-900 text-white overflow-hidden">
      {/* Decorative Icons (Optional) */}
      <img
        src="/images/effect-01.png"
        alt="effect"
        className="absolute top-5 left-10 w-16 opacity-30 animate-bounce"
      />
      <img
        src="/images/effect-02.png"
        alt="effect"
        className="absolute top-20 right-10 w-20 rounded-full opacity-20 animate-pulse"
      />
      <img
        src="/images/effect-03.png"
        alt="effect"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-14 rounded-full opacity-20 animate-spin-slow"
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-bold text-orange-400">
                <CountUp end={item.value} duration={2.5} />+
              </h3>
              <p className="mt-2 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
