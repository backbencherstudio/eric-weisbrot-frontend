import React from "react";


const ReuseableBanner = ({banner,text}) => {
  return (
    <div className="maxContainer">
      <div
        className="bg-no-repeat w-full bg-top 2xl:bg-center  rounded-[20px] text-white font-semibold text-center lg:text-[56px]"
        style={{
          backgroundImage: `url("${banner.src}")`,
          backgroundSize: "cover",
          // backgroundPosition: "top",
          paddingTop: `clamp(100px, 10vw, 189px)`,
          paddingBottom: `clamp(100px, 10vw, 189px)`,
          fontSize: `clamp(28px, 5vw, 56px)`
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ReuseableBanner;
