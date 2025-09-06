"use client";

import { SetContactForm } from "@/app/actions/contactForm";
import useLoadingStore from "@/lib/store/loadingStore";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const pathname = usePathname();
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const { startLoading, stopLoading } = useLoadingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call delay
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      setDisabledSubmit(true);
      startLoading();
      const contactFormData = await SetContactForm(data);

      toast.success("Form submitted successfully!");
      stopLoading();    
      setDisabledSubmit(false);
      reset();
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <section className="want-to-talk py-16 text-black">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {pathname === "/contact-us" && (
        <div className="w-full text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Let’s get connected <br />
            <span className="text-blue-600">
              Transform your Business with us
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re here to help with any questions or information you may need.
            Reach out to us via phone or email, and our team will be happy to
            assist you promptly.
          </p>
        </div>
      )}

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-extrabold">
              <span className="text-blue-400">Want to talk</span> about your
              Project
            </h2>

            <div className="flex items-start gap-6 bg-blue-200/20 rounded-xl p-6 shadow-lg">
              <figure className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400">
                <img
                  src="https://plus.unsplash.com/premium_photo-1726736523163-22e5b8dcfe72?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project icon"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="text-black flex flex-col justify-center space-y-4">
                <p className="font-medium leading-relaxed">
                  Your project deserves the best, and it all starts with a
                  conversation. We’re passionate about understanding your
                  vision, your business, and your challenges. Our team is
                  committed to working closely with you to ensure that your
                  project not only meets but exceeds your expectations. Ready to
                  get started?
                </p>
                <h6 className="font-semibold text-blue-600">
                  Let’s talk about how we can bring your project to life.
                </h6>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8 text-gray-900">
            <form
              id="contactForm"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("fullName", { required: "Name is required" })}
                    className={`border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-400"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Business Email"
                    {...register("emailAddress", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 ${
                      errors.emailAddress
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-400"
                    }`}
                  />
                  {errors.emailAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emailAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    {...register("company")}
                    className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Contact No"
                    {...register("phoneNumber", {
                      pattern: {
                        value: /^[0-9+\-\s]*$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className={`border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 ${
                      errors.phoneNumber
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-400"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <input
                type="text"
                placeholder="Skype ID / Whatsapp (Optional)"
                {...register("skype")}
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`border rounded-md px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}

              <p className="text-xs text-gray-600">
                By submitting this form you acknowledge that you have read{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                disabled={disabledSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-red-600 hover:from-blue-600 hover:to-red-700 transition text-white font-bold py-3 rounded-md shadow-lg"
              >
                {disabledSubmit ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit <i className="fa-solid fa-arrow-right ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
