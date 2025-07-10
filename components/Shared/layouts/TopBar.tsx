import CallIcon from "@/components/Icons/CallIcon";
import LocationIcon from "@/components/Icons/locationIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#162F73]  py-[6px] text-white ">
        <div className="max-w-[1920px] mx-auto 2xl:px-[60px] px-5">
          <div className="md:justify-between flex gap-2.5 leading-[180%] lg:text-lg text-base items-center  flex-wrap">
            <div className="flex flex-wrap md:gap-6 gap-2.5">
              <div className="flex  items-center gap-2.5">
                <LocationIcon />
                <span className="">123 Education Street, Suite 456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CallIcon />
                <span className="">(123) 456-7890</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageIcon />
              <span className="">example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopBar;
