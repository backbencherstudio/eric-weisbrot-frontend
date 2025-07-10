import React from "react";
import banner from "@/public/home/banner.png";
import ArrowUpIcon from "../Icons/ArrowUpIcon";

const HomeBanner = () => {
  return (
    <div className="max-w-[1920px] mx-auto 2xl:px-[60px] px-5 ">
      <div
        className="bg-no-repeat w-full  rounded-[20px]"
        style={{
          backgroundImage: `url("${banner.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className=" flex flex-col max-w-[731px] pl-[64px]"
          style={{
            paddingTop: `clamp(64px, 10vw, 178px)`,
            paddingBottom: `clamp(64px, 10vw, 178px)`,
             paddingLeft: `clamp(32px, 5vw, 64px)`
          }}
        >
          <div>
            <span className="py-[3px]  px-4 text-white leading-[180%] rounded-[60px] border border-white backdrop-blur-[5px] bg-[#FFFFFF38] text-base ">
              Committed To Helping{" "}
            </span>
          </div>
          <div className="mt-4">
            <h1 className="lg:text-[64px] md:text-[46px] text-[32px] font-medium leading-[120%] text-white">
              Improving Access to High-Quality Infusion Services
            </h1>
          </div>
          <div className="flex items-center mt-2.5">
            <button className="btn xl:text-lg lg:text-base ">
              Submit A Referral
            </button>
            <span className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center">
              <ArrowUpIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
