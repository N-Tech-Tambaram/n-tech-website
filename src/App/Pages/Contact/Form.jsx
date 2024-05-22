import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const form = useRef();

  const printValues = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ougaynt",
        "template_5mqxsqp",
        form.current,
        "cw4yalCuGMjuKE1LS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setInputValues({
            name: "",
            email: "",
            courses: "",
            number: "",
            message: "",
          });
          toast.success("Your enquiry has been sended!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    courses: "",
    number: "",
    message: "",
  });

  const getValues = (e) => {
    const { name, value } = e.target;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const getSelectOptions = (e) => {
    const { value } = e.target;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      courses: value,
    }));
  };

  return (
    <div>
      <div className="text-gray-600 body-font relative">
        <div className="container px-5 py-32 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl  font-bold title-font mb-4 text-gray-900">
              Enquiry Form
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <form ref={form} onSubmit={printValues}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Name{" "}
                      <span className="font-bold text-customOrange">*</span>
                    </label>
                    <input
                      placeholder="John Doe"
                      type="text"
                      value={inputValues?.name}
                      onChange={getValues}
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Email{" "}
                      <span className="font-bold text-customOrange">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={inputValues?.email}
                      onChange={getValues}
                      placeholder="yourmail@mail.com"
                      name="email"
                      required
                      className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Course{" "}
                      <span className="font-bold text-customOrange">*</span>
                    </label>
                    <select
                      id="name"
                      name="name"
                      value={inputValues?.courses}
                      onChange={getSelectOptions}
                      required
                      className="w-full bg-gray-200 bg-opacity-50 rounded border py-2 border-gray-300 focus:border-indigo-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="no-courses">Select Courses</option>
                      <option value="Data Structures and algorithms">
                        Data Structure and Algorithms
                      </option>
                      <option value="C & C++">C and C++ </option>
                      <option value="Python mySql package">
                        Python MySql Package
                      </option>
                      <option value="Java mySql package">
                        Java MySql Package
                      </option>
                      <option value="Java React fullstack">
                        Java React Fullstack
                      </option>
                      <option value="UI / UX">UI / UX</option>
                      <option value=".NET (MVC)">.NET (MVC)</option>
                      <option value="Web Designing">Web Designing</option>
                      <option value="MS Office">MS Office</option>
                      <option value="Tally ERP 9 including GST">
                        Tally ERP 9 Including GST
                      </option>
                      <option value="Data Analysis and Advanced Excel">
                        Data Analysis and Advanced Excel
                      </option>
                      <option value="Data analysis and visualisation in Power BI">
                        Data Analysis and Visulisation in Power Bi
                      </option>
                      <option value="Python programming and Data Exploration">
                        Python Programming and Data Exploration
                      </option>
                      <option value="Social media marketing">
                        Social Media Marketing
                      </option>
                      <option value="SEO and SEM">SEO and SEM</option>
                      <option value="E Mail Marketing">E-Mail Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Mobile Number{" "}
                      <span className="font-bold text-customOrange">*</span>
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      required
                      value={inputValues?.number}
                      onChange={getValues}
                      placeholder="+91-XXXXX XXXXX"
                      name="number"
                      className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={inputValues?.message}
                      onChange={getValues}
                      name="message"
                      placeholder="Ask what ever you want about the courses"
                      className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto font-bold text-white bg-customOrange border-0 py-2 px-8 focus:outline-none  rounded text-lg"
                  >
                    Enquiry now...
                  </button>
                  <ToastContainer />
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-customBlue text-center"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
