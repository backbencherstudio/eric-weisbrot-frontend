"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Counseling = () => {
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
    <div className="maxContainer md:py-[100px] py-[60px]">
      <div className="">
        <p className="sectionCategory !w-auto !inline-flex">Our Therapy</p>
        <h1 className="headerText !font-medium text-[#1D1F2C] mt-3">
          Our Infusion Treatments
        </h1>
        <p className="text-[#4A4C56] md:text-base text-sm leading-[180%] mt-4">
          We offer a wide range of services to meet your personal needs
        </p>
      </div>
      <div className="lg:mt-12 mt-8">
        <div>
          <Accordion
            type="single"
            collapsible
            className="space-y-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-between items-start"
          >
            <div className=" lg:space-y-6 space-y-4">
              {medications.slice(0, 17).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className=" rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent  "
                >
                  <AccordionTrigger
                    className="md:p-6 p-4 data-[state=open]:pb-0 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      <span
                        className={`block transition-transform duration-500 ease-in-out ${
                          openItems.has(faq.name) ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openItems.has(faq.name) ? "-" : "+"}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:p-5 p-3 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
            <div className=" lg:space-y-6 space-y-4">
              {medications.slice(17, 34).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className=" rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent "
                >
                  <AccordionTrigger
                    className="md:p-6 p-4 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      <span
                        className={`block transition-transform duration-500 ease-in-out ${
                          openItems.has(faq.name) ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openItems.has(faq.name) ? "-" : "+"}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:p-6 p-3 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
            <div className=" lg:space-y-6 space-y-4">
              {medications.slice(34, 50).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className="rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent "
                >
                  <AccordionTrigger
                    className="md:p-6 p-4 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      <span
                        className={`block transition-transform duration-500 ease-in-out ${
                          openItems.has(faq.name) ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openItems.has(faq.name) ? "-" : "+"}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:p-5 p-3 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Counseling;

const StepComponent = () => {
  const faxNumbers = [
    { state: "Connecticut", number: "(123) 456-7890" },
    { state: "Maine", number: "(123) 456-7890" },
    { state: "Massachusetts", number: "(123) 456-7890" },
    { state: "New Hampshire", number: "(123) 456-7890" },
    { state: "Rhode Island", number: "(123) 456-7890" },
    { state: "Vermont", number: "(123) 456-7890" },
  ];

  return (
    <div className="">
      <div className="border-b pb-4">
        <h2 className="md:text-lg font-medium leading-[180%] text-black ">
          Step 1:
        </h2>
        <p className="md:text-base text-sm mt-3 md:max-w-[257px] leading-[180%] ">
          Download Specific Order Set for Therapy
        </p>
        <button className="btn md:mt-5 mt-4">Download</button>
        <p className="md:text-base text-sm mt-4  leading-[180%] ">
          Or use our online order submission <br /> process
        </p>
      </div>

      <div className=" border-gray-200 md:mt-8 mt-6">
        <h2 className="md:text-lg font-medium leading-[180%] text-black">
          Step 2:
        </h2>
        <p className="md:text-xl text-lg font-medium leading-[180%]">
          Fax or Submit Forms to Dr. Eric's website
        </p>
        <div className="md:max-w-[285px]">
          <p className="md:text-base leading-[180%]  text-sm text-[#4A4C56] mt-4">
            Submit completed forms with supporting documentation to orders{" "}
            <a href="billing@mdelw.com" className="text-[#162F73]">
              billing@mdelw.com
            </a>{" "}
          </p>

          {/* <div className="flex flex-col lg:mt-8 mt-6 gap-3">
            {faxNumbers.map((fax, index) => (
              <p key={index} className="md:text-base text-sm font-medium leadint-[180%] text-[#1D1F2C] ">
                {fax.state}: <span className="text-[#4A4C56] leading-[180%] md:text-base text-sm">{fax.number}</span>
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const medications = [
  { id: 1, name: "Actemra", content: <StepComponent /> },
  { id: 2, name: "Adakveo", content: <StepComponent /> },
  { id: 3, name: "Amvuttra", content: <StepComponent /> },
  { id: 4, name: "Apretude", content: <StepComponent /> },
  { id: 5, name: "Asceniv", content: <StepComponent /> },
  { id: 6, name: "Benlysta", content: <StepComponent /> },
  { id: 7, name: "Briuvmi", content: <StepComponent /> },
  { id: 8, name: "Cabenuva", content: <StepComponent /> },
  { id: 9, name: "Cosentyx IV", content: <StepComponent /> },
  { id: 10, name: "Crysvita", content: <StepComponent /> },
  { id: 11, name: "Entyvio", content: <StepComponent /> },
  { id: 12, name: "Evkeeza", content: <StepComponent /> },
  { id: 13, name: "Fasenra", content: <StepComponent /> },
  { id: 14, name: "Cammgarrd Liquid", content: <StepComponent /> },
  { id: 15, name: "Herceptin Hylecta", content: <StepComponent /> },
  { id: 16, name: "HyQvia", content: <StepComponent /> },
  { id: 17, name: "Ilaris", content: <StepComponent /> },
  { id: 18, name: "Infliximab", content: <StepComponent /> },
  { id: 19, name: "IVIG", content: <StepComponent /> },
  { id: 20, name: "Kisquni", content: <StepComponent /> },
  { id: 21, name: "Krystexxa", content: <StepComponent /> },
  { id: 22, name: "Legembi", content: <StepComponent /> },
  { id: 23, name: "Leqvio", content: <StepComponent /> },
  { id: 24, name: "Nulijix", content: <StepComponent /> },
  { id: 25, name: "Ocrevus", content: <StepComponent /> },
  { id: 26, name: "Omvoh IV", content: <StepComponent /> },
  { id: 27, name: "Panzyga", content: <StepComponent /> },
  { id: 28, name: "Pemgarada", content: <StepComponent /> },
  { id: 29, name: "privigen", content: <StepComponent /> },
  { id: 30, name: "prolia", content: <StepComponent /> },
  { id: 31, name: "Renflexis", content: <StepComponent /> },
  { id: 32, name: "Rituxan", content: <StepComponent /> },
  { id: 33, name: "Rituximab", content: <StepComponent /> },
  { id: 34, name: "Ruxience", content: <StepComponent /> },
  { id: 35, name: "Rystiggo", content: <StepComponent /> },
  { id: 36, name: "Saphnelo", content: <StepComponent /> },
  { id: 37, name: "Simponi Aria", content: <StepComponent /> },
  { id: 38, name: "Skyrizi (IV only)", content: <StepComponent /> },
  { id: 39, name: "Soliris", content: <StepComponent /> },
  { id: 40, name: "Solu-Medrol", content: <StepComponent /> },
  { id: 41, name: "Tepezza", content: <StepComponent /> },
  { id: 42, name: "Tezspire", content: <StepComponent /> },
  { id: 43, name: "Tremfya", content: <StepComponent /> },
  { id: 44, name: "Tysabri", content: <StepComponent /> },
  { id: 45, name: "Ultomiris", content: <StepComponent /> },
  { id: 46, name: "Uplizna", content: <StepComponent /> },
  { id: 47, name: "vyvepti", content: <StepComponent /> },
  { id: 48, name: "Vyvxxat Hytrulo", content: <StepComponent /> },
  { id: 49, name: "Xolair", content: <StepComponent /> },
  { id: 50, name: "Ilumya", content: <StepComponent /> },
];
