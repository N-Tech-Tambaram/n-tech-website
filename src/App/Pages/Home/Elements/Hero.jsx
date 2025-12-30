import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ntechBanner from "../../../Assets/banner/nTech_banner.png";
import TypewriterComponent from "typewriter-effect";
import { MdVerified } from "react-icons/md";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    <div name="home">
      <div className="body-font">
        <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center">

          {/* LEFT CONTENT */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
                          flex flex-col md:items-start md:text-left 
                          mb-16 md:mb-0 items-center text-center">

            <h1 className="title-font tracking-wider sm:text-6xl 
                           font-engagement text-customOrange text-4xl 
                           mb-4 font-extrabold">
              Be Future Ready
            </h1>

            {/* Badge for mobile */}
            <div className="sm:hidden block hover:scale-105 duration-200">
              <span className="bg-customBlue flex gap-3 items-center 
                               rounded px-3 py-2 sm:px-5 sm:py-2">
                <MdVerified className="text-2xl text-white" />
                <span className="text-white text-xl font-bold">
                  100% Verified Courses
                </span>
              </span>
            </div>

            <div className="mt-8 sm:mb-4 text-slate-900 
                            text-justify font-medium leading-relaxed">
              <p>
              <span className="text-3xl text-customBlue font-bold">N</span> <span className="font-bold">Tech</span> provides a structured environment for individuals to acquire programming skills. Our center offers courses or internships covering various programming languages and related technologies. We have experienced instructors, hands-on projects, and resources to support learners in their journey to become proficient programmers. Choosing a reputable center can significantly enhance your learning experience and help you build a strong foundation in computer programming.
              </p>
            </div>

            <div className="bg-gray-200 mt-3 p-3 px-18 rounded 
                            text-customBlue text-lg sm:text-xl font-extrabold">
              <p>{slogan}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col mt-10 gap-6 sm:flex-row">
              <div className="hidden sm:block hover:scale-105 duration-200">
                <span className="bg-customOrange flex gap-3 items-center 
                                 rounded px-3 py-2 sm:px-5 sm:py-2">
                  <MdVerified className="text-2xl text-white" />
                  <span className="text-white text-xl font-bold">
                    100% Verified Courses
                  </span>
                </span>
              </div>

              <Link
                to="courses"
                smooth
                duration={600}
                className="inline-flex text-customBlue border border-customBlue 
                           font-bold py-2 px-8 focus:outline-none cursor-pointer 
                           rounded text-lg"
              >
                Courses
              </Link>

              <Link
                to="enquiry"
                smooth
                duration={600}
                className="inline-flex font-extrabold text-black bg-gray-100 
                           py-2 px-8 focus:outline-none cursor-pointer 
                           rounded text-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT — CAROUSEL */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

            <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <img
                  src="carsole1.jpeg"
                  className="w-full h-80 object-cover flex-shrink-0"
                  alt="carousel-1"
                />
                <img
                  src="carsole2.jpeg"
                  className="w-full h-80 object-cover flex-shrink-0"
                  alt="carousel-2"
                />
               <img
                src="carsole3.jpeg"
                 className="w-full h-80 object-cover flex-shrink-0"
                alt="carousel-3"
                />
                <img
                src="carsole4.jpeg"
                 className="w-full h-80 object-cover flex-shrink-0"
                alt="carousel-3"
                />
                <img
                src="carsole5.jpeg"
                 className="w-full h-80 object-cover flex-shrink-0"
                alt="carousel-3"
                />

              </div>

              {/* DOTS */}
              <div className="absolute bottom-4 left-0 right-0 
                              flex justify-center gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer 
                    ${currentIndex === i ? "bg-customBlue" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
