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
              {medications.slice(9, 18).map((faq) => (
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
              {medications.slice(18, 29).map((faq) => (
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

const StepComponent = ({link}) => {
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
        <a href={link} target="_blank" rel="noopener noreferrer">
  <button className="btn md:mt-5 mt-4">Download</button>
</a>
        <p className="md:text-base text-sm mt-4  leading-[180%] ">
          Or use our online order submission <br /> process
        </p>
      </div>

      <div className=" border-gray-200 md:mt-8 mt-6">
        <h2 className="md:text-lg font-medium leading-[180%] text-black">
          Step 2:
        </h2>
        <p className="md:text-xl text-lg font-medium leading-[180%]">
           Fax or Submit forms to Dr. Weisbrot via fax <span  className="text-[#162F73]">(+1410-637-8255)</span>  or email <br />
            <span  className="text-[#162F73]">
              billing@mdelw.com
            </span>{" "}
        </p>
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
  { id: 1, name: "Actemra", content: <StepComponent link = "/pdfs/ACTEMRA.pdf" />,  },
  { id: 2, name: "Benlysta", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/Benlysta%20updated%201021.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3333.1755655370783&__hsfp=2999528318"  />,},
  { id: 3, name: "Cimzia", content: <StepComponent link= "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Cimzia%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.333.1755655370783&__hsfp=2999528318" />, },
  { id: 4, name: "Cinqair", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/Cinqair.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333.1755655370783&__hsfp=2999528318" />, },
  { id: 5, name: "Cinryze", content: <StepComponent link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Cinryze%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 6, name: "Entyvio", content: <StepComponent link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Entyvio%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 7, name: "Fasenra", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/FASENRA.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.333333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 8, name: "Ferrlecit", content: <StepComponent link = "https://1924704.fs1.hubspotusercontent-na1.net/hubfs/1924704/Order%20Form%20Download/FERRLECIT.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3333333.1755655370783&__hsfp=2999528318" />, },
  { id: 9, name: "Inflectra", content: <StepComponent link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Inflectra%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3333333333333.1755655370783&__hsfp=2999528318" />, },

  { id: 10, name: "IVIG", content: <StepComponent link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/IVIG%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 11, name: "Krystexxa", content: <StepComponent link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Krystexxa%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3333.1755655370783&__hsfp=2999528318" />, },
  { id: 12, name: "Lemtrada", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/LEMTRADA%20(1).pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 13, name: "Leqvio", content: <StepComponent link = "https://1924704.fs1.hubspotusercontent-na1.net/hubfs/1924704/Leqvio%20Infusion%20Order.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333333333332.1755655370783&__hsfp=2999528318" />, },
  { id: 14, name: "Migraine", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/Migraine.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333.1755655370783&__hsfp=2999528318" />, },
  { id: 15, name: "Monoferric", content: <StepComponent link = "https://1924704.fs1.hubspotusercontent-na1.net/hubfs/1924704/MonoFerric%20Infusion%20Order.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333333.1755655370783&__hsfp=2999528318" />, },
  { id: 16, name: "Nucala", content: <StepComponent link = "https://f.hubspotusercontent00.net/hubfs/1924704/Order%20Form%20Download/NUCALA.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3.1755655370783&__hsfp=2999528318"  />,},
  { id: 17, name: "Ocrevus", content: <StepComponent  link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Ocrevus%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33.1755655370783&__hsfp=2999528318"/>, },
  { id: 18, name: "Orencia", content: <StepComponent  link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Orencia%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.333333333333.1755655370783&__hsfp=2999528318"/>, },

  { id: 19, name: "Prolia", content: <StepComponent  link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Prolia%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.33333333333333.1755655370783&__hsfp=2999528318"/>, },
  { id: 20, name: "Remicade", content: <StepComponent  link = "https://cdn2.hubspot.net/hubfs/1924704/Order%20Form%20Download/Remicade%20p1.6.pdf?__hstc=251652889.d531e324b4807983771fafec0198d9e8.1755486655279.1755486655279.1755570693097.2&__hssc=251652889.3333333333333.1755655370783&__hsfp=2999528318" />,},
  { id: 21, name: "Renflexis", content: <StepComponent link = "https://share.hsforms.com/1-n8YxRQkTeWyZPJEEVGlwA15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507"  />,},
  { id: 22, name: "Rituxan", content: <StepComponent  link = "https://share.hsforms.com/1RrjhfzCQTVSpiL9ts39xmg15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507" />,},
  { id: 23, name: "Simponi Aria", content: <StepComponent link = "https://share.hsforms.com/1bvYWnesOTie4rmc8BnQEiw15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507" />, },
  { id: 24, name: "Stelara IV", content: <StepComponent  link = "https://share.hsforms.com/1dPzAFVVjQReb5_zlk8csvw15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507" />,},
  { id: 25, name: "Tysabri", content: <StepComponent  link = "https://share.hsforms.com/1Dx1aGaCwTLCqdPRfBdglkw15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507" />,},
  { id: 26, name: "Xolair", content: <StepComponent link = "https://share.hsforms.com/1mcC3AWpESbepyA3w4RkdBg15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507" />, },
  { id: 27, name: "Zoledronic", content: <StepComponent link = "https://share.hsforms.com/1XdV9AML_Q6mD0LSryV8trw15940?__hstc=150760809.de652f3a9371f3400ae34b90b340a9fe.1755224047656.1755407169010.1755450790136.3&__hssc=150760809.1.1755450790136&__hsfp=2852268507"  />,},
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
