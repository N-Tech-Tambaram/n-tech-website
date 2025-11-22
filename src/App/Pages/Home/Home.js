import React, { useEffect } from "react";
import Hero from "./Elements/Hero";
import About from "../About/About";
import CourseHome from "../Course/CourseHome";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonials/Testimonial";
import Sidebar from "../../Components/Sidebar";
// import Hero_copy from "./Elements/Hero_copy";

function Home() {
  useEffect(() => {
    document.title = "N Tech | The World Of Computing With Us!";
  });
  return (
    <>
      {/* <Hero_copy /> */}
      <Hero />
      <About />
      <CourseHome />
      <Testimonial />
      <Contact />
      <Sidebar />
    </>
  );
}

export default Home;
