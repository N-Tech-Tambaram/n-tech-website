import React, { useEffect } from "react";
import Content from "./Content";
import Images from "./Images";

function About() {
  useEffect(() => {
    document.title = "N Tech | About";
  });
  return (
    <div name="about">
      <Content />
      <Images />
    </div>
  );
}

export default About;
