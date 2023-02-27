import React from "react";

const Eventscard = (props) => {
  return (
    <div className={`h-64 ${props.bg} relative`}>
      <div className="bg-[#254a2a] h-5 w-14 float-right flex justify-center items-center">
        <p className="text-white uppercase fotn-semibold text-[12px]">01 mar</p>
      </div>
      <div className="absolute bottom-0 px-4 py-4 h-24 bg-white w-full">
        <h5 className="text-base font-semibold text-[#254a2a] uppercase">
          event title
        </h5>
        <p className="text-sm font-extrabold text-[#002147]">
          New study by Roscocco
        </p>
        <p className="text-[#254a2a] text-sm font-semibold text-right">
          10:00am
        </p>
      </div>
    </div>
  );
};

export default Eventscard;
