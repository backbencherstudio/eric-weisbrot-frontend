"use client";
import React, { useState } from "react";
// import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import MessageIcon from "../Icons/MessageIcon";
import CallIcon from "../Icons/CallIcon";
import LocationIcon from "../Icons/locationIcon";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import DropDownIcon from "../Icons/DropDownIcon";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    "General Consultation",
    "Health Assessment",
    "Nutrition Counseling",
    "Wellness Coaching",
    "Therapy Session",
    "Medical Review",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="maxContainer">
      <div className="bgPrimary md:py-12 py-6 md:px-8 px-4 rounded-[20px]">
        <div className=" flex items-center justify-between ">
            <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="text-white lg:w-[49%] leading-[180%]">
                {/* Book Consultation Button */}
                <div className="inline-block">
                  <button className="sectionCategory !text-white !w-auto border !border-white">
                    Book A Consultation
                  </button>
                </div>

                {/* Main Heading */}
                <div className="mt-3">
                  <h1 className="headerText">
                    Free Consultation - Begin Your Healing Journey
                  </h1>

                  <p className="text-[#E9E9EA] text-base leading-[180%] mt-4">
                    Connect with a dedicated specialist today and take the first
                    step towards a healthier, more fulfilling life.
                  </p>
                </div>

                {/* Contact Information */}
                <div className=" mt-6">
                  <div className="flex items-center gap-3">
                    <MessageIcon className="w-6 h-6 text-blue-300" />
                    <span className="font-medium">example@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3 my-[26px]">
                    <CallIcon className="w-6 h-6 text-blue-300" />
                    <span className="font-medium">1-333-345-6868</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <LocationIcon className="w-6 h-6 text-blue-300" />
                    <span className="font-medium">
                      101 E 129th St, East Chicago, IN 46312, US
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="xl:w-[35%] lg:w-[50%] w-full ">
                <div className="bg-white rounded-[10px] leading-[180%] text-base border border-[#0780DF33] backdrop-blur-[11px] md:p-6 p-4">
                  <div className="">
                    <p className="text-[#4A4C56]">
                      Enter your contact information below
                    </p>
                    <h2 className="lg:text-[32px] md:text-[28px] text-2xl text-[#1D1F2C] font-medium leading-[130%] mt-3">
                      Get A Free Consultation
                    </h2>
                  </div>

                  <div className="space-y-6 ">
                    {/* Name Field */}
                    <div className="mt-6">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-[52px] w-full border p-4 border-[#E9E9EA] bg-[#FFFFFF1A] focus:ring-1 focus:ring-[#162F73] focus:border-0 focus:outline-0 rounded-[40px]"
                        required
                        placeholder="name"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-[52px] w-full border p-4 border-[#E9E9EA] bg-[#FFFFFF1A] focus:ring-1 focus:ring-[#162F73] focus:border-0 focus:outline-0 rounded-[40px]"
                        required
                        placeholder="Phone Number"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div className="relative">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="h-[52px] cursor-pointer w-full border p-4 border-[#E9E9EA] bg-[#FFFFFF1A] focus:ring-1 focus:ring-[#162F73] focus:border-0 focus:outline-0 rounded-[40px] transition-colors text-left flex items-center justify-between"
                        >
                          <span
                            className={
                              formData.service
                                ? "text-gray-900"
                                : "text-gray-500"
                            }
                          >
                            {formData.service || "Select a service"}
                          </span>
                          <DropDownIcon
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                            {services.map((service, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => handleServiceSelect(service)}
                                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn w-full justify-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
