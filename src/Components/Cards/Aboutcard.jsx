import React from "react";

const Aboutcard = (props) => {
  return (
    <div className="shadow-xl rounded-md">
      <div className="w-5/6 mx-auto my-8">
        <img src={props.img} alt="" />
        <h4 className="text-sm text-[#0b0d0f] font-bold pt-12">
          {props.title}
        </h4>
        <p className="text-sm font-normal text-[#333333] w-5/6 pt-4 leading-[22px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Aboutcard;
