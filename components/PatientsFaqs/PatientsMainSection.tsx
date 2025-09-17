"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import img1 from "@/public/patients-faqs/img1.png";
import img2 from "@/public/patients-faqs/img2.png";
import Image from "next/image";

const PatientsMainSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const handleToggle = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="maxContainer md:my-[100px] my-[60px]">
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="w-full lg:order-1 order-2">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none bgPrimary rounded-[10px] overflow-hidden data-[state=open]:bg-transparent"
              >
                <AccordionTrigger
                  className=" md:p-6 p-4 pr-20 cursor-pointer text-[#070707]  hover:no-underline bg-[#F3F6FC]   data-[state=open]:bg-[#162F73] data-[state=open]:text-white  data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none md:text-lg text-base  text-left font-medium leading-[180%] relative lg:h-[112px] md:h-[100px] h-[80px] flex items-center"
                  onClick={() => handleToggle(faq.id)}
                >
                  {faq.question}
                  <div
                    className={`   text-[#162F73] absolute text-2xl lg:text-[32px] font-medium h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out ${
                      openItems.has(faq.id)
                        ? "bg-[#1F3C8D] text-white"
                        : "bg-[#EBEFFA]"
                    }`}
                  >
                    {/* Render + when closed, and - when open */}
                    <span
                      className={`block transition-transform duration-500 ease-in-out ${
                        openItems.has(faq.id) ? "rotate-180 " : "rotate-0"
                      }`}
                    >
                      {openItems.has(faq.id) ? "-" : "+"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:p-6 p-3 bg-[#F9F9F9] text-[#4A4C56] !leading-[180%] md:text-base text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full lg:order-2 order-1">
          <div className="flex flex-col gap-12">
            {patientsCare?.map((item) => (
              <div key={item?.id}>
                <div className="flex flex-col">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full rounded-[20px] max-h-[484px]"
                      unoptimized
                      src={item?.img}
                      alt="patients image"
                    />
                  </div>
                  <h2 className="text-[#1D1F2C] leading-[130%] font-medium md:mt-6 mt-4 xl:text-[32px] md:text-[28px] text-2xl">{item?.header}</h2>
                  <p className="md:mt-4 mt-3 xl:text-base lg:text-sm md:text-base text-sm text-[#4A4C56] leading-[180%]">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsMainSection;

const patientsCare = [
  {
    id: "item-1",
    img: "/patients-faqs/img1.png",
    header: "Intensive Caring",
    description:
      "At Dr. Eric Weisbrot’s infusion clinic, we understand that beginning infusion therapy can feel overwhelming, especially if it’s your first time. To help ease the process, we’ve compiled answers to the most common questions patients ask. From what to expect during your first visit to how to prepare for your appointment, these FAQs are designed to give you clear, reassuring information so you can feel confident about your treatment. Our team is committed to making every visit as comfortable and stress-free as possible, with trained nurses available to guide you through each step. ",
  },
  {
    id: "item-2",
    img: "/patients-faqs/img2.png",
    header: "Best of Care",
    description:
      "In addition to addressing patient concerns, our FAQ page also supports families and caregivers who want to know more about the process. You’ll find helpful details on insurance coverage, appointment preparation, and what happens during and after an infusion session. We encourage patients to reach out with any additional questions—our team believes no concern is too small when it comes to your health and comfort. By providing easy-to-understand information, Dr. Weisbrot’s practice ensures that every patient feels supported, informed, and cared for throughout their infusion therapy journey. ",
  },
];

const faqData = [
  {
    id: "item-1",
    question: "What is Infusion Therapy?",
    answer:
      "Infusion therapy is the administration of medication directly into the vein through an IV line. It is commonly used for conditions where oral medications are not effective or appropriate, such as autoimmune diseases, infections, neurological disorders, or certain cancers. ",
  },
  {
    id: "item-2",
    question: "What should I expect during my first infusion?",
    answer:
      "At your first visit, our team will review your medical history, verify your treatment plan, and make sure you are comfortable. Infusions typically take 1–4 hours depending on the medication. You will be closely monitored by trained nurses, and amenities such as Wi-Fi, comfortable seating, and refreshments are available.",
  },
  {
    id: "item-3",
    question: "Will my insurance cover infusion therapy?",
    answer:
      "Our team verifies insurance coverage before your treatment begins. We work with most major insurers and handle prior authorizations. Financial counseling is also available if you need help understanding your benefits or exploring assistance programs. ",
  },
  {
    id: "item-4",
    question: "How do I prepare for my infusion appointment?",
    answer:
      "We recommend staying hydrated, eating a light meal beforehand, and wearing comfortable clothing with easy access to your arms. Please bring a list of current medications and any required lab results. Some treatments may require that you have a driver — our team will let you know in advance. ",
  },
  {
    id: "item-5",
    question: "How can my provider refer me for infusion therapy?",
    answer:
      "Providers can fax, email, or submit referrals securely through our referral portal. Required information usually includes diagnosis, medication orders, recent labs, and prior authorization details. Our team reviews all referrals within 24–48 hours. ",
  },
  {
    id: "item-6",
    question: "What information do referring providers need to send with a referral?",
    answer:
      "To avoid delays, providers should include the patient’s demographics, insurance details, medication order (with dose and frequency), recent lab results, and any supporting clinical notes. Our intake team will contact both the provider and patient to schedule the first appointment. ",
  },
  {
    id: "item-7",
    question:
      "Is Dr. Eric Weltdend a safe place to get my prescribed infusion or injection?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-8",
    question: "How do I schedule an appointment?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-9",
    question: "How should I prepare for my infusion visit?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-10",
    question: "How do I pay my Dr. Eric Weltdend bill?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
];
