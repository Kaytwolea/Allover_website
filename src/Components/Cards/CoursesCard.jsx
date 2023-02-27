import React from "react";

const CoursesCard = (props) => {
  return (
    <div className="courses-card bg-white h-96">
      <div className="h-60 w-full">
        <img src={props.image} alt="" className="w-full h-full" />
      </div>
      <div className="mt-6 mx-3">
        <h3 className="text-2xl text-[#002147] font-bold capitalize">
          {props.title}
        </h3>
        <p className="text-sm text-[#474747] font-normal pt-2">
            {props.description}
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
