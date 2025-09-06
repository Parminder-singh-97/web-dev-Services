"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md translate-y-0" : " bg-white shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center font-bold text-lg">
          <img
            src="/images/company-logo.png"
            alt="Sp-dev-solutions"
            className="h-14 object-contain"
          />
        </Link>
        {/* Desktop Menu (visible only on md and above) */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className=" font-bold hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"font-bold"}>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 grid gap-2 bg-white shadow-md rounded-md min-w-[20rem]">
                  <Link href="/about" className="font-bold hover:text-blue-600">
                    About Company
                  </Link>
                  <Link
                    href="/our-vision"
                    className=" font-bold hover:text-blue-600"
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="/our-team"
                    className="font-bold hover:text-blue-600"
                  >
                    Our Team
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/services" passHref>
                  <NavigationMenuTrigger className="font-bold cursor-pointer">
                    Services
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="  p-4 grid grid-cols-4 gap-6 bg-white shadow-md rounded-md  lg:min-w-[65rem]">
                  {/* Website Designing */}
                  <div>
                    <Link href="/services/web-designing-services">
                      <h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">
                        Website Designing
                      </h4>
                    </Link>
                    <ul className="space-y-1 text-sm">
                      <li>Web Graphic Design</li>
                      <li>Interface Logo Design</li>
                      <li>Brochures & Catalogs</li>
                      <li>User Experience Design</li>
                    </ul>
                  </div>

                  {/* Website Development */}
                  <div>
                    <Link href="/services/web-development-services">
                      <h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">
                        Website Development
                      </h4>
                    </Link>
                    <ul className="space-y-1 text-sm">
                      <li>MERM Stack Development</li>
                      <li>Next.js Development</li>
                      <li>Node JS Development</li>
                      <li>React Development</li>
                    </ul>
                  </div>

                  {/* Mobile App Development */}
                  <div>
                    <Link href="/services/mobile-app-development-services">
                      <h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">
                        Mobile App Development
                      </h4>
                    </Link>
                    <ul className="space-y-1 text-sm">
                      <li>Custom Native App Development</li>
                      <li>Progressive Web Apps</li>
                      <li>App Maintenance</li>
                    </ul>
                  </div>

                  {/* Power BI Services */}
                  <div>
                    <Link href="/services/powerbi-dashboard-services">
                      <h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">
                        Power BI Services
                      </h4>
                    </Link>
                    <ul className="space-y-1 text-sm">
                      <li>Dashboard Development</li>
                      <li>Data Modeling</li>
                      <li>Interactive Reporting</li>
                      <li>Power BI Integration</li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/our-clients"
                  className="font-bold hover:text-blue-600"
                >
                  Our Clients
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/career" className="font-bold hover:text-blue-600">
                  Career
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                  <Link href="/portfolio" className="hover:text-blue-600">
                    Portfolio
                  </Link>
                </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link
                  href="/contact-us"
                  className="font-bold hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Call to Action (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+916280256184" className="text-sm font-semibold">
            📞 +91 6280256184
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600" asChild>
            <Link href="/contact-us">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-600 hover:bg-blue-100"
              >
                <Menu className="h-6 w-6" size={32} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80%] px-4 py-3 sm:w-[300px] bg-white shadow-lg h-full overflow-y-auto"
            >
              <VisuallyHidden>
                <DialogTitle>Mobile Navigation Menu</DialogTitle>
              </VisuallyHidden>
              <VisuallyHidden>
                <DialogDescription>
                  Browse website sections and contact information
                </DialogDescription>
              </VisuallyHidden>

              <div className="flex flex-col gap-4 mt-6 text-gray-800">
                <Link href="/" className="flex items-center font-bold text-lg">
                  <img
                    src="/images/company-logo.png"
                    alt="Sp-dev-solutions"
                    className="h-10 object-contain"
                  />
                </Link>

                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  Home
                </Link>

                {/* About Dropdown */}
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between items-center w-full font-semibold px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  About{" "}
                  <ChevronDown
                    className={`h-4 w-4 ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="ml-4 flex flex-col gap-2 text-sm text-gray-600">
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="hover:text-blue-600"
                    >
                      About Company
                    </Link>
                    <Link
                      href="/our-vision"
                      onClick={() => setOpen(false)}
                      className="hover:text-blue-600"
                    >
                      Our Vision
                    </Link>
                    <Link
                      href="/our-team"
                      onClick={() => setOpen(false)}
                      className="hover:text-blue-600"
                    >
                      Our Team
                    </Link>
                  </div>
                )}

                {/* Services Dropdown */}
                <Link href="/services">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center w-full font-semibold px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                  >
                    Services{" "}
                    <ChevronDown
                      className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </Link>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col gap-3 text-sm text-gray-600">
                    <div>
                      <Link
                        onClick={() => setOpen(false)}
                        href="/services/web-designing-services"
                      >
                        <p className="font-semibold text-blue-600">
                          Website Designing
                        </p>
                        <ul className="ml-4 list-disc">
                          <li>Web graphic design</li>
                          <li>Interface logo design</li>
                          <li>Brochures & catalogs</li>
                          <li>User experience design</li>
                        </ul>
                      </Link>
                    </div>

                    <div>
                      <Link
                        onClick={() => setOpen(false)}
                        href="/services/web-development-services"
                      >
                        <p className="font-semibold text-blue-600">
                          Website Development
                        </p>
                        <ul className="ml-4 list-disc">
                          <li>MERM Stack Development</li>
                          <li>Next.js Development</li>
                          <li>Node JS Development</li>
                          <li>React Development</li>
                        </ul>
                      </Link>
                    </div>

                    <div>
                      <Link
                        onClick={() => setOpen(false)}
                        href="/services/mobile-app-development-services"
                      >
                        <p className="font-semibold text-blue-600">
                          Mobile App Development
                        </p>
                        <ul className="ml-4 list-disc">
                          <li>Custom Native App Development</li>
                          <li>Progressive Web Apps</li>
                          <li>App Maintenance</li>
                        </ul>
                      </Link>
                    </div>

                    {/* ✅ New Power BI Services */}
                    <div>
                      <Link
                        onClick={() => setOpen(false)}
                        href="/services/powerbi-dashboard-services"
                      >
                        <p className="font-semibold text-blue-600">
                          Power BI Services
                        </p>
                        <ul className="ml-4 list-disc">
                          <li>Interactive Dashboard Design</li>
                          <li>Custom Data Visualization</li>
                          <li>Data Integration & Modeling</li>
                          <li>Business Insights & Reports</li>
                        </ul>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Other Links */}
                <Link
                  href="/our-clients"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  Our Clients
                </Link>
                <Link
                  href="/career"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  Career
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  Contact Us
                </Link>

                {/* Contact Info + CTA */}
                <div className="mt-6 border-t pt-4">
                  <a
                    href="tel:+916280256184"
                    className="block text-sm font-semibold text-gray-700 mb-2 hover:text-blue-600"
                  >
                    📞 +91 6280256184
                  </a>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href="/contact-us">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
