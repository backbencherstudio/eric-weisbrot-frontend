import React from "react";


const ReuseableBanner = ({banner,text}) => {
  return (
    <div className="">
      <div
        className="bg-no-repeat w-full bg-center   text-white font-semibold text-center lg:text-[56px]"
        style={{
          // backgroundImage: `url("${banner.src}")`,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),url("${banner}") `,
          backgroundSize: "cover",
          // backgroundPosition: "top",
          backgroundRepeat:"no-repeat",
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
