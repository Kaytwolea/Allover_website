import React from "react";
import CoursesCard from "../../Cards/CoursesCard";

const Courses = () => {
  return (
    <div className="w-full bg-[#fafafa] py-12">
      <div className="w-5/6 mx-auto">
        <div className="flex lg:w-3/4 mx-auto justify-center">
          <div>
            <h3 className="text-4xl text-gray-900 text-center font-bold capitalize">
              courses offered
            </h3>
            <p className="text-base text-[#171717] lg:text-center text-left pt-4">
              ALOP offers 100 courses across Diploma, National Diploma and
              Higher National Diploma. You can pursue any of these degrees at
              your own pace with minimal cost while working!{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-5/6 mx-auto bg-transparent grid lg:grid-cols-3 gap-4 mt-8">
          <CoursesCard
            image="./images/diploma.png"
            title="diploma degree"
            description="Do you have a 12th degree and are looking for a diploma’s degree?"
          />
          <CoursesCard
            image="./images/national.png"
            title="National diploma"
            description="Do you have a diploma degree and are looking for a national diploma to pursue? "
          />
          <CoursesCard
            image="./images/higher.png"
            title="Higher N. Diploma"
            description="Do you have a national diploma and are looking for a higher national diploma? "
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="h-12 w-36 bg-[#002147] rounded-full text-white uppercase font-bold text-sm">Register Now</button>
      </div>
    </div>
  );
};

export default Courses;
