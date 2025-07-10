"use client";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import ArrowUpIcon from "@/components/Icons/ArrowUpIcon";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Define the links in an array
  const navLinks = [
    { name: "Patients FAQs", href: "#" },
    { name: "For Providers", href: "#" },
    { name: "Conditions & Therapies", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <div className="max-w-[1920px] mx-auto 2xl:px-[60px] px-5 ">
      {/* Navbar */}
      <div className="bg-white backdrop-blur-[4px] leading-[180%] text-black  ">
        <div className="flex items-center xl:gap-4 gap-2 py-[22px] justify-between">
          <div className="w-[190px] h-[66px]">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              unoptimized
              className="h-full w-full"
            />
          </div>
          <div className="hidden lg:flex xl:gap-6 lg:gap-3">
            {/* Loop through the navLinks array */}
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-center xl:text-[16px] text-sm font-normal"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <button className="btn xl:text-lg lg:text-base ">
              Submit A Referral
            </button>
            <span className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center">
              <ArrowUpIcon />
            </span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 md:w-1/3 w-2/3 bg-white h-full z-50 shadow-lg">
          <div className="flex justify-between p-4">
            <div className="w-[190px] h-[66px]">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                unoptimized
                className="h-full w-full"
              />
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {/* Loop through the navLinks for the sidebar */}
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="block py-2">
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#162F73] text-white py-2 rounded-full text-center">
              Submit A Referral
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
