import React from "react";

const Schools = () => {
  return (
    <div>
      <div className="bg-white w-full lg:h-96 schools-bg py-10">
        <h2 className="lg:text-4xl text-2xl text-center font-bold text-[#0b0d0f]">
          Seven schools in which to pursue your passions
        </h2>
        <div className="mt-8 flex flex-col lg:flex-row justify-center gap-6 mx-8">
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            applied science
          </p>
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            natural science
          </p>
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            engineering
          </p>
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            design & arts
          </p>
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            information & technology
          </p>
          <p className="lg:border-r-2 lg:border-l-[#254a2a] capitalize pr-4 text-[#254a2a] text-base font-normal">
            business
          </p>
          <p className="capitalize pr-6 text-[#254a2a] text-base font-normal">
            education
          </p>
        </div>
        <div className="mt-20 flex justify-center">
          <button className="h-12 lg:w-96 w-3/4 bg-[#6EBD55] text-white text-base font-bold">
            More about academics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schools;
