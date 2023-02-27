import React from "react";

const Newscard = (props) => {
  return (
    <div className={`lg:w-[55%] h-64 ${props.bg} relative`}>
      <div className="h-28 lg:py-8  w-full absolute bottom-0 lg:px-8 px-6">
        <h5 className="text-base font-semibold text-white uppercase">
          {props.title}
        </h5>
        <p className="text-sm text-white font-extrabold font-sans pt-1">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Newscard;
