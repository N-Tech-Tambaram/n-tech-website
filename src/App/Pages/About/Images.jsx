import React from "react";
import { Link } from "react-scroll";

function Content() {
  const highlights = [
    {
      id: 1,
      highlight: "CAREER OPPORTUNITIES",
    },
    {
      id: 2,
      highlight: "PROJECT WORKSTATIONS",
    },
    {
      id: 3,
      highlight: "COMPLIANCE TRAINING",
    },
    {
      id: 4,
      highlight: "INSTRUCTORS AND MENTORS",
    },
    {
      id: 5,
      highlight: "SKILL DEVELOPMENT",
    },
    {
      id: 6,
      highlight: "RESUME BUILDING ",
    },
  ];

  const flex_details = [
    {
      id: 1,
      title: "Placement Support",
      details:
        "Assistance in finding suitable job opportunities after completing the programming course.",
    },
    {
      id: 2,
      title: "Mock Interviews",
      details:
        "Practice sessions to prepare for rewal job interviews, with feedback on performance.",
    },
    {
      id: 3,
      title: "Internship Programs",
      details:
        "Connecting students with relevant internships to gain practical experience.",
    },
    {
      id: 4,
      title: "Certification Programs",
      details:
        "Offering certifications in specific technologies or programming languages to enhance employability",
    },
  ];

  return (
    <div>
      <div className="text-gray-800 py-12 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-customBlue">
              <span className="text-6xl">N</span>Tech, Tambaram
            </h1>
            <div className="lg:w-2/3 mx-auto text-lg text-justify leading-relaxed font-semibold">
              <p>
                <span>
                  <span className="font-bold text-2xl">N</span>Tech Computer
                  Education, a proprietorship firm, was established making it 9+
                  years. The primary activity is in the services sector,
                  specifically classified into education and IT sectors. The
                  firm is engaged in other educational services and IT and
                  services, IT consulting, and other services. Assessing our
                  center alongside others highlights distinctive features and
                  strengths.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {flex_details.map(({ id, title, details }) => (
              <div
                key={id}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {title}
                </h2>
                <p className="leading-relaxed text-base mb-4">{details}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto mt-10 sm:mb-2 -mx-2">
            {highlights.map(({ id, highlight }) => (
              <div key={id} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-customBlue w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="enquiry" smooth duration={600}>
            <button className="flex mx-auto mt-10 font-bold text-white bg-customOrange border-0 py-2 px-8 focus:outline-none  rounded text-lg">
              Make a Enquiry
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
