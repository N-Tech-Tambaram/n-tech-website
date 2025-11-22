import React from "react";
// This is for linked in & Github & Resume
import * as FaIcons from "react-icons/fa";
// This is for Mail
import * as HiIcons from "react-icons/hi";

import { IoLogoYoutube } from "react-icons/io";

import { Link } from "react-router-dom";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <IoLogoYoutube size={30} /> Youtube
        </>
      ),
      href: "https://www.youtube.com/channel/UChcqp29zl_6gq2u6n9EwL2w",
      style: "rounded-tl-md",
      targetTypr: "_blank",
    },
    {
      id: 2,
      child: (
        <>
          <FaIcons.FaLinkedin size={30} /> Linkedin
        </>
      ),
      href: "https://www.linkedin.com/in/ntech-tambaram/",
      targetTypr: "_blank",
    },

    {
      id: 3,
      child: (
        <>
          <HiIcons.HiOutlineMailOpen size={30} /> Mail
        </>
      ),
      href: "mailto: ntechtambaram@gmail.com",
      targetTypr: "_blank",
    },
    {
      id: 4,
      child: (
        <>
          <FaIcons.FaWhatsappSquare size={30} /> WhatsApp
        </>
      ),
      href: "https://wa.me/6380821464?text= Hello How can i help you",
      targetTypr: "_blank",
    },
    {
      id: 5,
      child: (
        <>
          <FaIcons.FaFacebookSquare size={30} /> Faccebook
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100078435657658",
      targetTypr: "_blank",
    },
    {
      id: 6,
      child: (
        <>
          <FaIcons.FaInstagram size={30} /> Instagram
        </>
      ),
      href: "https://www.instagram.com/ntechtambaram/",
      targetTypr: "_blank",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[28%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, targetTypr }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-90px] hover:rounded-md duration-500 bg-customBlue" +
              " " +
              style
            }
          >
            <Link
              to={href}
              className="flex justify-between font-bold items-center w-full text-white"
              target={targetTypr}
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
