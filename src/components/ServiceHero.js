import React from "react";
import the_bg_video from "../assets/video_service.mp4";
import img_this_1 from "../assets/img_page_service.png";

function ServiceHero() {
  return (
    <div className="w-full h-[500px] relative top-16">
      <video
        className="w-full h-full object-cover"
        src={the_bg_video}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>
      <div className="absolute top-0 w-full h-full flex justify-between text-black p-4 px-[150px] mt-10 pb-12">
        <div className="w-1/2">
          <h1>Our Services</h1>
          <span className="">
            Embark on a journey of innovation and prosperity with our diverse
            range of services tailored to meet your business demands. At the
            intersection of finance and technology, we offer bespoke solutions
            to propel your organization forward.
          </span>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={img_this_1} className="w-[400px] h-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
