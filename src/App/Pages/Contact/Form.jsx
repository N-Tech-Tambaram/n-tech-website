import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const form = useRef();

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    courses: "",
    number: "",
    message: "",
  });

  const printValues = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ougaynt",
        "template_5mqxsqp",
        form.current,
        "cw4yalCuGMjuKE1LS"
      )
      .then(() => {
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
        });
      });
  };

  const getValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const getSelectOptions = (e) => {
    setInputValues((prev) => ({ ...prev, courses: e.target.value }));
  };

  return (
    <div className="text-gray-600 body-font relative">
      {/* CUSTOM EFFECTS */}
      <style>
        {`
/* ====================
   ENTRY ANIMATIONS
===================== */
.slide-in {
  animation: slideFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slideFadeUp {
  from {
    opacity: 0;
    transform: translateY(70px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* =====================
   FLOATING HOVER EFFECT
===================== */
.float-field {
  transition: all 0.35s ease;
}

.float-field:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

/* =====================
   GLOW ON FOCUS (INPUTS)
===================== */
.glow-focus {
  transition: all 0.3s ease;
}

.glow-focus:focus {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(99,102,241,0.35),
    0 0 18px rgba(99,102,241,0.45);
}

/* =====================
   BUTTON WAVE EFFECT
===================== */
.btn-wave {
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
}

.btn-wave::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.45),
    transparent
  );
  transform: translateX(-100%);
}

.btn-wave:hover::after {
  animation: waveMove 0.6s ease;
}

@keyframes waveMove {
  to {
    transform: translateX(100%);
  }
}

.btn-wave:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 30px rgba(99,102,241,0.4);
}

/* =====================
   PULSE GLOW (CTA)
===================== */
.pulse-glow {
  animation: pulseGlow 2.5s infinite;
}

@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(99,102,241,0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(99,102,241,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99,102,241,0);
  }
}

/* =====================
   SMOOTH FADE SCALE
===================== */
.fade-scale {
  animation: fadeScale 0.7s ease forwards;
}

@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`}
      </style>
      <div className="container px-5 py-32 mx-auto slide-in">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
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
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "yourmail@mail.com",
                },
              ].map((field, i) => (
                <div
                  key={field.name}
                  className="p-2 w-1/2 slide-in float-field transition-all duration-500"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <label className="leading-7 text-sm text-gray-600">
                    {field.label}{" "}
                    <span className="font-bold text-customOrange">*</span>
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={inputValues[field.name]}
                    onChange={getValues}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-gray-200 rounded border border-gray-300 px-3 py-2
                    transition-all duration-300 glow-focus focus:bg-white focus:border-indigo-700"
                  />
                </div>
              ))}


              {/* COURSE – FIXED */}
              <div className="p-2 w-1/2 float-field p-2 w-1/2 slide-in float-field transition-all duration-500 delay-200">
                <label className="leading-7 text-sm text-gray-600">
                  Course <span className="font-bold text-customOrange">*</span>
                </label>
                <select
                  name="courses"
                  value={inputValues.courses}
                  onChange={getSelectOptions}
                  required
                  className="w-full bg-gray-200 rounded px-3 py-2 glow-focus"
                >
                  <option value="">Select Courses</option>

                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="AWS Cloud Architect">AWS Cloud Architect</option>

                  <option value="C & C++">C and C++</option>
                  <option value="C & C++ Programming">C & C++ Programming</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>

                  <option value="Data Analysis and Advanced Excel">
                    Data Analysis and Advanced Excel
                  </option>
                  <option value="Data analysis and visualisation in Power BI">
                    Data Analysis and Visulisation in Power Bi
                  </option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Data Structures and algorithms">
                    Data Structure and Algorithms
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="DevOps Engineering">DevOps Engineering</option>
                  <option value="DevOps with Terraform">DevOps with Terraform</option>

                  <option value="E Mail Marketing">E-Mail Marketing</option>

                  <option value="Flutter App Development">Flutter App Development</option>

                  <option value="Java Fullstack">Java Fullstack</option>
                  <option value="Java mySql package">Java MySql Package</option>
                  <option value="Java Programming">Java Programming</option>
                  <option value="Java React fullstack">Java React Fullstack</option>

                  <option value="MERN Stack Fullstack Development">
                    MERN Stack Fullstack Development
                  </option>
                  <option value="MS Office">MS Office</option>

                  <option value="Power BI – Data Analysis & Visualization">
                    Power BI – Data Analysis & Visualization
                  </option>
                  <option value="Prompt Engineering">Prompt Engineering</option>
                  <option value="Python mySql package">Python MySql Package</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Python programming and Data Exploration">
                    Python Programming and Data Exploration
                  </option>

                  <option value="SEO and SEM">SEO and SEM</option>
                  <option value="Social media marketing">Social Media Marketing</option>
                  <option value="Software Testing">Software Testing</option>

                  <option value="Tally ERP 9 including GST">
                    Tally ERP 9 Including GST
                  </option>

                  <option value="UI / UX">UI / UX</option>
                  <option value="UI / UX Designing">UI / UX Designing</option>

                  <option value="Web Designing">Web Designing</option>

                </select>
              </div>


              <div className="p-2 w-1/2 slide-in float-field transition-all duration-500 delay-300">
                <label className="leading-7 text-sm text-gray-600">
                  Mobile Number{" "}
                  <span className="font-bold text-customOrange">*</span>
                </label>
                <input
                  type="text"
                  name="number"
                  value={inputValues.number}
                  onChange={getValues}
                  placeholder="+91-XXXXX XXXXX"
                  required
                  className="w-full bg-gray-200 rounded border border-gray-300 px-3 py-2
                  transition-all duration-300 glow-focus focus:bg-white focus:border-indigo-700"
                />
              </div>

              <div className="p-2 w-full slide-in float-field transition-all duration-500 delay-500">
                <label className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={inputValues.message}
                  onChange={getValues}
                  placeholder="Ask what ever you want about the courses"
                  className="w-full bg-gray-200 rounded border border-gray-300 px-3 py-2 h-32 resize-none
                  transition-all duration-300 glow-focus focus:bg-white focus:border-indigo-700"
                />
              </div>

              <div className="p-2 w-full slide-in delay-700">
                <button
                  type="submit"
                  className="relative overflow-hidden mx-auto flex font-bold text-white bg-customOrange px-8 py-3 rounded text-lg
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 btn-wave"
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
  );
}

export default Form;
