import React from "react";
import img1 from "@/public/about-us/img1.png";
import img2 from "@/public/about-us/img2.png";
import img3 from "@/public/about-us/infusion-drip.jpg";
import img4 from "@/public/about-us/img4.png";
import img5 from "@/public/about-us/img3.png";

import Image from "next/image";
import Link from "next/link";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import SelectedIcon from "../Icons/SelectedIcon";

const AboutUsMainContent = () => {
  return (
    <div>
      <div className="bg-[#FBFBFB]">
        <div className="maxContainer lg:py-[100px] py-[60px]">
          <div className="flex lg:flex-row flex-col md:justify-between xl:gap-[96px] gap-10 lg:items-center">
            <div className="lg:w-[35.75%]">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="lg:w-full md:w-[60%] w-full h-full rounded-[20px]"
                  unoptimized
                  src={img1}
                  alt="img1"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="headerText text-[#1D1F2C] !font-semibold">
                Comfort. Safety. Results
              </h2>
              <p className="text-[#4A4C56] md:text-base text-sm leading-[180%] text-justify">
                Dr. Robert Weisbrot’s Infusion Center is a physician-led facility specializing in the administration of advanced intravenous therapies. With board certification in internal medicine and two decades of clinical experience, Dr. Weisbrot provides comprehensive care for patients with autoimmune, rheumatologic, neurological, and gastrointestinal conditions requiring infusion therapy. Our center is equipped with specialized nursing staff, strict safety protocols, and evidence-based practices, ensuring patients receive high-quality treatment in a controlled and supportive setting.  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="maxContainer lg:py-[100px] py-[60px]">
          <div className="flex lg:flex-row flex-col md:justify-between xl:gap-[46px] gap-6 lg:items-center">
            <div className="lg:w-[40.83%] lg:order-2">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="lg:w-full md:w-[60%] w-full h-full rounded-[20px]"
                  unoptimized
                  src={img2}
                  alt="img1"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col ">
              <h2 className="lg:text-[32px] md:text-[28px] text-2xl leading-[130%] text-[#1D1F2C] !font-semibold">
                Meet Dr. Weisbrot
              </h2>
              <p className="text-[#4A4C56] md:text-base text-sm leading-[180%] text-justify mt-5">
                Dr. Robert Weisbrot is a board-certified physician with over 20
                years of experience in internal medicine and specialty care.
                Known for his compassionate approach and clinical excellence,
                Dr. Weisbrot is deeply invested in helping patients navigate
                chronic conditions such as autoimmune diseases, immune
                deficiencies, gastrointestinal disorders, and rheumatologic
                conditions — with infusion therapy often being a key part of
                treatment.
              </p>
              <div className="flex items-center lg:mt-12 md:mt-8 mt-6">
                <Link href="/contact-us" className="btn xl:text-lg lg:text-base ">
                  Contact
                </Link>
                <Link
                  href="/contact-us"
                  className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center"
                >
                  <ArrowUpIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {sectionsData.map((section, index) => (
          <div key={index} className={`${index % 2 === 0 ? "bg-[#FBFBFB] " : ""}`}>
            <div className="maxContainer lg:py-[100px] py-[60px]">
              <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-12 ">
                <div className={ `lg:flex-1 ${index % 2 === 1 ? "lg:order-1" : ""} `}>
                  <Image
                    src={section.img}
                    alt={section.headerText}
                    className="lg:w-full  md:w-[60%] w-full max-h-[450px] rounded-[20px] object-cover"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h2 className="lg:text-[32px] md:text-[28px] text-2xl text-[#1D1F2C] leading-[130%] font-semibold">
                    {section.headerText}
                  </h2>
                  <div className="text-[#4A4C56] leading-[180%] md:text-base text-sm mt-4">{section.paragraph}</div>
                  <ul className="flex flex-col gap-4 pt-2.5">
                    {section.listItems.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center text-black md:text-base text-sm leading-[180%]">
                        <span><SelectedIcon/> </span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsMainContent;

const sectionsData = [
  {
    img: img3, // Replace with the actual image URL
    headerText: "Our Mission",
    paragraph:
      <p> At Dr. Weisbrot’s Infusion Center, our mission is to enhance quality of life by delivering exceptional <strong>infusion therapy</strong>  with compassion, expertise, and personalized care. We are dedicated to: </p>,
    listItems: [
      <span><strong>Providing safe and effective infusion treatments</strong> tailored to each patient’s medical needs in a comfortable setting.</span>,
      <span><strong>Ensuring timely access to therapy</strong> with minimal wait times, flexible scheduling, and streamlined processes.</span>
      ,
      <span><strong>Supporting every patient through the infusion journey</strong>  with clear education, insurance coordination, and attentive follow-up care."
      </span>
      ,
    ],
  },
  {
    img: img4, // Replace with the actual image URL
    headerText: "What We Offer",
    paragraph:
      "Our infusion suite is staffed by highly trained nurses who specialize in IV access and patient monitoring, and who are focused on creating a calm and supportive experience.",
    listItems: [
      "Biologic Infusion (e.g., Remicade, Enbrel, Stelara)",
      "Immunoglobulin Therapy (IVIg/SCIg)",
      "Iron Replacement Therapy",
      "Osteoporosis Treatments",
      "Hydration and Vitamin Therapies",
    ],
  },
  {
    img: img5, // Replace with the actual image URL
    headerText: "Why Patients Choose Us",
    paragraph:
      "Whether you’re transitioning from a hospital setting, switching from a specialty pharmacy, or just looking for more personalized care, Dr. Weisbrot’s infusion center is here to make your treatment experience as smooth and supportive as possible.",
    listItems: [
      "Convenient Bilateral Location",
      "On-site Physician Expertise",
      "Individualized Care Plans",
      "Flexible Scheduling, Including Weekends",
      "Insurance Verification and Prior Authorization Support",
    ],
  },
];
