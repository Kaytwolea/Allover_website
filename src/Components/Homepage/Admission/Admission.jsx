import React from "react";

const Admission = () => {
  return (
    <div className="bg-white w-full py-14">
      <div className="w-5/6 mx-auto">
        <h2 className="capitalize text-[#0b0d0f] text-center text-4xl font-bold">
          Admission
        </h2>
        <p className="text-[#254a2a] text-base font-normal text-center pt-4">
          Stories about education, technology, people, research, and innovation
          across the Globe
        </p>
        <div className="admission-home h-[356px] w-full mt-12"></div>
        <div className="mt-20 flex justify-center">
          <button className="h-12 lg:w-96 w-3/4 bg-[#6EBD55] text-white text-base font-bold">
            More about admissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
