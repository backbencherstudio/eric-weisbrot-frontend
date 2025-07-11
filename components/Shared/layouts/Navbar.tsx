"use client";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import ArrowUpIcon from "@/components/Icons/ArrowUpIcon";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Define the links in an array
  const navLinks = [
    { name: "Patients FAQs", href: "patients-faqs" },
    { name: "For Providers", href: "#" },
    { name: "Conditions & Therapies", href: "condition-therapies" },
    { name: "About Us", href: "about-us" },
    { name: "Contact Us", href: "contact-us" },
  ];

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="maxContainer ">
      {/* Navbar */}
      <div className="bg-white backdrop-blur-[4px] leading-[180%] text-black  ">
        <div className="flex items-center xl:gap-4 gap-2 py-3 lg:py-[22px] justify-between">
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
              <Link
                key={index}
                href={link.href}
                className="text-center xl:text-[16px] text-sm font-normal"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Link
              href="/submit-referral"
              className="btn xl:text-lg lg:text-base "
            >
              Submit A Referral
            </Link>
            <Link
              href="/submit-referral"
              className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center"
            >
              <ArrowUpIcon />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div> // Dark background overlay
      )}

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="lg:hidden fixed top-0 left-0 md:w-1/3 w-2/3 bg-white h-full z-50 shadow-lg"
        >
          <div className="inset-0 bg-dark "></div>
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
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 ">
            {/* Loop through the navLinks for the sidebar */}
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="block py-2">
                {link.name}
              </Link>
            ))}
            <div className="flex items-center mt-4">
              <button className="flex-1 btn w-full  flex items-center justify-center text-white rounded-full text-center">
                Submit A Referral
              </button>
              <span className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center ">
                <ArrowUpIcon />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
