import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#0b0d0f] lg:h-80 py-6 border-t-8 border-b-8 border-b-[#6ebd55] border-t-[#cfdad0]">
      <div className="w-5/6 mx-auto mt-10 grid lg:grid-cols-6 gap-6 justify-between">
        <div className="space-y-2">
          <h6 className="text-sm text-white">Ogun State, Nigeria</h6>
          <p className="text-sm text-white">+234 81 011 222 3333</p>
          <p className="text-sm text-white">alloverp@info.com</p>
          <div className="flex gap-6">
            <img src="./images/facebook.png" alt=" " />
            <img src="./images/twitter.png" alt=" " />
          </div>
        </div>
        <div className="text-white text-sm">
          <h6 className="font-bold">About Alop</h6>
          <ul className="pt-4 space-y-1">
            <li>
              <a>What is ALOP?</a>
            </li>
            <li>
              <a>How does it work?</a>
            </li>
            <li>
              <a>Enrollment Trend?</a>
            </li>
            <li>
              <a>FAQ?</a>
            </li>
          </ul>
        </div>
        <div className="text-white text-sm">
          <h6 className="font-bold">Courses Offered</h6>
          <ul className="pt-4 space-y-1">
            <li>
              <a>IT Courses</a>
            </li>
            <li>Diploma</li>
            <li>National Diploma</li>
          </ul>
        </div>
        <div className="text-white text-sm">
          <h6 className="font-bold">Admissions</h6>
          <ul className="pt-4 space-y-1">
            <li>First time registration</li>
            <li>Admission Portal</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="text-white text-sm">
          <h6 className="font-bold">Examination & Results</h6>
          <ul className="pt-4 space-y-1">
            <li>Examination Details</li>
            <li>Results</li>
          </ul>
        </div>
        <div className="text-white text-sm">
          <h6 className="font-bold">Other Services</h6>
          <ul className="pt-4 space-y-1">
            <li>Counselling</li>
            <li>Library</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h4 className="uppercase text-center text-sm text-white font-normal">
          cephas ict hub | 2023
        </h4>
      </div>
    </div>
  );
};

export default Footer;
