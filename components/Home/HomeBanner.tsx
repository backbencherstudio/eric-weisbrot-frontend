import React from "react";
// import banner from "@/public/home/doctor-5.png";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import { Link2 } from "lucide-react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="">
      <div
        className="bg-no-repeat w-ful 2xl:bg-top bg-center bg-cover "
        style={{
          backgroundImage: `url("${"/home/home-banner-img2.png"}")`,
          // backgroundSize: "100%",
          // backgroundPosition: "center",
        }}
      >
        <div className="maxContainer">
          <div
            className=" flex flex-col max-w-[731px]  "
            style={{
              paddingTop: `clamp(64px, 10vw, 178px)`,
              paddingBottom: `clamp(64px, 10vw, 178px)`,
              //  paddingLeft: `clamp(32px, 5vw, 54px)`,
            }}
          >
            <div>
              <span className="py-[3px]  px-4 text-white leading-[180%] rounded-[60px] border border-white backdrop-blur-[5px] bg-[#FFFFFF38] text-base ">
                Committed To Helping{" "}
              </span>
            </div>
            <div className="mt-4">
              <h1 className="xl:text-[56px] lg:text-[46px] md:text-[36px] text-[32px] md:w-[18ch] font-medium leading-[120%] text-white">
                Bringing High-Quality Infusions to Every Community
              </h1>
            </div>
            <div className="flex items-center mt-2.5">
              <Link href="/submit-referral" className="btn xl:text-lg lg:text-base ">
                Submit A Referral
              </Link>
              <Link href="/submit-referral" className="bgPrimary w-[52px] h-[52px] rounded-full flex items-center justify-center">
                <ArrowUpIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
