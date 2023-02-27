import React from "react";
import Aboutcard from "../../Cards/Aboutcard";

const About = () => {
  return (
    <div>
      <div className="lg:w-5/6 mx-auto mt-12 hidden lg:grid lg:grid-cols-2 gap-6 py-8">
        <div className="mt-6 w-">
          <p className="text-xl font-light text-[#171717]">__</p>
          <p className="text-base uppercase text-[#171717] font-light">
            about allover
          </p>
          <h2 className="font-bold text-5xl text-[#002147]">
            All you need to know about All-Over Polytechnic
          </h2>
          <p className="text-base text-[#171717 font-normal] pt-8">
            Our mission is to provide students with a world-class education and
            prepare them for success in a globalized economy
          </p>
          <p className="pt-6">
            {" "}
            We take pride in our long history of academic excellence, and we are
            constantly looking ahead to shape the future of higher education.
            Our cutting-edge programs, state-of-the-art facilities, and vibrant
            campus life provide a supportive and enriching environment for
            students.
          </p>
          <div className="mt-20">
            <button className="about-button uppercase h-12 w-40 text-white text-xl font-bold">
              Learn more
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <Aboutcard
              img="./images/flexibility.png"
              title="Flexibility of Study"
              description="Allows you to work alongside or to study anytime and from anywhere"
            />
            <Aboutcard
              img="./images/across.svg"
              title="Recognised Across"
              description="AllOver Central Polytechnic has been awarded the 5 star rating by NUP"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 mt-8">
            <Aboutcard
              img="./images/lowcost.svg"
              title="Low Cost"
              description="All programmes are offered at a low cost as compared to the usual format of study"
            />
            <Aboutcard
              img="./images/degree.svg"
              title="Like a Regular Degree"
              description="Eligibility requirement, degree, curriculum & examination are like other MU affiliated colleges "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
