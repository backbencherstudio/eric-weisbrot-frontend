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
        md:my-[60px] my-[40px] maxContainer leading-[180%]"
    >
      <div className="lg:max-w-[773px] mx-auto  text-center flex  flex-col items-center">
        <p className="sectionCategory">Help Center</p>
        <h3 className="text-[#1D1F2C] headerText mt-3 mb-4">
          Questions And Answers
        </h3>
        <p className="text-[#4A4C56] ">
          Find answers to the most commonly asked questions about our services.
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
    question: "What is infusion therapy?",
    answer:
      "Infusion therapy is the administration of medication directly into the vein through an IV line. It is commonly used for conditions where oral medications are not effective or appropriate, such as autoimmune diseases, infections, neurological disorders, or certain cancers. ",
  },
  {
    id: "item-2",
    question: "How do I know if therapy is right for me?",
    answer:
      "At your first visit, our team will review your medical history, verify your treatment plan, and make sure you are comfortable. Infusions typically take 1–4 hours depending on the medication. You will be closely monitored by trained nurses, and amenities such as Wi-Fi, comfortable seating, and refreshments are available. ",
  },
  {
    id: "item-3",
    question: "Will my insurance cover infusion therapy?",
    answer:
      "Our team verifies insurance coverage before your treatment begins. We work with most major insurers and handle prior authorizations. Financial counseling is also available if you need help understanding your benefits or exploring assistance programs.",
  },
  {
    id: "item-4",
    question: "How do I prepare for my infusion appointment?",
    answer:
      "We recommend staying hydrated, eating a light meal beforehand, and wearing comfortable clothing with easy access to your arms. Please bring a list of current medications and any required lab results. Some treatments may require that you have a driver — our team will let you know in advance.",
  },
  {
    id: "item-5",
    question: "How can my provider refer me for infusion therapy? ",
    answer:
      "Providers can fax, email, or submit referrals securely through our referral portal. Required information usually includes diagnosis, medication orders, recent labs, and prior authorization details. Our team reviews all referrals within 24–48 hours.",
  },
  {
    id: "item-6",
    question: "What information do referring providers need to send with a referral?",
    answer:
      "To avoid delays, providers should include the patient’s demographics, insurance details, medication order (with dose and frequency), recent lab results, and any supporting clinical notes. Our intake team will contact both the provider and patient to schedule the first appointment.",
  },
];
