import React from "react";

const NavbarHead = () => {
  return (
    <div className="navbar-head w-full hidden lg:block">
      <div className="w-[90%] mx-auto h-10 flex justify-between items-center">
        <div>
          <h4 className="font-bold text-lg text-white">
            Our polytechnic prepares you for success in the real world
          </h4>
        </div>
        <div className="flex gap-2 text-white font-normal text-sm">
          <a>Eng |</a>
          <a>French</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarHead;
