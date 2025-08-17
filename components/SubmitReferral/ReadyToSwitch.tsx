import React from "react";
import banner from "@/public/submit-referaral/readytoswitch.png";
import Link from "next/link";
import ArrowUpIcon from "../Icons/ArrowUpIcon";

const ReadyToSwitch = () => {
  return (
    <div className="">
      <div
        className="bg-no-repeat w-full  text-white font-semibold text-center lg:text-[56px]"
        style={{
          backgroundImage: `url("${banner.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: `clamp(60px, 10vw, 100px)`,
          paddingBottom: `clamp(60px, 10vw, 100px)`,
        }}
      >
        <div className="flex flex-col justify-center items-center lg:gap-12 md:gap-8 gap-4 px-4">
          <h2 className="headerText">Ready to switch to Dr. Eric weisbrot</h2>
          <div className="flex items-center ">
            <Link
              href="/submit-referral"
              className="btn xl:text-lg lg:text-base "
            >
              Request an appointment
            </Link>
            <Link
              href="/submit-referral"
              className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center"
            >
              <ArrowUpIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToSwitch;
