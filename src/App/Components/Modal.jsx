import React from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

function Modal({ visible, onClose, course }) {
  if (!visible) {
    return null;
  }

  const handleModalClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  return (
    <div
      id="modal-container"
      onClick={handleModalClose}
      className="fixed inset-0 bg-gray-600 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      {/* <div className="w-[90%] h-[75%] p-8 overflow-auto mt-12 md:mt-8 text-white bg-gray-700 md:w-[70%] lg:max-h-fit md:max-h-fit rounded"> */}
      <div className="w-full md:w-[90%] lg:w-[70%] h-3/4 md:h-[max-content] p-8 overflow-auto mt-12 md:mt-8 text-white bg-gray-700 rounded">
        <div className="flex justify-end mb-3">
          <span onClick={onClose} className="cursor-pointer text-2xl font-bold">
            <IoClose />
          </span>
        </div>
        <div className="text-white rounded bg-customBlue w-full p-4 text-center">
          <h1 className="text-xl font-semibold">{course?.courseTitle}</h1>
        </div>
        <div className="mt-4 ">
          <h3>{course?.popupContents?.mainContent}</h3>
        </div>
        <div className="mt-4 container mx-auto ">
          <table className="min-w-full border capitalize border-white mt-6">
            <tbody className="text-center">
              <tr className="border-b">
                <td className="border-r">
                  {course?.popupContents?.basicPoints.p1}
                </td>
                <td>{course?.popupContents?.advPoints.p1}</td>
              </tr>
              <tr className="border-b">
                <td className="border-r">
                  {course?.popupContents?.basicPoints.p2}
                </td>
                <td>{course?.popupContents?.advPoints.p2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex justify-center">
          <Link onClick={onClose} smooth="true" duration={600} to="enquiry">
            <button className="bg-customOrange px-8 py-2 rounded">
              Enquiry
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
