import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-scroll";
import { FaHome, FaInfoCircle, FaGraduationCap, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

const links = [
  {
    id: 1,
    link: "home",
    icon: <FaHome size={26} className="inline mr-2 text-customBlue" />,
  },
  {
    id: 2,
    link: "about",
    icon: <FaInfoCircle size={26} className="inline mr-2 text-customOrange" />,
  },
  {
    id: 3,
    link: "courses",
    icon: <FaGraduationCap size={26} className="inline mr-2 text-customBlue" />,
  },
  {
    id: 4,
    link: "enquiry",
    icon: <FaPhoneAlt size={26} className="inline mr-2 text-customOrange" />,
  },
];


  return (
    <div className="flex justify-between z-10 items-center w-full h-20 text-white bg-[#0056D2] px-4 fixed shadow-lg">

      <div>
        <Link
          to="home"
          smooth="true"
          duration={600}
          className="text-4xl italic cursor-pointer font-bold "
        >
          <span className="text-customBlue font-extrabold text-7xl">N</span>
          Tech
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className="px-4 uppercase text-sm cursor-pointer font-bold hover:scale-105 duration-200"
          >
            <Link to={link} smooth="true" duration={600}>
              {icon}
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 text-slate-800 md:hidden"
      >
        {nav ? (
          <FaIcons.FaTimes className="text-customBlue" size={35} />
        ) : (
          <FaIcons.FaBars className="text-customOrange" size={35} />
        )}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-slate-700 ">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-gray-300 font-semibold uppercase py-4 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth="true"
                duration={500}
              >
                {icon}
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
