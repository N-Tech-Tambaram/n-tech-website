import React, { useState } from "react";
import CourseDetails from "./Data/data";
import Modal from "../../Components/Modal";

function Courses() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="p-8 text-center">
            <h1 className="font-bold text-black text-2xl border-b-4 border-customOrange inline">
              All Courses
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {CourseDetails.map((course) => (
              <div key={course?.id} className="p-4 md:w-1/3">
                <div className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full bg-white">
                  {/* Top Image */}
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.bgImage})` }}
                  ></div>

                  {/* Content Below */}
                  <div className="flex-grow p-5">
                    <div className="flex items-center mb-3">
                      <h2 className="text-black text-lg title-font font-bold">
                        {course?.courseTitle}
                      </h2>
                    </div>
                    <p className="leading-relaxed text-black text-base">
                      {course?.content}
                    </p>
                    <button
                      onClick={() => handleOpenModal(course)}
                      className="mt-3 text-customBlue font-semibold inline-flex justify-end items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        course={selectedCourse}
        onClose={handleCloseModal}
        visible={showModal}
      />
    </div>
  );
}

export default Courses;
