"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const HelpCenter = () => {
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
    <div
      className="
        my-[80px] maxContainer leading-[180%]"
    >
      <div className="lg:max-w-[773px] mx-auto  text-center flex  flex-col items-center">
        <p className="sectionCategory">Help Center</p>
        <h3 className="text-[#1D1F2C] headerText mt-3 mb-4">
          Questions And Answers
        </h3>
        <p className="text-[#4A4C56] ">
          Find answers to the most commonly asked questions about cur services.
        </p>
      </div>
      <div className="lg:mt-12 mt-8">
        <div className="max-w-[1033px] mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none bgPrimary rounded-[10px] overflow-hidden data-[state=open]:bg-transparent"
              >
                <AccordionTrigger
                  className="md:p-6 p-4 pr-20 cursor-pointer text-white hover:no-underline hover:bg-[#2B4C8C]/90 data-[state=open]:bg-[#2B4C8C] data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none md:text-lg text-base  text-left font-medium leading-[180%] relative"
                  onClick={() => handleToggle(faq.id)}
                >
                  {faq.question}
                  <div className="bg-[#1F3C8D] absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                    {/* Render + when closed, and - when open */}
                    <span
                      className={`block transition-transform duration-500 ease-in-out ${
                        openItems.has(faq.id) ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {openItems.has(faq.id) ? "-" : "+"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="md:p-6 p-3 bg-[#F3F6FC] text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

const faqData = [
  {
    id: "item-1",
    question: "What types of therapy do you offer at Healings?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-2",
    question: "How do I know if therapy is right for me?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-3",
    question: "What should I expect during my first therapy session?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-4",
    question: "How long does a typical therapy session last?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-5",
    question: "Do you offer online or virtual therapy sessions?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
  {
    id: "item-6",
    question: "How many therapy sessions will I need to see results?",
    answer:
      "Biologic infusion therapy is the process of infusing medication into a vein through a needle or catheter. It is a method of delivering drugs that cannot be taken orally or need to be administered at a controlled rate. At Dr. Eric westbrook all infusion therapies require a physician referral and are overseen by an onsite nurse practitioner.",
  },
];
