import React from "react";
import data from "../Pages/Course/Data/data";
import { Link as NavigateLink } from "react-router-dom";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  const icons = [
    {
      id: 1,
      src: <IoLogoYoutube size={26} />,
      href: "https://www.youtube.com/channel/UChcqp29zl_6gq2u6n9EwL2w",
      targetTypr: "_blank",
    },
    {
      id: 2,
      src: <FaIcons.FaLinkedin size={26} />,
      href: "https://www.linkedin.com/in/ntech-tambaram/",
      targetTypr: "_blank",
    },
    {
      id: 3,
      src: <HiIcons.HiOutlineMailOpen size={26} />,
      href: "mailto: ntechtambaram@gmail.com",
      targetTypr: "_blank",
    },
    {
      id: 4,
      src: <FaIcons.FaWhatsappSquare size={26} />,
      href: "https://wa.me/6380821464?text= Hello How can i help you",
      targetTypr: "_blank",
    },
    {
      id: 5,
      src: <FaIcons.FaFacebookSquare size={26} />,
      href: "https://www.facebook.com/profile.php?id=100078435657658",
      targetTypr: "_blank",
    },
    {
      id: 6,
      src: <FaIcons.FaInstagram size={26} />,
      href: "https://www.instagram.com/ntechtambaram/",
      targetTypr: "_blank",
    },
  ];

  return (
    <footer className="text-slate-800 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* place for logo */}
            <span className="ml-3 text-xl font-bold">
              <span className="font-extrabold text-3xl text-customBlue">N</span>
              Tech{" "}
            </span>
          </div>
          <div>
            <p className="mt-2 text-md font-semibold ">
              11/81 Ramasamy St, JR Complex West Tambaram, near Girias Showroom
            </p>
          </div>
          <div className="mt-3 ml-10 md:ml-0 w-[50%] flex-wrap flex justify-center gap-5 items-center">
            {/*  sm:mr-16 */}
            {icons.map(({ id, src, href, targetTypr }) => (
              <div key={id} className="hover:scale-105 duration-200">
                <NavigateLink
                  className="cursor-pointer"
                  to={href}
                  target={targetTypr}
                >
                  {src}
                </NavigateLink>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex-grow flex justify-center items-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-center sm:text-center">
          {data.map(({ id, courseTitle }) => (
            <div key={id} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link to="courses" smooth="true" duration={600}>
                <h2 className="font-normal cursor-pointer tracking-widest text-sm mb-3 hover:scale-105 duration-200 hover:text-black hover:font-semibold">
                  {courseTitle}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
