import React from "react";
import ntechBanner from "../../../Assets/banner/nTech_banner.png";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-scroll";

function Hero_copy() {
  const slogan_string =
    "Unlock Your Potential with N Tech Programming Courses!";

  const slogan = (
    <TypewriterComponent
      onInit={(typewriter) => {
        typewriter.typeString(slogan_string).start();
      }}
    />
  );

  return (
    <div name="home" className="text-slate-800 body-font">
      <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
          alt="hero"
          src={ntechBanner}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font tracking-wider sm:text-6xl font-engagement text-customOrange text-4xl font-extrabold ">
            Be Future Ready
          </h1>
          <div className="bg-white p-3 px-14 rounded-2xl text-customBlue text-lg sm:text-xl font-extrabold">
            <p>{slogan}</p>
          </div>
          <div className="mb-8 text-justify text-lg leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </div>

          <div className="flex gap-5 justify-center">
            <Link
              to="courses"
              smooth
              duration={600}
              className="inline-flex text-customBlue bg-blue-100 font-bold border-0 py-2 px-8 focus:outline-none cursor-pointer rounded text-lg"
            >
              Courses
            </Link>
            <Link
              to="enquiry"
              smooth
              duration={600}
              className="inline-flex  font-bold text-white bg-customOrange  py-2 px-8 focus:outline-none cursor-pointer rounded text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_copy;
