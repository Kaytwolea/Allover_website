import React from "react";

const Hero = () => {
  return (
    <div className="hero-main w-full">
      <div className="w-5/6 mx-auto py-20">
        <div className="lg:w-3/4">
          <h4 className="font-normal lg:text-lg text-sm text-white">
            Experience education like never before at our polytechnic
          </h4>
          <h1 className="uppercase text-white font-bold text-3xl lg:text-6xl lg:w-3/4 leading-snug">
            Unlock your potential with our POLYTECHNIC 's world-class education
          </h1>
          <div className="flex gap-6 mt-6">
            <button className="h-10 w-40 bg-[#232527] text-white rounded-full font-normal text-sm uppercase">
              Register now
            </button>
            <button className="h-10 w-40 bg-transparent border-2 border-white text-white rounded-full font-normal text-sm uppercase">
              Explore courses
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-white rounded-full h-4 w-4"></button>
            <button className="bg-transparent border-2 rounded-full h-4 w-4"></button>
            <button className="bg-transparent border-2 rounded-full h-4 w-4"></button>
          </div>
        </div>
      </div>
      <div className="lg:h-8 h-10 w-full bg-[#232527] flex justify-center items-center">
        <h4 className="text-center text-white text-sm">
          Applications now open for ND and HND for 2023-2024. Apply Now!
        </h4>
      </div>
    </div>
  );
};

export default Hero;
