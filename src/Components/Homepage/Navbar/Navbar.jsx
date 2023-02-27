import React, { useState } from "react";
import NavbarHead from "./NavbarHead";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <NavbarHead />
      </div>
      <div className="w-full navbar-main">
        <div className="lg:h-20 h-16 w-5/6 mx-auto flex justify-between items-center overflow-visible">
          <div className="flex gap-4 mt-16">
            <img src="./images/allover-logo.svg" alt="" />
            <div className="hidden lg:block">
              <h3 className="uppercase text-white font-bold text-base">
                ALLOVER CENTRAL POLYTECHNIC
              </h3>
              <p className="font-normal text-sm text-[#db261c]">
                Professional, Integrity and Excellence
              </p>
            </div>
          </div>
          <div onClick={handleNav} className="block lg:hidden">
            {nav ? (
              <IconContext.Provider value={{ color: "white" }}>
                <AiOutlineClose size={30} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "white" }}>
                <AiOutlineMenu size={30} />
              </IconContext.Provider>
            )}
          </div>
          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-6 text-sm text-white capitalize">
                <li className="font-bold border-b-4 border-b-[#61ba6d]">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/vision">About</NavLink>
                </li>

                <li>
                  <a>Courses offered</a>
                </li>
                <li>
                  <a>admissions</a>
                </li>
                <li>
                  <a>news</a>
                </li>
                <li>
                  <a>events</a>
                </li>
                <li>
                  <a>contact us</a>
                </li>
              </ul>
            </nav>
          </div>
          <ul
            className={
              nav
                ? "fixed right-0 top-0 w-[75%] h-full mt-14  navbar-main ease-in-out duration-500 space-y-4 capitalize px-4 pt-10"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <li className="font-bold text-xl text-white">Home</li>
            <li className="text-xl text-white font-semibold ">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="text-xl text-white font-semibold ">
              <a>Courses offered</a>
            </li>
            <li className="text-xl text-white font-semibold ">
              <a>admissions</a>
            </li>
            <li className="text-xl text-white font-semibold ">
              <a>news</a>
            </li>
            <li className="text-xl text-white font-semibold ">
              <a>events</a>
            </li>
            <li className="text-xl text-white font-semibold ">
              <a>contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
