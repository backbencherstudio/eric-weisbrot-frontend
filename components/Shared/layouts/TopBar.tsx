import CallIcon from "@/components/Icons/CallIcon";
import LocationIcon from "@/components/Icons/locationIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#162F73]  py-[6px] text-white ">
        <div className="maxContainer">
          <div className="md:justify-between justify-center flex  leading-[180%] lg:text-lg md:text-base text-xs items-center  flex-wrap md:gap-4 ">
            <div className="flex  flex-wrap md:gap-6 gap-4">
              <div className="flex  items-center gap-2.5">
                <LocationIcon className="md:w-6 w-4 md:h-6 h-4" />
                <span className="">123 Education Street, Suite 456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CallIcon className="md:w-6 w-4 md:h-6 h-4" />
                <span className="">(123) 456-7890</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 ml-4">
              <MessageIcon className="md:w-6 w-4 md:h-6 h-4" />
              <span className="">example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopBar;
