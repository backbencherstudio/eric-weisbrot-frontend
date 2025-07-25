"use client";

import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useState } from "react";
import SelectedIcon from "../Icons/SelectedIcon";
import UnSelectedIcon from "../Icons/UnSelectedIcon";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source: string;
};

 const options = [
    "Online Search",
    "Social Media",
    "Doctor's Office",
    "Television",
    "Billboard / Outdoor Advertising",
    "Pharmaceutical Company",
    "Insurance Company",
    "Friend / Colleague / Word of Mouth",
    "Drove / Walked by one of our centers",
    "Event",
    "Other"
  ]

export default function ContactUsForm() {
   const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      source: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = {
        formData: data,
        formType: 'message'
      }

      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Reset form fields after successful submission
        setValue("firstName", "");
        setValue("lastName", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("subject", "");
        setValue("message", "");
        setValue("source", "");
        setSelectedOptions([])
      } else {
        console.error("Form submission failed.");
      }
      // Handle form submission here
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (option: string) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option]
    
    setSelectedOptions(newSelection)
    setValue("source", newSelection.join(", "))
  }

 

  return (
    <div className="maxContainer md:my-[100px] my-[60px]">
      <div className="">
        <div className="flex flex-col gap-[15px] justify-center items-center mb-[15px] text-center">
        <h1 className="headerText text-[#161721] !font-semibold">How Can We Help?</h1>
        <p className="text-[#4A4C56] leading-[180%]">
          Have a question? Send us a message, and we'll get right back to you.
        </p>
      </div>
        <div className="rounded-[24px] border border-[#0000000D] lg:p-[56px] md:p-[32px] p-4">
          <h1 className="xl:text-[32px] md:text-[28px] text-2xl font-medium leading-[130%] text-[#1D1F2C] lg:mb-8 md:mb-6 mb-4">
            Send us a message
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div>
                <label
                  htmlFor="phone"
                  className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your name"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-medium mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your name"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5">
                Subject
              </label>
              <Select
                onValueChange={(value) => setValue("subject", value)}
                defaultValue="Hospitality"
              >
                <SelectTrigger className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm !h-[56px] cursor-pointer">
                  <SelectValue placeholder="Select a subject" className="" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="Hospitality">Hospitality</SelectItem>
                  <SelectItem value="Medical">Medical</SelectItem>
                  <SelectItem value="General Inquiry">
                    General Inquiry
                  </SelectItem>
                  <SelectItem value="Support">Support</SelectItem>
                  <SelectItem value="Billing">Billing</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-[#4A4C56] lg:text-xl md:text-lg text-base leading-[180%] block font-semibold mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Type your message here"
                {...register("message", { required: "Message is required" })}
                className="w-full rounded-md border bg-[#F3F6FC] border-[#E9E9EA] !xl:py-[15px] !py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] leading-[160%] outline-none lg:text-base text-sm "
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* How did you hear about us */}
            <div className="py-3.5 px-4 bg-[#F3F6FC] border border-[#E9E9EA]  rounded-md ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3  max-w-[660px]">
                {options.map((option) => (
                  <div key={option} className="relative">
                    <div
                      className="flex items-center space-x-3 cursor-pointer group "
                      onClick={() => handleOptionChange(option)}
                    >
                      <div className="relative">
                        {selectedOptions.includes(option) ? (
                          <SelectedIcon />
                        ) : (
                          <UnSelectedIcon />
                        )}
                      </div>
                      <span
                        className={`
                 md:text-base text-sm leading-[180%] transition-colors duration-200
                  ${
                    selectedOptions.includes(option)
                      ? "text-blue-900"
                      : "text-black   group-hover:text-gray-900"
                  }
                `}
                      >
                        {option}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full btn justify-center md:text-lg !leading-[160%] font-medium !h-[60px]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
