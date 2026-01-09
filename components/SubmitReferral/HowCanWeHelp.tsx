"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { Upload, FileText } from "lucide-react";
import { useState, useCallback } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import UploadIcon from "../Icons/UploadIcon";
import { toast } from "sonner";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  documents: FileList | null;
};

const listItems = [
  "Complete our user friendly order form",
  "Attach supporting clinical documentation",
  "Sign and send securely",
];
const paragraphs = [
  "Our team will promptly review the referral and contact you if any additional information is needed.",
  "You can also download therapy-specific order forms",
  "Don't see a therapy listed? Submit a medication request.",
];

export default function HowCanWeHelp() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const MAX_FILE_SIZE = 4 * 1024 * 1024;

  const onSubmit = async (data: FormData) => {
    console.log(data);
    console.log("Uploaded files:", uploadedFiles);

    const formDataToSend = new FormData();
    // formDataToSend.append('formType', 'documentUpload');
    // formDataToSend.append('formData', JSON.stringify(data));
    formDataToSend.append("firstName", data.firstName);
    formDataToSend.append("lastName", data.lastName);
    formDataToSend.append("phone", data.phone);
    formDataToSend.append("email", data.email);
    if (uploadedFiles && uploadedFiles.length > 0) {
      formDataToSend.append("document", uploadedFiles[0]); // Add the uploaded file
    }

    try {
      const response = await fetch("/api/sendEmailWithDocument", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted Successfully");
        reset();
        setUploadedFiles([]);
      } else {
        toast.error("Error submitting the form");
      }
    } catch (error) {
      setUploadedFiles([]);
      console.error("Error submitting form:", error);
      toast.error("Error submitting the form");
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  // const handleDrop = useCallback((e: React.DragEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);

  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     const files = Array.from(e.dataTransfer.files);
  //     setUploadedFiles((prev) => [...prev, ...files]);
  //   }
  // }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);

      const validFiles = files.filter((file) => {
        if (file.size > MAX_FILE_SIZE) {
          // alert(`${file.name} is larger than 4MB and was not added.`);
          toast.error(`${file.name} is larger than 4MB and was not added.`);
          return false;
        }
        return true;
      });

      setUploadedFiles((prev) => [...prev, ...validFiles]);
    }
  }, []);

  // const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const files = Array.from(e.target.files);
  //     setUploadedFiles((prev) => [...prev, ...files]);
  //   }
  // };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        // alert(`${file.name} is larger than 4MB and was not added.`);
        toast.error(`${file.name} is larger than 4MB and was not added.`);
        return false;
      }
      return true;
    });

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  return (
    <div className="maxContainer lg:my-[100px] my-[60px]">
      <div className="flex flex-col gap-[15px] justify-center items-center mb-[15px] text-center">
        <h1 className="headerText text-[#161721] !font-semibold">
          How Can We Help?
        </h1>
        <p className="text-[#4A4C56] leading-[180%]">
          Have a question? Send us a message, and we'll get right back to you.
        </p>
      </div>
      <div className=" flex flex-col justify-between gap-8 lg:gap-0 lg:flex-row bg-white ">
        {/* Left Side - 41.5% width on lg+ */}
        <div className="w-full lg:w-[41.5%] bg-[#E9F7FC33] rounded-[24px] border border-[#0000000D]  justify-center">
          <div className="xl:p-8 md:p-6 p-4 flex flex-col">
            <h1 className="xl:text-[32px] md:text-[28px] text-2xl font-medium leading-[130%] text-[#1D1F2C]">
              Refer Your Patients to Dr. Eric Weisbrot Infusion Suite for
              Exceptional Care
            </h1>

            <p className="text-[#4A4C56] xl:text-base lg:text-sm md:text-base text-sm leading-[180%]  md:mt-4 mt-3">
              Looking to refer your patients for infusion care at a Dr. Eric
              Weisbrot infusion suite? You're in the right place! We make
              referrals simple and easy.
            </p>

            <h2 className="text-[#1D1F2C] leading-[150%] font-medium lg:text-2xl md:text-xl text-lg md:mt-6 mt-4">
              Submitting a referral takes less than 5 minutes.
            </h2>

            <ul className="xl:space-y-4 lg:space-y-2 md:space-y-4 space-y-3 md:mt-4 mt-3">
              {listItems.map((item, index) => (
                <li key={index} className="ml-6 list-disc list-item space-x-3">
                  <span className="text-[#4A4C56] xl:text-base lg:text-sm md:text-base text-sm leading-[180%]">
                    {item}
                  </span>
                </li>
              ))}
              {paragraphs.map((text, index) => (
                <li
                  key={`p-${index}`}
                  className="text-[#4A4C56] xl:text-base lg:text-sm md:text-base text-sm leading-[180%]"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - 56.5% width on lg+ */}
        <div className="w-full lg:w-[56.5%] xl:p-8 md:p-6 p-4   rounded-[24px] border border-[#0000000D] bg-[#FBFDFE]">
          <div className="flex flex-col xl:gap-8 md:gap-6 gap-4">
            {/* Logo */}
            <div className="">
              <div className="w-[190px] h-[66px]">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  unoptimized
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* header  */}
            <div>
              <h2 className="xl:text-[32px] md:text-[28px] text-2xl font-medium leading-[130%] text-[#1D1F2C] ">
                Document Upload
              </h2>
            </div>
            {/* Form Container */}
            <div className="flex-1 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="md:space-y-5 space-y-3"
              >
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-[#4A4C56] xl:text-lg text-base font-normal leading-[180%] block"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter your name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="mt-1.5 w-full rounded-md border border-[#E9E9EA] bg-white xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] outline-none text-sm leading-[180%]"
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
                      className="text-[#4A4C56] xl:text-lg text-base font-normal leading-[180%] block"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter your name"
                      {...register("lastName")}
                      className="mt-1.5 w-full rounded-md border border-[#E9E9EA] bg-white xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] outline-none text-sm leading-[180%]"
                    />
                    {/* {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )} */}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[#4A4C56] xl:text-lg text-base font-normal leading-[180%] block"
                    >
                      Phone<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your name"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="mt-1.5 w-full rounded-md border border-[#E9E9EA] bg-white xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] outline-none text-sm leading-[180%]"
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
                      className="text-[#4A4C56] xl:text-lg text-base font-normal leading-[180%] block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your name"
                      {...register("email", {
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1.5 w-full rounded-md border border-[#E9E9EA] bg-white xl:py-[15px] py-3 px-3 focus:ring-1 focus:ring-[#162F73] focus:border-transparent text-[#4A4C56] outline-none text-sm leading-[180%]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Upload Documents */}
                <div>
                  <label className="text-[#4A4C56] xl:text-lg text-base font-normal leading-[180%] block">
                    Upload documents<span className="text-red-500">*</span>
                  </label>

                  <div className="mt-1.5">
                    <div
                      className={`relative border-2 border-dashed bg-white rounded-lg py-[21px] px-4 text-center transition-colors ${
                        dragActive
                          ? "border-blue-400 bg-blue-50"
                          : "border-gray-300 bg-gray-50"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        onChange={handleFileSelect}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        required
                      />

                      <div className="flex flex-col items-center ">
                        <div className=" ">
                          <UploadIcon />
                        </div>
                        <div>
                          <p className="lg:text-2xl md:text-xl leading-[150%] text-lg font-medium text-[#4A4C56] mt-4">
                            Browse Files
                          </p>
                          <p className="text-sm text-[#777980] mt-2.5 leading-[180%]">
                            Drag and drop a file here
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Display uploaded files */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-gray-100 rounded"
                          >
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-700">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setUploadedFiles((files) =>
                                  files.filter((_, i) => i !== index)
                                )
                              }
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-[38px]">
                  <button
                    type="submit"
                    className="w-full bg-[#162F73]  hover:bg-[#162F73]/90 border-[#162F73] text-white font-medium py-4 px-6 rounded-full text-lg transition-colors duration-200 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
