import React from "react";

const AboutSection1 = () => {
  return (
    <div className="mt-20 w-full py-20 bg-[#254a2a]">
      <div className="w-5/6 mx-auto flex flex-col lg:flex-row">
        <div className="lg:h-72 lg:w-[45%] bg-white lg:px-10 py-10 px-2">
          <h6 className="text-base text-black font-bold lg:whitespace-nowrap">
            “Be Here” – a virtual reality experience of Stanford
          </h6>
          <p className="text-sm fotn-normal text-black pt-4 lg:w-5/6">
            What’s it like to be a graduate of{" "}
            <span className="text-[#254a2a]">AllOver Central Polytechnic?</span>
            Students chart their own paths of discovery, learning and growth,
            and each journey is as unique as the individual. At our polytechnic,
            we believe that education is a lifelong journey, and we are
            committed to helping our students achieve their goals every step of
            the way.
          </p>
        </div>
        <div className="h-96 lg:w-[65%] lg:mt-16 lg:-ml-16">
          <img src="./images/aboutsection1.png" alt=" " className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
