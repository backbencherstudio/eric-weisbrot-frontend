import CallIcon from "@/components/Icons/CallIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import InstaIcon from "@/components/Icons/InstaIcon";
import LinkdinIcon from "@/components/Icons/LinkdinIcon";
import LocationIcon from "@/components/Icons/locationIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import React from "react";
import logo from "@/public/logoFooter.png";
import Image from "next/image";
import Link from "next/link";

const quicklink = [
  { text: "Therapies", href: "#" },
  { text: "Find a Location", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Request an Appointment", href: "#" },
];

const addressDetails = [
  {
    icon: <MessageIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />,
    text: "billing@mdelw.com",
  },
  {
    icon: <CallIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />,
    text: "+1410-637-8255",
  },
  {
    icon: <LocationIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />,
    text:  <a target="_blank" href="https://www.google.com/maps/place/Eric+L.+Weisbrot,+M.D./@39.3217698,-76.6658318,12.75z/data=!4m10!1m2!2m1!1sdr+weisbrot!3m6!1s0x89c80496b60e0bf3:0xe52f6839c1a467dc!8m2!3d39.3017949!4d-76.6129412!15sCgtkciB3ZWlzYnJvdFoNIgtkciB3ZWlzYnJvdJIBGWZhbWlseV9wcmFjdGljZV9waHlzaWNpYW6aASRDaGREU1VoTk1HOW5TMFZPWDFweFQwOWZNVXd6VkROQlJSQUKqAUEKCy9nLzF2X3o5d2JzEAEyHxABIhuMOZ0bwxZYpcDUkCFaQ3Bt9hfPPXLkmLOHJmgyDxACIgtkciB3ZWlzYnJvdOABAPoBBAgAEBk!16s%2Fg%2F1v_z9wbs?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" className="">1021 N Calvert St, Baltimore</a>,
  },
];

// Help array
const helpLinks = [
  { text: "Support", href: "#" },
  { text: "Sitemap", href: "#" },
  { text: "Accessibility", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white">
      <div className="maxContainer md:pt-[80px] pt-[60px]  pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1 flex flex-col justify-between gap-4">
            <div className="">
              <div className="w-[190px] h-[66px]">
                <Link href="/">
                  <Image
                    alt="logo"
                    src={logo}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
            <p className="text-[#E9E9EA] md:text-base text-sm leading-[180%] md:max-w-[338px]">
              Dr. Eric Weisbrot offers trusted therapy services to support patient care and positive outcomes. 
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="">
                <FacebookIcon className="" />
              </a>
              <a href="#" className="">
                <InstaIcon className="" />
              </a>
              <a href="#" className="">
                <TwitterIcon />
              </a>
              <a href="#" className="">
                <LinkdinIcon className="" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold lg:text-xl md:text-lg text-base md:mb-6 mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col md:gap-3 gap-1">
              {quicklink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E9E9EA] hover:text-white transition-colors font-normal lg:text-lg md:text-base text-sm leading-[180%]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-semibold lg:text-xl md:text-lg text-base md:mb-6 mb-3">
              Help
            </h4>
            <ul className="flex flex-col md:gap-3 gap-1">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E9E9EA] hover:text-white transition-colors font-normal lg:text-lg md:text-base text-sm leading-[180%]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-semibold lg:text-xl md:text-lg text-base md:mb-6 mb-3">
              Address
            </h4>
            <div className="flex flex-col md:gap-3 gap-1">
              {addressDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  {item.icon}
                  <span className="text-[#E9E9EA] hover:text-white transition-colors font-normal lg:text-lg md:text-base text-sm leading-[180%]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t text-[#E9E9EA] border-[#FFFFFF26] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 leading-[180%]">
          <p className=" text-sm">
            © 2025 Dr. Eric Weisbrot . All rights reserved.
          </p>
          <div className="flex gap-2.5">
            <a href="#" className=" hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className=" hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
