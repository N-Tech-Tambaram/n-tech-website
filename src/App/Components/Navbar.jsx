import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "courses",
    },
    {
      id: 4,
      link: "enquiry",
    },
  ];

  return (
    <div className="flex justify-between z-10 items-center  w-full h-20 text-slate-800 bg-gray-100 px-4 fixed">
      <div>
        <Link
          to="home"
          smooth="true"
          duration={600}
          className="text-4xl  italic cursor-pointer font-bold "
        >
          <span className="text-customBlue font-extrabold text-7xl">N</span>
          Tech
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 uppercase text-sm cursor-pointer  font-bold hover:scale-105 duration-200"
          >
            <Link to={link} smooth="true" duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 text-slate-800 md:hidden"
      >
        {nav ? (
          <FaIcons.FaTimes className="text-customBlue" size={25} />
        ) : (
          <FaIcons.FaBars className="text-customOrange" size={25} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-slate-700 ">
          {links.map(({ id, link, path }) => (
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
