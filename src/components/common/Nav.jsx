"use client";

import Image from "next/image";
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
import { useState } from "react";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          LOGO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 hover:text-primary">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 grid gap-2 bg-white shadow-md rounded-md min-w-[20rem]">
                  <Link href="/about" className="hover:text-primary">
                    About Company
                  </Link>
                  <Link href="/our-vision" className="hover:text-primary">
                    Our Vision
                  </Link>
                  <Link href="/our-team" className="hover:text-primary">
                    Our Team
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 grid grid-cols-3 gap-4 bg-white shadow-md rounded-md min-w-[50rem]">
                  <div>
                    <Link href={"/web_desinging_services"}><h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">Website Designing</h4></Link>
                    <ul className="space-y-1 text-sm">
                      <li>Web graphic design</li>
                      <li>Interface logo design</li>
                      <li>Brochures & catalogs</li>
                      <li>User experience design</li>
                    </ul>
                  </div>
                  <div>
                    <Link href={"/web_development_services"}><h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">Website Development</h4> </Link>
                    <ul className="space-y-1 text-sm">
                      <li>PHP Development</li>
                      <li>.Net Stack Developments</li>
                      <li>Angular JS Development</li>
                      <li>React Development</li>
                    </ul>
                  </div>
                  <div>
                    <Link href={"/mobile_app_development_services"}> <h4 className="font-bold mb-2 cursor-pointer hover:text-blue-600">Mobile App Development</h4> </Link>
                    <ul className="space-y-1 text-sm">
                      <li>Custom Native App Development</li>
                      <li>Progressive Web Apps</li>
                      <li>App Maintenance</li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 hover:text-primary">
                  Our Clients
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 hover:text-primary">
                  Career
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/portfolio.html"
                  className="px-4 py-2 hover:text-primary"
                >
                  Portfolio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact_us.html"
                  className="px-4 py-2 hover:text-primary"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Call to Action (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+9199999999" className="text-sm font-semibold">
            📞 +91 999999999
          </a>
          <Button className={"bg-orange-500"} asChild>
            <Link href="/contact_us.html">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[300px]">
              {/* Accessibility Title & Description (Hidden visually) */}
              <VisuallyHidden>
                <DialogTitle>Mobile Navigation Menu</DialogTitle>
              </VisuallyHidden>
              <VisuallyHidden>
                <DialogDescription>
                  Browse website sections and contact information
                </DialogDescription>
              </VisuallyHidden>

              <div className="flex flex-col gap-2 mt-4">
                <Link href="/">Home</Link>

                {/* About Dropdown */}
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between items-center w-full font-medium"
                >
                  About{" "}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aboutOpen && (
                  <div className="ml-4 flex flex-col gap-1 text-sm">
                    <Link href="/about_us.html">About Company</Link>
                    <Link href="/our_vision.html">Our Vision</Link>
                    <Link href="/our_team.html">Our Team</Link>
                  </div>
                )}

                {/* Services Dropdown */}
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between items-center w-full font-medium"
                >
                  Services{" "}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col gap-2 text-sm">
                    <div>
                      <p className="font-semibold">Website Designing</p>
                      <ul className="ml-2 list-disc">
                        <li>Web graphic design</li>
                        <li>Interface logo design</li>
                        <li>Brochures & catalogs</li>
                        <li>User experience design</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Website Development</p>
                      <ul className="ml-2 list-disc">
                        <li>PHP Development</li>
                        <li>.Net Stack Developments</li>
                        <li>Angular JS Development</li>
                        <li>React Development</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Mobile App Development</p>
                      <ul className="ml-2 list-disc">
                        <li>Custom Native App Development</li>
                        <li>Progressive Web Apps</li>
                        <li>App Maintenance</li>
                      </ul>
                    </div>
                  </div>
                )}

                <Link href="/">Our Clients</Link>
                <Link href="/">Career</Link>
                <Link href="/portfolio.html">Portfolio</Link>
                <Link href="/contact_us.html">Contact Us</Link>

                <div className="mt-4">
                  <a
                    href="tel:+917018160097"
                    className="block text-sm font-semibold mb-2"
                  >
                    📞 +91 99999999
                  </a>
                  <Button asChild className="w-full">
                    <Link href="/contact_us.html">Get Quote</Link>
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
