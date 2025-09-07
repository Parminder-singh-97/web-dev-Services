"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getVerifyUser } from "@/app/actions/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  //make router for naigate
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showDialog, setShowDialog] = useState(false);

  // Show dialog after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const res = await getVerifyUser(data);

      // const userData = ;


      console.log(res, " res");
      if (res?.success === true) {
        toast.success("Login successful!");
        router.push('/admin');
      

      } else {
        toast.error(res?.message || "Login failed. Please check your credentials.");
      }

      
    } catch (error) {
      console.error("Submission error:", error);  

      
    }
   
  };



  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 relative">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Admin Account 🔐
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Auto-Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              ⚠️ Admin Access Only
            </h3>
            <p className="text-gray-600 mb-5">
              This login is only for administrators.  
              If you are not an admin, this is not for you.
            </p>
            <button
              onClick={() => setShowDialog(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK, I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
