import React from "react";

const Numbers = () => {
  return (
    <div>
      <div className="w-full h-24 bg-[#7ec139] lg:flex hidden justify-center items-center gap-20">
        <div className="flex gap-8">
          <img src="./images/courses.svg" alt="" />
          <div>
            <p
              className="text-xl text-[#002147] font-bold
          "
            >
              31
            </p>
            <p className="text-sm font-normal text-[#002147] capitalize">
              courses offered
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="./images/office.svg" alt="" />
          <div>
            <p
              className="text-xl text-[#002147] font-bold
          "
            >
              100+
            </p>
            <p className="text-sm font-normal text-[#002147] capitalize">
              staff
            </p>
          </div>
        </div>
        <div>
          <p
            className="text-xl text-[#002147] font-bold
          "
          >
            7
          </p>
          <p className="text-sm font-normal text-[#002147] capitalize">
            Faculties
          </p>
        </div>
        <div>
          <p
            className="text-xl text-[#002147] font-bold
          "
          >
            20,000+
          </p>
          <p className="text-sm font-normal text-[#002147] capitalize">
            Students enrolled
          </p>
        </div>
        <div>
          <p
            className="text-xl text-[#002147] font-bold
          "
          >
            35+
          </p>
          <p className="text-sm font-normal text-[#002147] capitalize">
            exam centers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
