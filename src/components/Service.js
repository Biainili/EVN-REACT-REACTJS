import React from "react";
import Navbar from "./Navbar";
import ServiceHero from "./ServiceHero";

function Service() {
  return (
    <div className="">
      <div className="flex absolute z-10 bg-gray-700/80 w-full h-[65px] ">
        <Navbar />
      </div>

      {/* hero start */}
      <ServiceHero />
      {/* hero end */}
    </div>
  );
}

export default Service;
