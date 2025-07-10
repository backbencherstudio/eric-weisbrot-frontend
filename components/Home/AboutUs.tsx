import React from "react";
import img from "@/public/home/about.png";
import Image from "next/image";
import ArrowUpIcon from "../Icons/ArrowUpIcon";

const AboutUs = () => {
  return (
    <div className="maxContainer py-[80px]">
      <div className="flex gap-12">
        <div className="xl:w-[40%] lg:w-[45%]">
          <Image
            width={100}
            height={100}
            src={img}
            alt="about us"
            className="w-full h-full rounded-[20px]"
            unoptimized
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <button className="sectionCategory ">About Us</button>
          </div>
          <div>
            <h2 className="headerText text-[#1D1F2C] mt-3">
              About the Eric L. Weisbrot
            </h2>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-base leading-[180%] text-[#4A4C56]">
              Dr. Robert Weisbrot is a board-certified physician with over 20
              years of experience in internal medicine and specialty care. Known
              for his compassionate approach and clinical excellence, Dr.
              Weisbrot is deeply invested in helping patients navigate chronic
              conditions such as autoimmune diseases, immune deficiencies,
              gastrointestinal disorders, and rheumatologic conditions — with
              infusion therapy often being a key part of treatment.
            </p>
            <p className="text-base leading-[180%] text-[#4A4C56]">
              Throughout his career, Dr. Weisbrot has honed a diverse skill set
              that includes diagnostic acumen, patient management, and in-depth
              knowledge of various medical conditions. He has extensive
              experience in preventive medicine, chronic disease management, and
              acute care, allowing him to provide treatment solutions tailored
              to individual patient needs.
            </p>
            <p className="text-base leading-[180%] text-[#4A4C56]">
              Throughout his career, Dr. Weisbrot has honed a diverse skill set
              that includes diagnostic acumen, patient management, and in-depth
              knowledge of various medical conditions. He has extensive
              experience in preventive medicine, chronic disease management, and
              acute care, allowing him to provide treatment solutions tailored
              to individual patient needs.
            </p>
          </div>
          <div className="flex items-center mt-8">
            <button className="btn xl:text-lg lg:text-base ">
              Learn More
            </button>
            <span className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center">
              <ArrowUpIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
