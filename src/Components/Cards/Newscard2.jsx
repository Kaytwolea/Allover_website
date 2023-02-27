import React from "react";

const Newscard2 = (props) => {
  return (
    <div className={`h-64 ${props.bg} relative shadow-sm`}>
      <div className="absolute bottom-0 h-20 bg-white w-full py-4 pl-4">
        <h5 className="text-base font-semibold uppercase text-[#254a2a] ">
          {props.title}
        </h5>
        <p className="text-sm font-extrabold text-[#254a2a]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Newscard2;
