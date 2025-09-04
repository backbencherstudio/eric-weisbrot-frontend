"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import DropDownIcon from "../Icons/DropDownIcon";


const Counseling = () => {
  // const [openItems, setOpenItems] = useState(new Set());

  // const handleToggle = (itemId: string) => {
  //   setOpenItems((prev) => {
  //     const newSet = new Set(prev);
  //     if (newSet.has(itemId)) {
  //       newSet.delete(itemId);
  //     } else {
  //       newSet.add(itemId);
  //     }
  //     return newSet;
  //   });
  // };

  const [openItem, setOpenItem] = useState(null); // Track single open item

  // Replace the handleToggle function with this:
  const handleToggle = (itemId) => {
    setOpenItem(prev => prev === itemId ? null : itemId);
  };

  console.log(openItem,"open itemss")


  return (
    <div className="maxContainer xl:py-[100px] py-[60px]">
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
              {medications.slice(0, 9).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className=" rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent  "
                >
                  <AccordionTrigger
                    className="md:p-6 md:py-4 p-4 py-3 data-[state=open]:pb-0 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      {/* <span
                        className={`block transition-transform duration-500 ease-in-out text-red-500 ${openItems.has(faq.name) ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <DropDownIcon className="" />
                      </span> */}
                      <span
                        className={`block transition-transform duration-500 ease-in-out text-red-500 ${openItem === faq.name ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <DropDownIcon className="" />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:px-6 p-3 pt-0 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
            <div className=" lg:space-y-6 space-y-4">
              {medications.slice(9, 18).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className=" rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent "
                >
                  <AccordionTrigger
                    className="md:p-6 md:py-4 p-4 py-3 data-[state=open]:pb-0 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      <span
                        className={`block transition-transform duration-500 ease-in-out text-red-500 ${openItem === faq.name ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <DropDownIcon className="" />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:px-6 p-3 pt-0 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
            <div className=" lg:space-y-6 space-y-4">
              {medications.slice(18, 29).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.name}
                  className="rounded-[10px] border border-[#EBF5FC] bg-white shadow-[0px_4px_13.6px_0px_rgba(206,204,204,0.15)] overflow-hidden data-[state=open]:bg-transparent "
                >
                  <AccordionTrigger
                    className="md:p-6 md:py-4 p-4 py-3 data-[state=open]:pb-0 pr-20 cursor-pointer text-[#1D1F2C] hover:no-underline data-[state=open]:rounded-t-lg data-[state=open]:rounded-b-none lg:text-2xl md:text-xl text-lg text-left font-medium leading-[180%] relative"
                    onClick={() => handleToggle(faq.name)}
                  >
                    {faq.name}
                    <div className="absolute text-2xl h-full right-0 top-0 flex items-center justify-center w-[70px] transition-all duration-300 ease-in-out">
                      <span
                        className={`block transition-transform duration-500 ease-in-out text-red-500 ${openItem === faq.name ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <DropDownIcon className="" />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:px-6 p-3 pt-0 text-[#1D1F2C] leading-[180%] lg:text-lg md:text-base text-sm">
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

const StepComponent = ({ link }) => {


  return (
    <div className="">
      <div className="border-b pb-4 mt-4">
        <h2 className="md:text-lg font-semibold  text-black ">
          Step 1:
        </h2>
        <p className="md:text-lg font-semibold text-sm md:mt-4 mt-3 md:max-w-[257px]  leading-[160%]">
          Download Specific Order Set for Therapy
        </p>
        <p className="md:mt-4 mt-3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn ">Download</button>
          </a>
        </p>
        <p className="md:text-lg  md:mt-4 mt-3  leading-[160%] ">
          Or use our <Link href="/submit-referral" className="text-[#162F73] font-semibold">online order submission</Link> <br /> process
        </p>
      </div>

      <div className=" border-gray-200 md:mt-4 mt-3">
        <h2 className="md:text-lg font-semibold  text-blackk">
          Step 2:
        </h2>
        <p className="md:text-lg font-semibold text-sm md:mt-4 mt-3 md:max-w-[257px] leading-[160%]">
          Fax or Submit forms to Dr. Weisbrot  </p>
        <p className="md:text-lg  md:mt-4 mt-3  leading-[160%] ">
          Submit completed forms with supporting documentation to <a href="mailto:billing@mdelw.com" className="text-[#162F73]">billing@mdelw.com</a> or submit via fax <span className="text-[#162F73]">(410-637-8255)</span>
        </p>
        {/* <span  className="text-[#162F73]">(410-637-8255)</span>  or email <br />
            <span  className="text-[#162F73]">
              <a href="mailto:billing@mdelw.com" className="">billing@mdelw.com</a>
            </span>{" "} */}

        <div className="md:max-w-[285px]">
          <p className="md:text-base leading-[180%]  text-sm text-[#4A4C56]">
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
  { id: 1, name: "Actemra", content: <StepComponent link="/pdfs/order-form/ACTEMRA.pdf" />, },
  { id: 2, name: "Benlysta", content: <StepComponent link="/pdfs/order-form/Benlysta.pdf" />, },
  { id: 3, name: "Cimzia", content: <StepComponent link="/pdfs/order-form/Cimzia.pdf" />, },
  { id: 4, name: "Cinqair", content: <StepComponent link="/pdfs/order-form/Cinqair.pdf" />, },
  { id: 5, name: "Cinryze", content: <StepComponent link="/pdfs/order-form/Cinryze.pdf" />, },
  { id: 6, name: "Entyvio", content: <StepComponent link="/pdfs/order-form/Entyvio.pdf" />, },
  { id: 7, name: "Fasenra", content: <StepComponent link="/pdfs/order-form/FASENRA.pdf" />, },
  { id: 8, name: "Ferrlecit", content: <StepComponent link="/pdfs/order-form/FERRLECIT.pdf" />, },
  { id: 9, name: "Inflectra", content: <StepComponent link="/pdfs/order-form/Inflectra.pdf" />, },

  { id: 10, name: "IVIG", content: <StepComponent link="/pdfs/order-form/IVIG.pdf" />, },
  { id: 11, name: "Krystexxa", content: <StepComponent link="/pdfs/order-form/Krystexxa.pdf" />, },
  { id: 12, name: "Lemtrada", content: <StepComponent link="/pdfs/order-form/LEMTRADA.pdf" />, },
  { id: 13, name: "Leqvio", content: <StepComponent link="/pdfs/order-form/Leqvio Infusion Order.pdf" />, },
  { id: 14, name: "Migraine", content: <StepComponent link="/pdfs/order-form/Migraine.pdf" />, },
  { id: 15, name: "Monoferric", content: <StepComponent link="/pdfs/order-form/Monoferric Infusion Order.pdf" />, },
  { id: 16, name: "Nucala", content: <StepComponent link="/pdfs/order-form/NUCALA.pdf" />, },
  { id: 17, name: "Ocrevus", content: <StepComponent link="/pdfs/order-form/Ocrevus.pdf" />, },
  { id: 18, name: "Orencia", content: <StepComponent link="/pdfs/order-form/Orencia.pdf" />, },

  { id: 19, name: "Prolia", content: <StepComponent link="/pdfs/order-form/Prolia.pdf" />, },
  { id: 20, name: "Remicade", content: <StepComponent link="/pdfs/order-form/Remicade.pdf" />, },
  { id: 21, name: "Renflexis", content: <StepComponent link="/pdfs/order-form/RENFLEXIS.pdf" />, },
  { id: 22, name: "Rituxan", content: <StepComponent link="/pdfs/order-form/Rituxan.pdf" />, },
  { id: 23, name: "Simponi Aria", content: <StepComponent link="/pdfs/order-form/Simponi ARIA.pdf" />, },
  { id: 24, name: "Stelara IV", content: <StepComponent link="/pdfs/order-form/Stelara IV.pdf" />, },
  { id: 25, name: "Tysabri", content: <StepComponent link="/pdfs/order-form/Tysabri.pdf" />, },
  { id: 26, name: "Xolair", content: <StepComponent link="/pdfs/order-form/Xolair.pdf" />, },
  { id: 27, name: "Zoledronic", content: <StepComponent link="/pdfs/order-form/Zoledronic Acid.pdf" />, },
  // { id: 28, name: "Pemgarada", content: <StepComponent /> },
  // { id: 29, name: "privigen", content: <StepComponent /> },
  // { id: 30, name: "prolia", content: <StepComponent /> },
  // { id: 31, name: "Renflexis", content: <StepComponent /> },
  // { id: 32, name: "Rituxan", content: <StepComponent /> },
  // { id: 33, name: "Rituximab", content: <StepComponent /> },
  // { id: 34, name: "Ruxience", content: <StepComponent /> },
  // { id: 35, name: "Rystiggo", content: <StepComponent /> },
  // { id: 36, name: "Saphnelo", content: <StepComponent /> },
  // { id: 37, name: "Simponi Aria", content: <StepComponent /> },
  // { id: 38, name: "Skyrizi (IV only)", content: <StepComponent /> },
  // { id: 39, name: "Soliris", content: <StepComponent /> },
  // { id: 40, name: "Solu-Medrol", content: <StepComponent /> },
  // { id: 41, name: "Tepezza", content: <StepComponent /> },
  // { id: 42, name: "Tezspire", content: <StepComponent /> },
  // { id: 43, name: "Tremfya", content: <StepComponent /> },
  // { id: 44, name: "Tysabri", content: <StepComponent /> },
  // { id: 45, name: "Ultomiris", content: <StepComponent /> },
  // { id: 46, name: "Uplizna", content: <StepComponent /> },
  // { id: 47, name: "vyvepti", content: <StepComponent /> },
  // { id: 48, name: "Vyvxxat Hytrulo", content: <StepComponent /> },
  // { id: 49, name: "Xolair", content: <StepComponent /> },
  // { id: 50, name: "Ilumya", content: <StepComponent /> },
];
