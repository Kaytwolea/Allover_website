import React, { useState } from "react";
import NavbarHead from "./NavbarHead";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mobileextraNav, setMobileextraNav] = useState(false);
  const [aboutNav, setAboutNav] = useState(false);
  const [admissionsNav, setAdmissionsNav] = useState(false);

  const handleAdmissionNav = () => {
    setAdmissionsNav(!admissionsNav);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMobileNav = () => {
    setMobileextraNav(!mobileextraNav);
  };

  const handleAboutnav = () => {
    setAboutNav(!aboutNav);
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
                <li onClick={handleAboutnav}>
                  <NavLink>About</NavLink>
                </li>
                {aboutNav ? (
                  <div className="h-32 w-52 bg-white mt-10 absolute px-4 py-6 space-y-4">
                    <div>
                      <NavLink
                        to="/about"
                        className="uppercase text-base text-black font-normal border-b-2 border-b-[#6EBD55]"
                      >
                        About the school
                      </NavLink>{" "}
                    </div>
                    <div>
                      <NavLink
                        to="/vision"
                        className="uppercase text-base text-black font-normal border-b-2 border-b-[#6EBD55] pt-4"
                      >
                        our vision
                      </NavLink>
                    </div>
                  </div>
                ) : null}

                <li>
                  <a>Courses offered</a>
                </li>
                <li onClick={handleAdmissionNav}>
                  <NavLink>admissions</NavLink>
                </li>
                {admissionsNav ? (
                  <div className="h-36 w-56 bg-white mt-10 absolute right-[10rem] space-y-4 pl-2 py-4">
                    <div>
                      <NavLink
                        to="/about"
                        className="uppercase text-base text-black font-normal border-b-2 border-b-[#6EBD55]"
                      >
                        Diploma
                      </NavLink>{" "}
                    </div>
                    <div>
                      <NavLink
                        to="/vision"
                        className="uppercase text-base text-black font-normal border-b-2 border-b-[#6EBD55]"
                      >
                        National Diploma
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to="/vision"
                        className="uppercase text-base text-black font-normal border-b-2 border-b-[#6EBD55] whitespace-nowrap"
                      >
                        Higher National Diploma
                      </NavLink>
                    </div>
                  </div>
                ) : null}
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
                ? "fixed right-0 top-0 w-[75%] h-full mt-14  navbar-main ease-in-out duration-500 space-y-4 capitalize px-4 pt-10 text-xl text-white font-semibold "
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleMobileNav} className="">
              <NavLink>About</NavLink>
            </li>
            {mobileextraNav ? (
              <div>
                <NavLink to="/about" className="pl-4">
                  About us
                </NavLink>{" "}
                <br />
                <NavLink to="/vision" className="pl-4">
                  our vision
                </NavLink>
              </div>
            ) : null}

            <li className="">
              <a>Courses offered</a>
            </li>
            <li className="">
              <a>admissions</a>
            </li>
            <li className="">
              <a>news</a>
            </li>
            <li className="">
              <a>events</a>
            </li>
            <li className="">
              <a>contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
