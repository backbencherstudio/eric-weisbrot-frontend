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
    img: img1,
    header: "Intensive Caring",
    description:
      "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corperturet suscipit lobortis feugiat nulla facilisis at vero eros et accumsan nisl est usus legentis in iis qui facit eorum claritatem autem vel eum iriure.Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis feugiat nulla facilisis at vero eros et accumsan nisl est usus legentis in iis qui facit eorum claritatem autem vel eum iriure",
  },
  {
    id: "item-2",
    img: img2,
    header: "Best of Care",
    description:
      "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis feugiat nulla facilisis at vero eros et accumsan nisl est usus legentis in iis qui facit eorum claritatem autem vel eum iriure.Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis feugiat nulla facilisis at vero eros et accumsan nisl est usus legentis in iis qui facit eorum claritatem autem vel eum iriure",
  },
];

const faqData = [
  {
    id: "item-1",
    question: "What is Infusion Therapy?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-2",
    question: "Do I need a physician referral?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-3",
    question: "Where are your centers located?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-4",
    question: "Does Dr. Eric Weltdend offer private infusions?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-5",
    question: "What wellness infusions does Dr. Eric Weltdend provide?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-6",
    question: "What is my out-of-pocket cost for my infusion?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric Weltdend, all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
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
