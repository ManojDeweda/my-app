import React from "react";
import Common from "../Shared/Common";
import web from "../Assets/images/home/image1.jpeg";

function About() {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
