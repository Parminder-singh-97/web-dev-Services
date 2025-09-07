import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "@/components/Common/Nav";
import Footer from "@/components/Common/Footer";
import GlobalLoader from "@/components/Common/GlobalWrapLoader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SP Dev solutions : Web Development & Design Services",
  description:
    " We offer top-notch web development and design services to help your business thrive online. Contact us today for a free consultation!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <GlobalLoader>{children}</GlobalLoader>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 4000 }}
        />

        <Footer />
      </body>
    </html>
  );
}
