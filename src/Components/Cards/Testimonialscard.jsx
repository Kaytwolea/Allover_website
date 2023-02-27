import React from "react";

const Testimonialscard = (props) => {
  return (
    <div className="shadow-lg rounded-md bg-white h-72 py-6 relative">
      <div className="mt-6 flex gap-2 justify-center">
        <img src="./images/Star.svg" alt="" />
        <img src="./images/Star.svg" alt="" />
        <img src="./images/Star.svg" alt="" />
        <img src="./images/Star.svg" alt="" />
        <img src="./images/Star.svg" alt="" />
      </div>
      <div className="w-5/6 mt-6 mx-auto text-center">
        <p className="text-sm font-normal text-[#4f4f4f]">{props.text}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center h-16 mt-4">
        <p className="text-[#002147] text-base text-center font-bold pt-4">
          {props.student}
        </p>
      </div>
    </div>
  );
};

export default Testimonialscard;
