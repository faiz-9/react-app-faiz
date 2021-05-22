import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
let imgg = "https://source.unsplash.com/collection/wildlife/800x600";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page "
        imgsrc={imgg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
