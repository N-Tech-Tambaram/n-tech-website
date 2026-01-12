import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      icon: <FaHome size={22} className="text-customBlue" />,
    },
    {
      id: 2,
      link: "about",
      icon: <FaInfoCircle size={22} className="text-customOrange" />,
    },
    {
      id: 3,
      link: "courses",
      icon: <FaGraduationCap size={22} className="text-customBlue" />,
    },
    {
      id: 4,
      link: "enquiry",
      icon: <FaPhoneAlt size={22} className="text-customOrange" />,
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      
      <div className="fixed top-0 left-0 w-full h-20 bg-[#0056D2] text-white flex items-center justify-between px-4 shadow-lg z-50">

        {/* LOGO */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="text-3xl font-bold italic cursor-pointer"
        >
          <span className="text-customBlue text-5xl font-extrabold">N</span>
          Tech
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="flex items-center gap-2 uppercase text-sm font-bold cursor-pointer
              hover:scale-105 transition duration-300"
            >
              <Link to={link} smooth={true} duration={600}>
                {icon}
                <span className="ml-1">{link}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 z-40
        ${nav ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
        onClick={() => setNav(false)}
      ></div>

      {/* MOBILE SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-gradient-to-b from-[#0056D2] to-[#003c9e]
        transform transition-transform duration-500 ease-in-out z-50
        ${nav ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col mt-28 px-8 space-y-8">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="flex items-center gap-4 text-xl font-semibold text-white
              hover:translate-x-2 hover:text-customOrange transition-all duration-300"
            >
              <Link
                to={link}
                smooth={true}
                duration={600}
                onClick={() => setNav(false)}
                className="flex items-center w-full"
              >
                {icon}
                <span className="uppercase">{link}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
