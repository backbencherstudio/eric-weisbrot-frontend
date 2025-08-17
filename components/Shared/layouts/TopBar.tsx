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
                <a target="_blank" href="https://www.google.com/maps/place/Eric+L.+Weisbrot,+M.D./@39.3217698,-76.6658318,12.75z/data=!4m10!1m2!2m1!1sdr+weisbrot!3m6!1s0x89c80496b60e0bf3:0xe52f6839c1a467dc!8m2!3d39.3017949!4d-76.6129412!15sCgtkciB3ZWlzYnJvdFoNIgtkciB3ZWlzYnJvdJIBGWZhbWlseV9wcmFjdGljZV9waHlzaWNpYW6aASRDaGREU1VoTk1HOW5TMFZPWDFweFQwOWZNVXd6VkROQlJSQUKqAUEKCy9nLzF2X3o5d2JzEAEyHxABIhuMOZ0bwxZYpcDUkCFaQ3Bt9hfPPXLkmLOHJmgyDxACIgtkciB3ZWlzYnJvdOABAPoBBAgAEBk!16s%2Fg%2F1v_z9wbs?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" className="">1021 N Calvert St, Baltimore</a>
              </div>
              <div className="flex items-center gap-2.5">
                <CallIcon className="md:w-6 w-4 md:h-6 h-4" />
                <span className="">+1410-637-8255</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 ml-4">
              <MessageIcon className="md:w-6 w-4 md:h-6 h-4" />
              <span className="">billing@mdelw.com</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopBar;
