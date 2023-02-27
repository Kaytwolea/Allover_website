import React from "react";
import Newscard from "../../Cards/Newscard";
import Newscard2 from "../../Cards/Newscard2";

const News = () => {
  return (
    <div className="bg-[#fafafa] w-full py-14">
      <div className="w-5/6 mx-auto">
        <h3 className="text-[#0b0d0f] font-bold text-4xl text-center capitalize">
          polytechnic news
        </h3>
        <p className="text-[#254a2a] font-normal text-base text-center pt-6">
          Stories about education, technology, people, research, and innovation
          across the Globe
        </p>
        <div className="mt-8 flex flex-col lg:flex-row gap-4 w-full">
          <Newscard
            bg="newscard-bg1"
            title="science & research"
            description="New study by Roscocco scientists sheds light on Biotechnology"
          />
          <div className="lg:w-[45%] w-full grid lg:grid-cols-2 gap-5">
            <Newscard2
              bg="newscard2-bg1"
              title="technology"
              description="New study by Roscocco"
            />
            <Newscard2
              bg="newscard2-bg2"
              title="agriculture"
              description="New study by Roscocco"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row gap-4 w-full">
          <div className="lg:w-[45%] lg:grid grid-cols-2 gap-5">
            <Newscard2
              bg="newscard2-bg3"
              title="science"
              description="New study by Roscocco"
            />
            <Newscard2
              bg="newscard2-bg4"
              title="media & communication"
              description="New study by Roscocco"
            />
          </div>
          <Newscard
            bg="newscard-bg2"
            title="arts & humanities"
            description="New issue/topic has been discovered by a 300-level of the institution which led to the amazement of many including the student’s lectures."
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="h-12 w-40 bg-[#002147] text-white font-bold text-base uppercase rounded-2xl">
          more news
        </button>
      </div>
    </div>
  );
};

export default News;
