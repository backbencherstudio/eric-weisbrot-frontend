import React from "react";
import GoutIcon from "../Icons/GoutIcon";
import GaucherDiseaseIcon from "../Icons/GaucherdiseaseIcon";
import FabryDiseaseIcon from "../Icons/FabryDiseaseIcon";
import ChronicIcon from "../Icons/ChronicIcon";
import AlzeimerIcon from "../Icons/AlzeimerIcon";
import MedicalIcon from "../Icons/MedicalIcon";

const OurCondition = () => {
  return (
    <div>
      <div className="maxContainer md:py-[100px] py-[60px]">
        <div className="">
          <p className="sectionCategory !w-auto !inline-flex">Our Conditions</p>
          <h1 className="headerText !font-medium text-[#1D1F2C] mt-3">
            Condition & Therapies 
          </h1>
          <p className="text-[#4A4C56] md:text-base text-sm leading-[180%] mt-4">
            Infusion therapy helps treat conditions where oral medications aren’t effective, including autoimmune disorders like rheumatoid arthritis, Crohn’s disease, multiple sclerosis, and lupus. It is also used for osteoporosis, chronic infections, and certain neurological conditions. Common therapies include biologics, antibiotics, hydration, and immune-modulating medications—delivered directly into the bloodstream for faster, more effective results. Each treatment plan is personalized, with patients carefully monitored to ensure safety and comfort. 
          </p>
        </div>
        <div>
          <div className="lg:mt-12 md:mt-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {medicalConditions.map((condition) => (
                <div
                  key={condition.id}
                  className="rounded-lg bg-[#EFF8FF] p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 "
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[#0090FF]">
                    {condition.icon}
                  </div>
                  <h3 className="lg:text-lg text-base leading-[180%]">
                    {condition.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCondition;






const medicalConditions = [
  {
    id: 1,
    name: "Alzheimer’s Disease",
    icon: <AlzeimerIcon />,
  },
  {
    id: 2,
    name: "Ankylosing Spondylitis",
    icon: <MedicalIcon />,
  },
  {
    id: 3,
    name: "Chronic Migraines ",
    icon: <FabryDiseaseIcon />,
  },
  {
    id: 4,
    name: "Fabry Disease ",
    icon: <GaucherDiseaseIcon />,
  },
  {
    id: 5,
    name: "Gaucher Disease ",
    icon: <GoutIcon />,
  },
  { id: 6, name: "Gout", icon: <ChronicIcon /> },
  //   ==============upto this icon also added===========

  { id: 7, name: "Lupus", icon: <MedicalIcon /> },
  {
    id: 8,
    name: "Multiple Sclerosis",
    icon: <AlzeimerIcon />,
  },
  {
    id: 9,
    name: "Myasthenia Gravis",
    icon: <FabryDiseaseIcon />,
  },
  {
    id: 10,
    name: "Osteoporosis",
    icon: <GaucherDiseaseIcon />,
  },
  {
    id: 11,
    name: "Psoriatic Arthritis",
    icon: <MedicalIcon />,
  },
  {
    id: 12,
    name: "Psoriasis",
    icon: <GaucherDiseaseIcon />,
  },
  {
    id: 13,
    name: "Rheumatoid Arthritis",
    icon: <AlzeimerIcon />,
  },
  {
    id: 14,
    name: "Severe Asthma",
    icon: <MedicalIcon />,
  },
  {
    id: 15,
    name: "Thyroid Eye Disease",
    icon: <ChronicIcon />,
  },
  {
    id: 16,
    name: "Ulcerative Colitis",
    icon: <AlzeimerIcon />,
  },

];
